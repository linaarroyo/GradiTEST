import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../styles/imgCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { map } from 'lodash';

const items = [
  {
    src: require("../img/tenis810-01.jpg"),
    altText: 'Slide 1',
    captionText: ""
  },
  {
    src:  require("../img/tenis810-02.jpg"),
    altText: 'Slide 2',
    captionText: ""
  },
  {
    src:  require("../img/tenis810-03.jpg"),
    altText: 'Slide 3',
    captionText: ""
  },
  {
    src:  require("../img/tenis810-04.jpg"),
    altText: 'Slide 3',
    captionText: ""
  }
];

class ImgCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.productJSON = props.productJSON;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    items = map(this.productJSON.images, image => {
      return {
      src:  require(image),
      altText: "Zapato",
      captionText: "",
    }});
    console.log(items);
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="400px" height="400px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
    );
  }
}


export default ImgCarousel;