import React from 'react';
import './App.css';
import Header from './Components/GlobalComponents/Header/Header';
import Banner from './Components/Banner';
import Maincon from './Components/Maincon';
import Footer from './Components/GlobalComponents/Footer';
import Form from './Components/GlobalComponents/Form/Form';

function App() {
  return (
    <div className="App">
     {/* <Form /> */}
     <Header />
     <Banner />
     <Maincon />
     <Footer />
     
    </div>
  );
}

export default App;
