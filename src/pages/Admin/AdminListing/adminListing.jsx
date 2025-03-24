import "./adminListing.css";
import Menu from "../../../Components/AdminMenu/menu";
import { profileData } from "../AdminUser/profileData";

const AdminListing = () => {
    return(
        <div className="container Admin px-2">
            <div className="flex  row gap-2">
                <Menu />

                <div className="adminListing py-2 flex col gap-2 w-full">
                    
                <div className="userList" >
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone-Number</th>
                            <th>Location</th>
                            <th>Product List</th>
                        </tr>
                        {profileData && profileData.length && profileData.map((profileData,index) => (
                        <tr key={`profileData_${index}${profileData}`}>
                            <td className="flex row gap-1 middle "><div className="profileImg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3txmUKe4_EbnSi6LnqZWR-0WVQ0wHntXzWg&usqp=CAU" alt="profile" /></div>{profileData?.userName}</td>
                            <td>{profileData?.userEmail}</td>
                            <td>{profileData?.userNumber}</td>
                            <td>{profileData?.userLocation}</td>
                            <td>{profileData?.userList}</td>
                        </tr>
                        ))}
                    </table>

                </div>
                
                </div>
                

            </div>

        </div>
    )
}
export default AdminListing