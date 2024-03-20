import './Cart.css'

const Cart = ()=>{
    return(
        <>
        <div className="Cart">
            <div className="CartLeft">
                {
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" className='CartAdd' alt="" />
                }
                <div>
                    <h1>Your Cart is Empty</h1>
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG5.png" className='ImgCartEmpty' alt="" />
                </div>
            </div>
        </div>
        </>
        )
}
export default Cart;