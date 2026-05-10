import img1 from "../assets/img/gallery/gall-1.jpg";
import img2 from "../assets/img/gallery/gall-2.jpg";
import img3 from "../assets/img/gallery/gall-3.jpg";
import img4 from "../assets/img/gallery/gall-4.jpg";
import img5 from "../assets/img/gallery/gall-5.jpg";
import img6 from "../assets/img/gallery/gall-6.jpg";

const images = [img1, img2, img3, img4, img5, img6];
const GalleryPage = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage
