import { Link } from "react-router-dom";
import './Login.css'

const Login = ()=>{
    return (
        <>
          <div className="Login">
            <Link to="/">
              <img className="LoginLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWHGeJNNRVYqMRBFC7mRG57Haq8tA9XikzQYNcZKEDg&s" alt="" />
            </Link>

            {/*Login for Start */}
            <div className="LoginContainer">
                <h1>Sign In</h1>
                <form>
                    <h3>Email</h3>
                    <input type="email" placeholder="Your Email" required/>
                    <h3>Password</h3>
                    <input type="password" placeholder="Your password" required/>
                    <button className="LoginButton">Sign In</button>
                </form>
                <p>By Continuing, you agree to Amazon's Condition of Use and Privacy Notice.</p>
                <button className="LoginButton">Create Your Amazon Account</button>
            </div> 

          </div>
        </>
    )
}
export default Login;