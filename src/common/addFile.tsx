import { Dispatch, SetStateAction } from "react";
import { imagesTypes } from "../types";

type addFileTypes = (
    input: React.ChangeEvent<HTMLInputElement>,
    images: imagesTypes[],
    setImages: Dispatch<SetStateAction<imagesTypes[]>>,
    setCurrentImage: Dispatch<SetStateAction<string>>
) => void


export const addFile: addFileTypes = function (input, images, setImages, setCurrentImage) {

    const reader = new FileReader();
    const file = input.target.files![0];

    reader.onload = () => {
      const imgSrc = reader.result as string
      if(images.length > 4) {
        setImages((prevState: imagesTypes[]) => {
          return [...prevState.slice(1), {src: imgSrc, name: file.name}]
        })
          
        }
        else {
          setImages((prevState: imagesTypes[]) => [...prevState, {src: imgSrc, name: file.name}])
        }
        setCurrentImage(imgSrc)
      }

      reader.readAsDataURL(file)
  }