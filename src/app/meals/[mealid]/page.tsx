import { getMealDetails } from '@/services/meal-details.service';
import Image from 'next/image';
import React from 'react'
import { MealDetails } from '@/interfaces/meal-details.interface';

export default async function Page({params}: {params: Promise<{mealid: string}>}) {

    const {mealid} = await params

    const mealInfo: MealDetails | null = await getMealDetails(mealid);

    if (!mealInfo) {
      return (
        <div className='p-4'>
          <p>Meal not found or failed to load.</p>
        </div>
      )
    }

  return (
    <div className='flex gap-3 p-4'>
        <Image 
          src={mealInfo.strMealThumb} 
          alt={mealInfo.strMeal} 
          width={500} 
          height={500} 
          className='rounded-3xl'
        />
        <div>
          <h2>{mealInfo.strMeal}</h2>
          <p>{mealInfo.strInstructions}</p>
        </div>
    </div>
  )
}