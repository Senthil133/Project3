import Header from "../../Components/Heater/header"
import Footer from "../../Components/Footer/footer"
import "../CreateAccount/createAccount.css"
import { Google, UserEmail, UserPassword } from "../../res/Icons/Icon"


const Login = () => {
 
    return(
         <div className="createAccount">
            <Header />
             <div className="account flex middle center py-6">
                <form className="accountBox flex col gap-2 ">
                    <h1>Login</h1>
                    <p>Already have an account? Please, login!</p>
                    <div className="flex col gap-2">
                        <label>Email</label>
                       <div className="input flex row gap-2 middle"><UserEmail /><input type="email" /></div> 
                    </div>
                    <div className="flex col gap-2">
                        <label>Password</label>
                       <div className="input flex row gap-2 middle"><UserPassword /><input type="password" /></div> 
                    </div>
                    <button type="submit"  >Login</button>
                    <div className="flex w-full middle center">
                       <div>Remember Me</div>
                       <div className="flex-1"></div>
                       <button className="fpword ">Forgot password?</button>
                    </div>
                    <button className="lgwithgoogle flex row gap-2"><Google />Login with Google</button>
                   
                </form>
             </div>

            <Footer />
         </div>
    )
}
export default Login