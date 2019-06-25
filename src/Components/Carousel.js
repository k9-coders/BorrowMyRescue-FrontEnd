import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dog1 from './images/dog1.jpg';
import dog2 from './images/dog2.jpg';
import dog3 from './images/dog3.jpg';
import './Carousel.css';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <div className="banner">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="dogImage"
              src={dog1} alt='logo'
            />
            <Carousel.Caption>
              <h3>Jessie</h3>
              <p>Sweet affectionate girl</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="dogImage"
              src={dog2} alt='logo'
            />
  
            <Carousel.Caption>
              <h3>Oscar</h3>
              <p>Four years old</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="dogImage"
              src={dog3} alt='logo'
            />
  
            <Carousel.Caption>
              <h3>Alfie</h3>
              <p>Elvis Impersonator Smile</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        </div>
      );
    }
  }
  
  export default ControlledCarousel;