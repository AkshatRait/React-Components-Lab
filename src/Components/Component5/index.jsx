import { useState } from "react";
import "./index.css";

const Component5 = () => {
  const [images, setImages] = useState([
    "https://img.game8.co/3526948/3d43677a8c7dd9b636e438e12b2f4287.png/show", // Placeholder image 1
    "https://media.forgecdn.net/avatars/230/289/637059773258434252.png", // Placeholder image 2
    "https://lh3.googleusercontent.com/8BH3il0uuRYhqV-x9F2m6c-leT46CTc13ZjCu-vs3Y4KNI1y79h2KOIjXKHiA-lM8xkIf_dd7LLZ_q2pn6WNPYshyRNOC_Zox3g=s400",
    "https://media.forgecdn.net/avatars/230/289/637059773258434252.png",
    "https://art.pixilart.com/thumb/009344b907d0694.png",
    "https://wiki.hypixel.net/images/6/67/Minecraft_items_torch.png"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (images.length - 1 === currentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousImage = () => {
    if (images.length - 1 === currentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="image-carousel">
      <img src={images[currentIndex]} alt="" />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Component5;
