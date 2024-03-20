import { Link } from "react-router-dom";
import './Profile.css'

const Profile = ()=>{
    return(
        <>
         <div className="Profile">
            <Link to="/">
                <img src="https://w.forfun.com/fetch/7c/7c158345377a23a2f00f6425a1a05de7.jpeg" className="ProfileLogo" alt="" />
            </Link>

            {/*Profile */}
            <div className="ProfileContainer">
                <h1>Your Profile</h1>
                <form >
                    <h3>Name</h3>
                    <input type="text" placeholder="Enter your Name" required/>
                    <h3>Email</h3>
                    <input type="email" placeholder="Enter your Eamil" required />
                    <h3>Mobile</h3>
                    <input type="number" placeholder="Enter your Number" required/>
                    <button className="ProfileButton">Update Profile</button>
                </form>
            </div>
         </div>
        </>
    )
}
export default Profile;