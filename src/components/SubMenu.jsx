import { useEffect, useState } from "react";
import { Category } from "../helpers/ApiCategory";

export const SubMenu = ({setFilter}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    Category().then((res) => setCategory(res));
  }, []);


  return (
    <div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <button className="hover:bg-blue-800 hover:text-white px-5 py-3 space-x-2 text-gray-600" onClick={()=>setFilter("")}>Todos</button>
      {category?.map((cate) => (
        <button
          class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 hover:bg-blue-800 hover:text-white"
          onClick={()=>setFilter(cate)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{cate}</span>
        </button>
      ))}
    </div>
  );
};
