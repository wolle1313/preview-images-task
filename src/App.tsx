import { useState } from 'react';
import './App.css';
import { addFile } from './common/addFile';
import { ImgListItem } from './components/ImgLi';
import { imagesTypes } from './types/globalTypes';

function App() {
  const [images,setImages] = useState<imagesTypes[]>([])
  const [currentImage, setCurrentImage] = useState('')

const imagesList = images.map(image => <ImgListItem currentImage={currentImage} key={image.name} imageData={image} setCurrentImage={setCurrentImage}/>)
  return (
    <div className="App">
      <div className='imgMenu'>
        <ul className='listContainer'>
          {imagesList}
          <li className="selectImgItem addNewImg">
            <input id='file' accept='image/png, image.jpg' onChange={(e) => addFile(e, images, setImages, setCurrentImage)} type="file"/>
            <label className="imageName" htmlFor='file'>+ Upload New Image</label>
          </li>
        </ul>
      </div>
      <div className='currentImageWrapper'><img alt='currentPic' className='currentImage' style={{display: currentImage? "block": 'none'}} src={currentImage} /></div>
    </div>
  );
}

export default App;
