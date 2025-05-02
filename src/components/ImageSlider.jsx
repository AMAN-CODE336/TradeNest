// src/components/ImageSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,             
    autoplayTimeout: 3000,      
    autoplayHoverPause: true,   
  };

  return (
    <div className="max-w-5xl mx-auto  mt-10">
      <Slider {...settings}>
        <div>
        <img src="images/bitcoin-Photoroom.png" alt="" className="h-40 w-40" />
        </div>
        <div>
          <img src="images/Cardano-coin-Photoroom.png" alt="Slide 2" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/eos-coin-Photoroom.png" alt="Slide 3" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/ethurum-coin-Photoroom.png" alt="Slide 4" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/lite-coin-Photoroom.png" alt="Slide 5" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/neo-coin-Photoroom.png" alt="Slide 6" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/ripple-coin-Photoroom.png" alt="Slide 7" className="h-40 w-40 rounded-2xl" />
        </div>
        <div>
          <img src="images/stellar-coin-Photoroom.png" alt="Slide 8" className="h-40 w-40 rounded-2xl" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
