import './Products.css'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

const Products = ({title,image,price})=>{
    return(
        <>
        <div className="Products">
            <img src={image} alt="" />
            <div className="ProductsInformation">
                <p>{title}</p>
                <div className="ProdctsGroup">
                <p className="ProductsPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/*For the Rating */}
                <div className="ProductsRating">
                <StarBorderPurple500Icon/>
                </div>
                </div>
             </div>
             <button>Add To Cart</button>
        </div>
        
      
        
        
        </>
    )
}
export default Products;