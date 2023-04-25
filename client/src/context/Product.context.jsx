import { createContext, useState } from "react";

import PRODUCTS from '../../src/Shop-data.json';

export const ProductContext= createContext({
    Products:[],
});

export const ProductProvider=({children})=>{
    const [products,setproducts]=useState(PRODUCTS);
    const value={products};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}