// import { useState } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// function ImageCropper() {
//     const [src, setSrc] = useState(null);
//     const [crop, setCrop] = useState({ aspect: 16 / 9 });
//     // const [image, setImage] = useState(null);
//     const [image, setImage] = useState('https://placebear.com/g/200/200');
//     const [output, setOutput] = useState(null);

//     const selectImage = (file) => {
//         setSrc(URL.createObjectURL(file));
//     };

//     const cropImageNow = () => {
//         const canvas = document.createElement('canvas');
//         // console.log(image)
//             const image = new Image();
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//           //  ctx.clearRect(0, 0, canvas.width, canvas.height);
//         const ctx = canvas.getContext('2d');

//         const pixelRatio = window.devicePixelRatio;
//         canvas.width = crop.width * pixelRatio;
//         canvas.height = crop.height * pixelRatio;
//         ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//         ctx.imageSmoothingQuality = 'high';
//         // ctx.clearRect(0, 0, canvas.width, canvas.height);
//         console.log(image)

//         ctx.drawImage(
//             image,
//             crop.x * scaleX,
//             crop.y * scaleY,
//             crop.width * scaleX,
//             crop.height * scaleY,
//             0,
//             0,
//             crop.width,
//             crop.height,
//         );
       
       

//         // Converting to base64
//         const base64Image = canvas.toDataURL('image/jpeg');
//         image.src = base64Image
//         setOutput(base64Image);
//     };

//     return (
//         <div className="App">
//             <center>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => {
//                         selectImage(e.target.files[0]);
//                     }}
//                 />
//                 <br />
//                 <br />
//                 <div>
//                     {src && (
//                         <div>
//                               <ReactCrop crop={crop} onChange={c => setCrop(c)}>       <img src={src} />     </ReactCrop>
//                             <br />
//                             <button onClick={cropImageNow}>Crop</button>
//                             <br />
//                             <br />
//                         </div>
//                     )}
//                 </div>
//                 <div>{output && <img src={output} />}</div>
//             </center>
//         </div>
//     );
// }
// export default ImageCropper;
import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCropper() {
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [image, setImage] = useState(null);
    const [output, setOutput] = useState(null);

    const selectImage = (file) => {
        setSrc(URL.createObjectURL(file));
    };

    const onImageLoaded = (img) => {

      // The onImageLoaded callback is called when the ReactCrop component loads the image
      setImage(img);
  };

    const cropImageNow = () => {
      if (!image || !image.width || !image.height) {
        console.error('Image not fully loaded or has invalid dimensions.');
        return;
    }

    const canvas = document.createElement('canvas');
    const scaleX = image.width / image.naturalWidth;
    const scaleY = image.height / image.naturalHeight;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
        image,
        crop.x,
        crop.y ,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
    );

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    setOutput(base64Image);
    };

    return (
        <div className="App">
            <center>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        selectImage(e.target.files[0]);
                    }}
                />
                <br />
                <br />
                <div>
                    {src && (
                        <div>
                            <ReactCrop
                                src={src}
                                crop={crop}
                                onChange={(c) => setCrop(c)}
                                onComplete={onImageLoaded}
                            >
                                <img src={src} alt="Selected" />
                            </ReactCrop>
                            
                            <br />
                            <button onClick={cropImageNow}>Crop</button>
                            <br />
                            <br />
                        </div>
                    )}
                </div>
                <div>{output && <img src={output} alt="Cropped" />}</div>
            </center>
        </div>
    );
}

export default ImageCropper;
