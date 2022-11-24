export const Product = ({product, setCurrentSale}) => {
    const handleClick = (e) =>{
        e.preventDefault()
        setCurrentSale((oldList=>{
            return oldList.filter(item=>item.id!=product.id)
        }))
    }

    const {id, name, category, price, img} = product
    return (  
        <li>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h3>{category}</h3>
            <button onClick={handleClick}>Remover</button>
        </li>
    );
}
 
