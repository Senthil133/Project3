import React from "react";
import "./createListing.css";
import Header from "../../Components/Heater/header";
import Footer from "../../Components/Footer/footer";
import { Location,Upload,Image } from "../../res/Icons/Icon";
import { useParams } from "react-router-dom";
import { categorydata } from "./categorydata";


const CreateListing = () => {
    let {categorydataId} = useParams()

    1
    
    return(
    <div>
        <Header />
       <div className="createListing container flex col gap-4 px-2 py-4">
        <h1>Create a listing</h1>
        <div className="form">
            <div className="sellform flex row center gap-2 ">
                <div className="Add flex row gap-4 wrap ">
                <div className="category flex col gap-1">
                    <span>Category* {categories?.categoryname}{categories?.id}</span>
                    <input type="text" placeholder="" />
                </div>
               
                <div className="name flex col gap-1">
                    <span>Add Type*</span>
                    <input type="text" />
                </div>
                <div className="Mobile  flex col gap-1">
                    <span>Mobile Number*</span>
                    <div ><input placeholder="Mobile Number" /></div>
                </div>
                <div className="Mobile  flex col gap-1">
                    <span>WhatsApp Number*</span>
                    <div ><input placeholder="WhatsApp Number" /></div>
                </div>
                <div className="Original flex col gap-1">
                    <span>Original Price*</span>
                    <div ><input type="text"  placeholder="Original Price"/></div>
                    <button className="off">off 50%</button>
                </div>
                <div className="selling flex col gap-1">
                    <span>Selling Price</span>
                    <div ><input type="text"  placeholder="Selling Price"/></div>
                </div>
                <div className="aadhar  flex col gap-1">
                    <span>Aadhar card*</span>
                    <div ><button className="flex row gap-1" ><Upload /><span>Upload</span><input type="file" accept="image/*"  /></button></div>
                    
                </div>
                <div className="aadhar  flex col gap-1">
                    <span>Pan card*</span>
                    <div ><button className="flex row gap-1"><Upload /><span>Upload</span><input type="file" size="10mp" accept="image/*"  /></button></div>
                </div>
                
                </div>
                <div className="Add flex row wrap gap-3 ">
                <div className="Location flex col gap-1">
                    <span>Location*</span>
                    <div className="flex row gap-1">
                        {/* <Location /> */}
                        
                        <input type="text" /></div>
                </div>
                <div className="Specifications flex col gap-1">
                    <span>Specifications*</span>
                    <div ><textarea /></div>
                </div>
                <div className="Add flex col gap-1 ">
                    <span>Add Image</span>
                    <div className="flex row gap-3 wrap">
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 1</p></div>
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 2</p></div>
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 3</p></div>
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 3</p></div>
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 3</p></div>
                        <div className="flex col gap-1 middle center"><button className="imageInput"><Image /> <input type="file" accept="image/*"  /></button><p>image 3</p></div>
                        
                        
                    </div>
                    </div>
                </div>
            </div>
            <div className="save flex row py-8 gap-2 ">
                <button className="cancel" >Cancel</button>
                <button className="publish" >Publish</button>

            </div>

        </div>
       </div>
       <Footer />
     </div>
    )
}
export default CreateListing