import React, { useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import Menu from "../components/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartProduct } from "../redux/cartSlice";
import { getAllProductItems } from "../utils/firebaseFunctions";
import { setProductItem } from "../redux/productSlice";
import RenderFilter from "../components/renderFilter";
import Loading from "../utils/Loading";

const MenuStatic = () => {
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(state => state.productItem.productLoading)
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllProductItems();
        // console.log("data - ", data);
        setRenderProducts(data)
        dispatch(setProductItem(data));
      } catch (error) {
        console.log(error);
      }
    })();

  }, []);

  
  //   const params = useParams()
  const navigate = useNavigate();

  const data = productItem.filter(
    (product) => product.id == "1719488732134",
    []
  )[0];
  // console.log(productItem);

  const cartProduct = useSelector((state) => state.cartProduct);

  const [inputSearch,setInputSearch] = useState('');
const [renderProducts,setRenderProducts] = useState([])
// console.log(renderProducts)
// setRenderProducts(productItem)
// console.log(inputSearch)
  const methodForSearch = ()=>{
    if(inputSearch.length > 0){
      const filteredProducts= renderProducts.filter(product =>product.title.toLowerCase().includes(inputSearch.toLowerCase()));
      setRenderProducts(filteredProducts)
      
    }
    else{
      setRenderProducts(productItem)
    }
  }
 
  return (
    <div className="h-full">
      <div class="relative w-full max-w-xl mx-auto bg-white rounded-full">
        <input
          placeholder="e.g. Blog"
          class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100  hover:outline-none focus:ring-red-100 focus:border-slate-200"
          type="text"
          name="query"
          id="query"
          onChange={(e)=>setInputSearch(e.target.value)}
        />
        <button
          type="submit"
          class="absolute inline-flex items-center h-10 px-2 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-red-400 sm:px-6 sm:text-base sm:font-medium hover:bg-red-500"
          onClick={()=>methodForSearch()}
        >
          <svg
            class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="my-6 flex flex-wrap gap-4 max-w-screen m-auto justify-center">
        {productLoading ? 
          (
          <div className="bg-slate-100 w-full p-16 flex justify-center items-end">
            <Loading/>
          </div>
        )
        : (
          // filterData.map((el) => (
          //   <RenderFilter
          //     key={el.id+"menu"}
          //     id={el.id}
          //     name={el.title}
          //     img={el.imgURL}
          //     decs={el.category}
          //     price={el.price}
              
          //   />
          // ))
          
          renderProducts.map((el) => {
            return  <RenderFilter
                key={el.id + "menu"}
                id={el.id}
                name={el.title}
                img={el.imgURL}
                decs={el.category}
                price={el.price}
              />;
            })
        )}
      </div>
     
      {/* <Menu filterbyProps="all" /> */}
    </div>
  );
};

export default MenuStatic;
