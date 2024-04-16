const products = ['Bags', 'Shoes', 'Accessories']

function Resell(props){
    const products = props.products;
    return(

        <>
        <h1>Products to resell</h1>
        {products.length > 0 &&
        
        <h2>
                You have {products.length} products you can resell.
        </h2>
        
        
        }
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<Resell />);