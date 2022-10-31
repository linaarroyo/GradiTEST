import React from "react";
import '../styles/imgCarousel.css';
import Slider from 'infinite-react-carousel';
import { map } from 'lodash';

const ImgCarousel = (props) => {
  const {productJSON} = props;
  let media = productJSON.media;
  return (
    <section className="slider">
      <Slider 
        nextArrow={<button type="button">{"->"}</button>}
        prevArrow={<button type="button">{"<-"}</button>}
        dots
      >
        {map(media, image => {
          return (
            <div key={image.id} className="slider__content--item">
              <img src={image.src} alt={image.alt}/>
            </div>
          );
        })}
      </Slider>
    </section>
  )
}

export default ImgCarousel