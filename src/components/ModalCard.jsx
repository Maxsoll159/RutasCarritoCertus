import { useContext, useState } from "react";
import { ContextProduct } from "../context/AppContext";

export const ModalCard = () => {
  const { cardProduct } = useContext(ContextProduct);
  console.log(cardProduct);
  const [modal, setModal] = useState(false);
  const total = cardProduct.reduce((acc, prod) => {
    return acc + (prod.price * (prod.cantidad || 1));
  }, 0);

  return (
    <>
      <button
        className="bg-white p-2 rounded-md"
        onClick={() => setModal(true)}
      >
        Carrito
      </button>
      {modal === true && (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-50">
          <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div class="w-full p-10">
              <div class="m-8 mx-auto">
                <div class="">
                  <h1 class="mb-4 text-3xl font-extrabold">
                    Productos del Carrito
                  </h1>
                  {cardProduct.length > 0 ? (
                    cardProduct.map((prod) => (
                      <div className="flex items-center justify-between">
                        <img src={prod.image} alt="" width={50} height={50} />
                        <p>{prod.title}</p>
                        <p>S/.{prod.price}</p>
                      </div>
                    ))
                  ) : (
                    <h2>No tienes Productos</h2>
                  )}
                  <p className="text-left w-full font-bold text-2xl flex justify-end">Total S/. {total}</p>
                </div>
                <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => setModal(false)}>Cerrar Modal</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
