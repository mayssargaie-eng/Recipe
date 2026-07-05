import { MealDetails } from "@/interfaces/meal-details.interface";

export async function getMealDetails(id: string): Promise<MealDetails | null> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/lookup.php?i=${id}`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return data.meals?.[0] ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
