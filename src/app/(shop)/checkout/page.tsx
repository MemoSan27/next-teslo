import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
]

export default function() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      
        <div className="flex flex-col w-[1000px]">
          
          <Title 
            title="Verify order"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            { /* Cart */}
            <div className="flex flex-col mt-5">
                <span className="text-xl"> Fix products </span>

                <Link
                  href="/cart"
                  className="underline mb-5"
                >
                  Edit Cart
                </Link>
            

            { /* Cart items */}
            {
              productsInCart.map( product => (
                <div key={product.slug} className="flex mb-5">
                  <Image 
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px',
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price} x 3</p>
                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  </div>
                </div>
              ))
            }
            </div>


            { /* Checkout */}
            <div style={{ height: '650px'}} className="bg-white rounded-xl shadow-xl p-7">

                <h2 className="text-2xl mb-2 font-bold">Deliver Address</h2>
                <div className="mb-10">
                  <p className="text-xl">Guillermo Sandoval</p>
                  <p>Hacienda de los pinos 6236</p>
                  <p>Fracc. Hacienda del Seminario</p>
                  <p>Mazatlan, Sin.</p>
                  <p>CP. 82150</p>
                  <p>6699418129</p>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-0.5 rounded bg-gray-200 mb-10"
                />
               
                <h2 className="text-2xl mb-2"> Order summary </h2>

                <div className="grid grid-cols-2">
                  <span># of Products</span>
                  <span className="text-right">3 articles</span>

                  <span>Subtotal</span>
                  <span className="text-right">$ 100</span>

                  <span>Taxes(15%)</span>
                  <span className="text-right">$ 100</span>

                  <span className="mt-5 text-2xl">Total:</span>
                  <span className="mt-5 text-2xl text-right">$ 100</span>
                </div>

                <div className="mt-5 mb-2 w-full">
                  <p className="mb-5">
                    { /* Disclaimer */ }
                    <span className="text-xs">
                      After you click "Assign order", you are accepting &nbsp;
                      <a href="#" className="underline">Terms and Conditions </a>
                      &nbsp; and our
                      <a href="#" className="underline"> Privacity Policies </a>
                    </span>
                  </p>

                  <Link 
                  href="/orders/123"
                  className="flex btn-primary justify-center"  
                  >
                    Assing order
                  </Link>
                </div>
            </div>

          </div>

        </div>

    </div>
  );
}