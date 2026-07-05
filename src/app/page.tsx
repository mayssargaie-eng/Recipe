import Image from "next/image";
import Categories from "./_components/Categories";
import MealsCategory from "./_components/MealsCategory";

export default async function Home({searchParams}:{searchParams:Promise<{category:string}>}) {

const params = await searchParams ;


  return (
    

<>



{/* categories */}


<Categories/>
<MealsCategory category={params.category}/>

</>


  );
}
