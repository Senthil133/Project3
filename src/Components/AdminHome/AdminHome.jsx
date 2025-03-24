import { Delete, Upload } from "../../res/Icons/Icon";
import "./AdminHome.css";
import image from "../../res/Images/background.png"
import HeroBanner from "../HeroBanner/HeroBanner";

const AdminHome = () => {
    return(
      <div className="AdminHome">
        <div className="flex col gap-2  py-2">
            <h1>Home</h1>
            {/* <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Hero Banner 1  </h2>
                    <div className="flex-1"></div>
                    <button><Delete /></button>
                </div>
                <div className="flex row gap-2">
                    <div className="flex col">
                        <span>Title Text</span>
                        <textarea />
                    </div>
                    <div className="flex col">
                        <span>Descriptions</span>
                        <textarea />
                    </div>
                    <div className="flex-1"></div>
                    <div className="Import flex row gap-2 ">
                        <button className="upload flex row gap-1"><Upload /> Import Image <input type="file" accept="image" /></button>
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div> */}
            <HeroBanner />

            <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Categories</h2>
                </div>
                <div className=" flex row gap-2">
                    <div className="catBox flex col gap-1">
                        <img src={image } alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image } alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image } alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image } alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                <button className="uploadCategories flex row gap-1"><Upload /> <input type="file" accept="image" /></button>
                    <div className="flex-1"></div>
                    <div className="flex row gap-2 "> 
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div>

            <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Recommended Categories</h2>

                </div>
                <div className="flex row gap-2 ">
                <div className="catBox flex col gap-1">
                        <div className="catBoxDelete"><button><Delete /></button></div>
                        <img src={image } alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image }  alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image }  alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="catBox flex col gap-1">
                        <img src={image }  alt="cat" />
                        <span>Categorie 1</span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="Import flex row gap-2 ">
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div>
            <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Home listing title </h2>
                </div>
                <div className="flex row gap-2">
                    <div className="flex col">
                        <span>listing title 1</span>
                        <input type="next" />
                    </div>
                    <div className="flex col">
                        <span>listing title 2</span>
                        <input type="next" />
                    </div>
                    <div className="flex col">
                        <span>listing title 3</span>
                        <input type="next" />
                    </div>
                    <div className="flex-1"></div>
                    <div className="Import flex row gap-2 ">
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div>
            <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Banner </h2>
                </div>
                <div className="flex row gap-2">
                    <div className="flex col">
                        <span>Title Text</span>
                        <textarea />
                    </div>
                    <div className="flex col">
                        <span>Descriptions</span>
                        <textarea />
                    </div>
                    <div className="flex-1"></div>
                    <div className="Import flex row gap-2 ">
                        <button className="upload flex row gap-1"><Upload /> Import Image <input type="file" accept="image" /></button>
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div>
            <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Footer</h2>
                </div>
                <div className="flex row gap-2">
                    <div className="flex col">
                        <span>Descriptions</span>
                        <textarea />
                    </div>
                    <div className="flex-1"></div>
                    <div className="Import flex row gap-2 ">
                      
                        <div className="save"><button >Save</button></div>
                    </div>

                </div>

            </div>

        </div>
      </div>
    )
}
export default AdminHome