import { Link } from 'react-router-dom';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const carouselImages = [img1, img2, img3, img4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="text-4xl max-w-2xl font-bold tracking-tight capitalize sm:text-6xl">
          We make technology accessible to everyone
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Innovative Solutions for Electronic, Embedded, and Smart IoT Technologies
        </p>
        <div className="mt-10">
          <Link to="/login" className="btn btn-primary uppercase">
            Login
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt="alt"
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
      })}
      </div>
    </div>
  );
};
export default Hero;
