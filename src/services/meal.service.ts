import { Meal } from "@/interfaces/meals.interface";

export async function getMealsByCategory(category: string): Promise<Meal[]> {
  try {
    const selected = category || "Beef";
    const url = `${process.env.API_BASE_URL}/filter.php?c=${selected}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data.meals ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
