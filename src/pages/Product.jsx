import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsId } from "../helpers/ApiProductos"

export const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        getProductsId(id).then(res=>setProduct(res))
    }, [])
  return (
    <main className="my-8">
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                   <img src={product.image} alt="" width={400} height={400} className="w-full h-full md:w-[500px] md:h-[500px] mx-auto" />
                </div> 
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">{product.title}</h3>
                    
                   
                    <div className="mt-2">
                       <p>{product.description}</p>
                    </div>

                    <div className="mt-5">
                        <p className="font-bold">Category: <span className="font-normal">{product.category}</span> </p>
                       
                    </div>

                    <p className="text-red-500 font-bold text-2xl mt-5">S/. {product.price}</p>

                    <div className="flex items-center mt-6">
                        <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Agregar al carrito</button>
                        <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
