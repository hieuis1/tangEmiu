import Carousel from 'react-bootstrap/Carousel';
import { products } from '../data';

function TestCarousel() {
  return (
    <Carousel>
      {products.map((item) =>{
        return(

    <Carousel.Item>
        <img src={item.imageUrl} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}

    </Carousel>
  );
}

export default TestCarousel;