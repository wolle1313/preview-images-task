import { Dispatch, SetStateAction } from "react";
import { imagesTypes } from "../types"

interface ImgListItemProps {
    imageData: imagesTypes;
    setCurrentImage: Dispatch<SetStateAction<string>>;
    currentImage: string;
}

export const ImgListItem = ({currentImage, imageData, setCurrentImage}: ImgListItemProps) => {

    return(
        <li onClick={() => setCurrentImage(imageData.src)} className={`selectImgItem ${currentImage === imageData.src? 'selected' : ''}`}>
            <div className="imageName">
                {imageData.name}
            </div>
        <div className="bottomLine"/>
        </li>
    )
}