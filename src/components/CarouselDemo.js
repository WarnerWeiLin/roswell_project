import React from 'react';
import Carousel from 'nuka-carousel';
import Item from "../stylingComponents/Item";
import Image from "../stylingComponents/Image";
import Header from "../stylingComponents/Header";
import ProductName from "../stylingComponents/ProductName";
import ProductPrice from "../stylingComponents/ProductPrice";
import Container from "../stylingComponents/Container";
import ButtonContainer from "../stylingComponents/ButtonContainer";
import './CarouselDemo.css';
import * as data from '../product_data/challenge.products.json';

class CarouselDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      slideIndex: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.renderProductItems = this.renderProductItems.bind(this);
    this.prevButtonClass = this.prevButtonClass.bind(this);
    this.nextButtonClass = this.nextButtonClass.bind(this);

  }

  prevSlide() {
    if (this.state.slideIndex === 0) {
      return;
    }
    let newSlideIndex = this.state.slideIndex - 1;
    this.setState({
      slideIndex: newSlideIndex
    });
  }

  nextSlide() {
    if (this.state.slideIndex === this.state.products.length - 4) {
      return;
    }
    let newSlideIndex = this.state.slideIndex + 1;
    this.setState({
      slideIndex: newSlideIndex
    });
  }

  prevButtonClass () {
    return `${this.state.slideIndex === 0 ? 'disabledButton' : ""} fa fa-chevron-circle-left button-style-override`;
  }

  nextButtonClass () {
    return `${this.state.slideIndex === 22 ? 'disabledButton' : ""} fa fa-chevron-circle-right button-style-override`;
  }

  renderProductItems(products) {
    return products.map((item) =>
      <Item key={item.id}>
        <Image
          src={item.images[0].src}
          alt={item.images[0].id}
        />
        <ProductName>{item.title}</ProductName>
        <ProductPrice>from ${item.variants[0].price}</ProductPrice>
      </Item>
    );
  }


  render() {
    return (
      <Container className='vertical-layout'>
        <div className='horizontal-layout'>
          <Header>
          SHOP BESTSELLERS
        </Header>
          <ButtonContainer>
            <button className={this.prevButtonClass()} onClick={this.prevSlide}></button>
            <button className={this.nextButtonClass()} onClick={this.nextSlide}></button>
          </ButtonContainer>
        </div>
        <Carousel
          slidesToShow={4}
          slideIndex={this.state.slideIndex}
          renderBottomCenterControls={() => { 'null' }}
          renderCenterLeftControls={() => { 'null' }}
          renderCenterRightControls={() => { 'null' }}
        >
          {this.renderProductItems(this.state.products)}
        </Carousel>
      </Container>
    );
  }
}

export default CarouselDemo