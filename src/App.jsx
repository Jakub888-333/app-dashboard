import { useState } from "react"
import React from "react"
import Body from "./layout/Body"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import LeftMenu from "./layout/LeftMenu"
import "./layout/css/main.css"

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <div id="my-app">
      <Header />
      <div id="middle-box">
        <LeftMenu activeIndex={activeIndex} onActiveIndexChanged={setActiveIndex}/>
        <Body activeIndex={activeIndex} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
