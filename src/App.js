import React from 'react';
import './App.css';
import CarouselDemo from './components/CarouselDemo.js';
import ShopBestSellersButton from "./stylingComponents/ShopBestSellersButton";

function App(props){
    return (
      <div className="App">
        <CarouselDemo/>
        <a href="https://gravityblankets.com/collections/best-sellers">
          <ShopBestSellersButton>
            SHOP ALL BEST SELLERS
          </ShopBestSellersButton>
        </a>
      </div>
    );
  };

export default App;
