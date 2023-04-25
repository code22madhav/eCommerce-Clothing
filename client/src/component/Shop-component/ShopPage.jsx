import { useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import ProductCard from "../Product-card-component/Product.card";
import './shopPage.style.css'

const Shop= ()=>{
    const {products} = useContext(ProductContext);
    return(
        <div className="Shop-container">
            {products.map((product)=>{
            return(
                <ProductCard key={product.id} product={product}/>
            )
            })}
        </div>
    )
}

export default Shop;