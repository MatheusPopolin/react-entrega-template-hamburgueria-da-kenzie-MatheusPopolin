import { Product } from "../Product";

export const ProductsList = ({products, setCurrentSale,  filteredProducts,}) => {
    return (  
        filteredProducts.length>0 ?
        <ul>
            {filteredProducts.map((product,index)=><Product key={index} product={product} setCurrentSale={setCurrentSale}/>)}
        </ul> 
        :       
        <ul>
            {products.map((product,index)=><Product key={index} product={product} setCurrentSale={setCurrentSale}/>)}
        </ul>        
    );
}
 
