import React from "react"
import "./App.css"
import Navbar from "./component/Navbar/Navbar"
import MainOne from "./component/Main-One/MainOne"
import MainTwo from "./component/Main-Two/MainTwo"
import MainThree from "./component/Main-Three/MainThree"
import Footer from "./component/Footer/Footer"
import PopUp from "./component/PopUp/PopUp"
import SideBar from "./component/SideBar/SideBar"

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <SideBar />
      <PopUp />
      <MainOne />
      <MainTwo />
      <MainThree />
      <Footer />
    </div>
  );
}

export default App;
