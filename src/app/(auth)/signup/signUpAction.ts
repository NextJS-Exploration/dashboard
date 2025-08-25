"use client";

export async function signupAction(
  currentState: any,
  formData: FormData
): Promise<any> {
  const firstName = formData.get('firstName')?.toString() || "";
  const lastName = formData.get('lastName')?.toString() || "";
  const email = formData.get('email')?.toString() || "";
  const phone = formData.get('phone')?.toString() || "";
  const password = formData.get('password')?.toString() || "";
  const passwordConfirmation = formData.get('passwordConfirmation')?.toString() || "";
  const gender = formData.get('gender')?.toString() || "";
  const address = formData.get('address')?.toString() || "";

  let res;

  try {
    res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password,
        passwordConfirmation,
        gender,
        address
      }),
    });
  } catch (err) {
    console.log(err);
    return { general: "Internal Server Error" };
  }

  let json;
  try {
    json = await res.json();
  } catch (err) {
    console.log(err);
    return { general: "Internal Server Error" };
  }

  if (res.ok) {
    return { success: true } // show modal
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
      return { general: [json.message] }
    } else {
      return firstErrors
    }
  }
}
