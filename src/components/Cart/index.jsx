import { Product } from "./Product";


export const Cart = ({currentSale, setCurrentSale, cartTotal}) => {   
    

    const handleClick = (e) =>{
        e.preventDefault()
        setCurrentSale([])        
    }

    return (  
        <aside>
            <h2>Carrinho de compras</h2>
            {currentSale.length>0 ? 
                <>
                    <ul>
                        {currentSale.map((product,index)=><Product key={index} product={product} setCurrentSale={setCurrentSale}/>)}
                    </ul>
                    <div>
                        <h2>Total</h2>
                        <p>{cartTotal.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</p>
                    </div> 
                    <button onClick={handleClick}>Remover Todos</button>
                </>
                
                :
                <div>
                    <h2>Sua sacola está vazia</h2>
                    <h3>Adicione Itens</h3>
                </div>
            }
        </aside>
    );
}
 
