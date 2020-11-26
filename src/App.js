import React from 'react';
import './App.css';
import CarouselDemo from './components/CarouselDemo.js';
import Button from "./stylingComponents/Button";

function App(props){
    return (
      <div className="App">
        <CarouselDemo/>
          <a href="https://gravityblankets.com/collections/best-sellers">
            <Button>
              SHOP ALL BEST SELLERS
            </Button>
          </a>
      </div>
    );
  };

export default App;
