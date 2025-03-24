import "./HeroBanner.css"
import { Delete, Upload ,Add} from "../../res/Icons/Icon";

const HeroBanner = () => {
    return(
        <div className="banner flex col gap-2 px-4 py-4">
                <div className="w-full flex row">
                    <h2>Hero Banner 1  </h2>
                    <div className="flex-1"></div>
                    <div className="flex gap-1 row">
                        <button><Add /></button>
                        <button><Delete /></button></div>
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
    )
}
export default HeroBanner