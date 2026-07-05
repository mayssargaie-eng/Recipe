import { getMealsByCategory } from '@/services/meal.service';
import { Meal } from '@/interfaces/meals.interface';
import React from 'react'
import { Category } from '@/interfaces/categories.interface';
import Link from 'next/link';
import Image from 'next/image';

export default async function MealsCategory({category}:{category:string}) {
  const meals: Meal[] = await getMealsByCategory(category);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16 px-10'>
      {meals.length > 0 && meals.map((meal: Meal) => (
        <div 
          className='meal-card p-7 relative rounded-3xl border border-gray-400 flex flex-col items-center text-center group' 
          key={meal.idMeal}
        >
          <div className='rounded-full group-hover:rotate-[360deg] transition-transform duration-700 -mt-20 mb-4 relative z-10'>
            <Image 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              width={120} 
              height={120} 
              className='rounded-full w-[120px] h-[120px] object-cover border-4 border-white shadow-md'
            />
          </div>

          <h2 className='line-clamp-1 font-semibold'>
            {meal.strMeal}
          </h2>

          <Link 
            href={`/meals/${meal.idMeal}`}
            className='inline-block mt-3 px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition'
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  )
}