import slugify from "slugify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ModelName = keyof typeof prisma;
type SlugField = string;

export async function generateUniqueSlug({
  base,
  model,
  field = "slug",
}: {
  base: string;
  model: ModelName;
  field?: SlugField;
}): Promise<string> {
  let slug = slugify(base, { lower: true, strict: true });
  let count = 0;

  while (true) {
    const whereClause = { [field]: slug };

    // @ts-ignore – Dynamic access to model
    const existing = await prisma[model].findFirst({
      where: whereClause,
    });

    if (!existing) break;

    count++;
    slug = slugify(`${base}-${count}`, { lower: true, strict: true });
  }

  return slug;
}