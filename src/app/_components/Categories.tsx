import React from 'react'
import { Category } from '@/interfaces/categories.interface';
import { getCategories } from '@/services/categories.service';
import CategoriesCard from './CategoriesCard';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({

 subsets:['latin'],
 weight:'400'

})
export default async function categories() {

const {categories} :{categories:Category[]} = await getCategories();

console.log(categories)

  return (
   <section>

<div className="container px-7">
    
<h1 className={`${pacifico.className} bg-linear-to-r from-[#F29525] to-[#E87C35] bg-clip-text text-transparent text-3xl font-bold`}>

learn, cook, Eat your food
</h1>
{categories?.length > 0 && (

<CategoriesCard categories = {categories}/>

)}

</div>

   </section>
  )}

