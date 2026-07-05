import { Category } from "@/interfaces/categories.interface";

export async function getCategories(): Promise<{ categories: Category[] }> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/categories.php`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return { categories: data.categories ?? [] };
  } catch (error) {
    console.error(error);
    return { categories: [] };
  }
}
