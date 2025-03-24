import { AdminAccount, AdminAnalytic, AdminHome, AdminListing, AdminUser } from "../../res/Icons/Icon";
import "./menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {

    const navigate = useNavigate();
  
    const goNavigate = (e, url) => {
      e.preventDefault()
      window.scrollTo(0,0);
      navigate(url)
    };

    return(
        <div className="menu flex col gap-2 px-4 py-6">
            <button className="flex row gap-1 px-2" onClick={(e)=>goNavigate(e, "/admin")}><AdminHome /> Home</button>
            <button className="flex row gap-1 px-2" onClick={(e)=>goNavigate(e, "/adminHomeAnalytic")}><AdminAnalytic /> Analytics</button>
            <button className="flex row gap-1 px-2" onClick={(e)=>goNavigate(e, "/adminUser")}><AdminUser /> Users</button>
            <button className="flex row gap-1 px-2" onClick={(e)=>goNavigate(e, "/adminListing")}><AdminListing /> Listing</button>
            <button className="flex row gap-1 px-2"><AdminAccount /> Account</button>

        </div>
    )
}
export default Menu