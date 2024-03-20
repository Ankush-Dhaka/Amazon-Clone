import './App.css'
import Header from './layout/Header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import ListProducts from './Components/ListProducts/ListProducts';
import Order from './Components/Order/Order';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';

const App=()=>{
   return<>
      <Router>
         <div>
            <Routes>
               <Route path='/' element={[<Header/>,<Home/>,<Footer/>]}/>
               <Route path='/Login' element={<Login/>}/>
               <Route path='/ListProducts' element={[<Header/>,<ListProducts/>,<Footer/>]}/>
               <Route path='/Orders' element={[<Header/>,<Order/>,<Footer/>]}/> 
               <Route path='/Profile' element={<Profile/>}/>
               <Route path='/Cart' element={[<Header/>,<Cart/>,<Footer/>]}/>
            </Routes>
         </div>
      </Router>
   </>
}
export default App;