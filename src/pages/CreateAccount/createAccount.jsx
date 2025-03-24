import Header from "../../Components/Heater/header";
import Footer from "../../Components/Footer/footer";
import "./createAccount.css"
import { useNavigate } from "react-router-dom";
import { UserEmail, UserPassword } from "../../res/Icons/Icon"

const CreateAccount = () => {
    const navigate = useNavigate();
  
    const goNavigate = (e, url) => {
      e.preventDefault()
      window.scrollTo(0,0);
      navigate(url)
    };
    return(
         <div className="createAccount">
            <Header />
             <div className="account flex middle center py-6">
                <form className="accountBox flex col gap-2 ">
                    <h1>Create Account</h1>
                    <p>Don't have an account yet? Register here!</p>
                    <div className="flex col gap-2">
                        <label>Phone Number</label>
                        <div className="input flex row gap-2 middle "><input type="text" /></div> 
                    </div>
                    <div className="flex col gap-2">
                        <label>Email</label>
                        <div className="input flex row gap-2 middle "><UserEmail /><input type="email" /></div> 
                    </div>
                    <div className="flex col gap-2">
                        <label>Password</label>
                        <div className="input flex row gap-2 middle "><UserPassword /><input type="password" /></div> 
                    </div>
                    <div className="flex col gap-2">
                        <label>Confirm Password</label>
                        <div className="input flex row gap-2 middle "><UserPassword /><input type="password" /></div> 
                    </div>
                   <button type="submit" onClick={(e)=>goNavigate(e, "/login")}>Create account</button>
                </form>
             </div>

            <Footer />
         </div>
    )
}
export default CreateAccount