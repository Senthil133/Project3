import "./admin.css";
import Menu from "../../../Components/AdminMenu/menu";
import AdminHome from "../../../Components/AdminHome/AdminHome"

const Admin = () => {
    return(
        <div className="container Admin px-2">
            <div className="flex  row gap-2">
                <Menu />
                <AdminHome />

            </div>

        </div>
    )
}
export default Admin