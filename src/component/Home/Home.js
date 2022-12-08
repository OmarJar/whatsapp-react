import React from "react"
import Navbar from "./Navbar/Navbar"
import MainOne from "./Main-One/MainOne"
import MainTwo from "./Main-Two/MainTwo"
import MainThree from "./Main-Three/MainThree"
import Footer from "./Footer/Footer"
import PopUp from "./PopUp/PopUp"
import SideBar from "./SideBar/SideBar"

export default function Home() {
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
    )
}