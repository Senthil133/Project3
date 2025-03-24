import { TreadingDown, TrendinUp } from "../../res/Icons/Icon";
import "./AdminAnalytic.css";

const AdminAnalytic = () => {
    return(
        <div className="AdminAnalytic">
            <div className="flex col gap-2  py-2">
                <h1>Analytics</h1>
                <div className="analytic flex col gap-2 px-2 py-4">
                    <div className="flex row gap-6">
                        <div className="analyticUser flex col gap-2 p-1">
                            <div className="flex">
                                <div className="flex w-full">
                                    <div className="flex row gap-1 middle center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DsV9EbwvNRPD9zecXyhd27zDFRCP45ZHHw&usqp=CAU" alt="" />  
                                   <div>
                                        <h3>Saran</h3>  
                                        <span>Admin</span> 
                                    </div> 
                                    </div>  
                                    <div className="flex-1"></div>    
                                    <div className="flex col middle center">
                                        <span><TrendinUp /></span>
                                        <div>2000</div>
                                        <div className=""></div>
                                    </div>                     
                                    </div>
                            </div>
                            <div>
                                        <p>Total Product</p>
                                    </div>
  

                        </div>
                        <div className="analyticUser flex col gap-2 p-1">
                            <div className="flex">
                                <div className="flex w-full">
                                    <div className="flex row gap-1 middle center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DsV9EbwvNRPD9zecXyhd27zDFRCP45ZHHw&usqp=CAU" alt="" />  
                                   <div>
                                        <h3>Saran</h3>  
                                        <span>Admin</span> 
                                    </div> 
                                    </div>  
                                    <div className="flex-1"></div>    
                                    <div className="flex col middle center">
                                        <span><TrendinUp /></span>
                                        <div>2000</div>
                                        <div className=""></div>
                                    </div>                     
                                    </div>
                            </div>
                            <div>
                                        <p>Total User</p>
                                    </div>
  

                        </div>
                        <div className="analyticUser flex col gap-2 p-1">
                            <div className="flex">
                                <div className="flex w-full">
                                    <div className="flex row gap-1 middle center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DsV9EbwvNRPD9zecXyhd27zDFRCP45ZHHw&usqp=CAU" alt="" />  
                                   <div>
                                        <h3>Saran</h3>  
                                        <span>Admin</span> 
                                    </div> 
                                    </div>  
                                    <div className="flex-1"></div> 
                                    <div className="flex row gap-1">
                                    <div className="flex col middle center">
                                        <span><TrendinUp /></span>
                                        <div>2000</div>
                                        <div className=""></div>
                                    </div> 
                                    <div className="flex col middle center">
                                        <span><TreadingDown /></span>
                                        <div>2000</div>
                                        <div className=""></div>
                                    </div> 
                                        
                                        </div>   
                                                        
                                    </div>
                            </div>
                            <div>
                                        <p>Kyc</p>
                                    </div>
  

                        </div>

                    </div>
                    <div className="flex row gap-6">
                        <div className="graph">

                        </div>
                        <div className="analyticList">

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminAnalytic