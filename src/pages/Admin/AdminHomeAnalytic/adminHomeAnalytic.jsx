import "../Adminpage/admin.css";
import Menu from "../../../Components/AdminMenu/menu"
import AdminAnalytic from "../../../Components/AdminAnalytic/AdminAnalytic";

const AdminHomeAnalytic = () => {
    return(
        <div className="container Admin px-2">
            <div className="flex  row gap-2">
                <Menu />
                <AdminAnalytic />

            </div>

        </div>
    )
}
export default AdminHomeAnalytic