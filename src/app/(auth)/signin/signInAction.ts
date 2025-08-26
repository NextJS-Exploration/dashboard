"use client";

import { redirect } from "next/navigation";

export async function signInAction(
  currentState: any,
  formData: FormData
): Promise<any> {
  const email = formData.get('email')?.toString() || "";
  const password = formData.get('password')?.toString() || "";

  let res;

  try {
    res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  } catch (err) {
    return { general: "Internal Server Error" };
  }

  let json;
  try {
    json = await res.json();
  } catch (err) {
    return { general: "Internal Server Error" };
  }

  if (res.ok) {
    redirect('/dashboard')
  } else {
    // Take only the first error of each field
    const firstErrors = Object.fromEntries(
      Object.entries(json.error || {}).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value
      ])
    );

    // Return firstErrors or a general message if none
    if (Object.keys(firstErrors).length === 0) {
      return { status: res.status, general: [json.message] }
    } else {
      return firstErrors
    }
  }
}
