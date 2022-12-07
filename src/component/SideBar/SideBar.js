import React from "react"
import "./sidebar.css"
import navItems from "./SideBarItem/navItems.js"
import SideBarItem from "./SideBarItem/SideBarItem"
import languages from "../PopUp/Languages"
import SideBarOptions from "./SideBarItem/SideBarOptions"

document.addEventListener("click", function (event) {
    event.preventDefault()
})

const showSidebar = () => {
    document.getElementById("sidebar-list").style.display = "block"
    document.getElementById("sidebar-list").style.width = "767px"
    document.getElementById("body").style.height = "100%"
    document.getElementById("body").style.overflow = "hidden"
    document.getElementById("close-btn").style.display = "block"


}
const hideSidebar = () => {
    document.getElementById("sidebar-list").style.width = "0px"
    document.getElementById("body").style.overflow = "scroll"
}


export default function SideBar() {

    const newNavOrder = navItems.map(navItem => {
        return <SideBarItem
            key={navItem.id}
            {...navItem}
        />
    })

    const list = languages.map(language => {
        return <SideBarOptions
            key={language.id}
            {...language}
        />

    })

    return (
        <div >
            <div className="new-nav-order">
                <div className="burger-menu">
                    <img onClick={showSidebar} src="./images/menu.svg" alt="" />
                </div>
            </div>

            <div id="sidebar-list">
                <div className="mobile-bar">
                    <img src="./images/whatsapp-nav.svg" alt="" />
                    <a href="." id="close-btn" onClick={hideSidebar}>
                        <img src="images/close-btn.svg" alt="" />
                    </a>
                </div>
            
                <div className="new-order-list">
                    {newNavOrder}
                    <select className="select sidebar" defaultValue={"English"}>
                        {list}
                    </select>
                </div>
            
            </div>
        </div>
    )
}