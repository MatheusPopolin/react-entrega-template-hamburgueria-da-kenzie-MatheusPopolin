export const Product = ({product, setCurrentSale}) => {
    const handleClick = (e) =>{
        e.preventDefault()
        setCurrentSale((oldList=>{        
            if(oldList.filter(item=>product.id===item.id).length===0){
                return [...oldList, product]
            }
            return oldList
        }))
    }

    const {id, name, category, price, img} = product
    return (  
        <li>
            <img src={img} alt={name} />
            <div className="infosConatiner">
                <h2>{name}</h2>
                <h3>{category}</h3>
                <p>{price}</p>
                <button onClick={handleClick}>Adicionar ao carrinho</button>
            </div>
        </li>
    )
}
