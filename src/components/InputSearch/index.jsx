export const InputSearch = ({products ,setFilteredProducts}) => {
    const setFilter = (e) => {
        e.preventDefault()
        const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredProducts(filteredProducts)
    }
    
    return (  
        <div>
            <input onChange={setFilter} type="text" placeholder="Digitar pesquisa"/>
            <button>Pesquisar</button>
        </div>        
    );
}
 
