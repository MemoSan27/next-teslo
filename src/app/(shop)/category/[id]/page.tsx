import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;
interface Props{
  params:{
    id: string;
  }
}

export default function({ params }:Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id );
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

  if( id !== 'men' && id !== 'women' && id !== 'kid' ){
    notFound();
  }

  return (
    <>
     <Title 
        title={`${capitalizedId} section`}
        subtitle={`${capitalizedId} products`}
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
    </>
  );
}