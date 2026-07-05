'use client'
import { Category } from '@/interfaces/categories.interface'
import { useRouter ,useSearchParams} from 'next/navigation';

import React, { useState } from 'react'


export default function CategoriesCard({
  categories,
}:{
  categories:Category[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const searchParams = useSearchParams();
  const router = useRouter();

function handleCategoryClick(category: string){

setActiveCategory(category);

const  params = new URLSearchParams(searchParams);
params.set('category',category)
router.push(`?${params.toString()}`)


}

  return (
    <div className='flex flex-wrap gap-4 my-5'>
      
{categories.map((category:Category)  => (

  <button 
  key={category.idCategory}
   onClick={()=>handleCategoryClick (category.strCategory)}

  className={`shadow-lg  bx-4 py-2 bg-gray-50 rounded-3xl
   ${activeCategory == category.strCategory?'bg-linear-to-r from-[#F29525] to-[#E87C35]' :""}`}>

{category.strCategory}

  </button>
))}



    </div>
  )
}
