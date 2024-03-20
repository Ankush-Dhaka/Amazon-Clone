import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = ()=>{
return<>
  <nav className='header'>
    <div className="headerTop">
        <div className="headerLeftNaV">
        <MenuIcon/>
        </div>
        {/*logo*/}
        <Link to='/'>
            <img className='logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        {/*logo*/}

        <div className="headerSearch">
           <input type="text" className="headerSearchInput" />
           <SearchIcon className='headerSearchIcon'/>
        </div>
        {/*Links*/}
        <div className="headerNavbar">
            {/*signout/signin*/}
            <Link to='/Login' className='headerLink'>
                <div className="headerOptions">
                    <span className="headerOption_one">Hello</span>
                    <span className="headerOption_two">User</span>
                </div>
            </Link>
            {/*Return Order*/}
            <Link to='/Orders' className='headerLink'>
                <div className="headerOptions">
                    <span className="headerOption_one">Return</span>
                    <span className="headerOption_two">Order</span>
                </div>
            </Link>
            {/*Prime*/}
            <Link to='/' className='headerLink'>
                <div className="headerOptions">
                    <span className="headerOption_one">Try</span>
                    <span className="headerOption_two">Prime</span>
                </div>
            </Link>
            {/*Profile*/}
            <Link to='/Profile' className='headerLink'>
                <div className="headerOptions">
                    <span className="headerOption_one">Your</span>
                    <span className="headerOption_two">Profile</span>
                </div>
            </Link>
            {/*Basket*/}
            <Link to='/Cart' className='headerLink'>
                <div className="headerOptions_Basket">
                    <ShoppingBasketIcon/>
                    <span className="headerOption_two basketCount">4</span>
                </div>
            </Link>
        </div>
        {/*Links*/}
    </div>

    {/*Navbar Bottom*/}
    <div className="headerBottom">
        {/*Address */}
        <div className="headerAddress">
            <div className="headerAddress_Icon">
               <LocationOnIcon/>
            </div>
            <div className="headerOptions">
                    <span className="headerOption_one">Delivery To</span>
                    <span className="headerOption_two">Easy Coding</span>
                </div>
        </div>
        {/*Header Bottom Nav */}
        <div className="headerBottom_Navbar">
        <span>
            <Link to='/ListProducts' className='headerLink'>All Products</Link>
        </span>
        <span>Book</span>
        <span>New Release</span>
        <span>Gift Ideas</span>
        <span>Easy Coding</span>
        <span>Amazon Pay</span>
        </div>
       
    </div>
    {/*Navbar Bottom*/}
  </nav>
</>
}
export default Header;