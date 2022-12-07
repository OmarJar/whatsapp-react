import React from "react"
import "./navbar.css"
import "../PopUp/popup.css"
import ListItem from "./ListItem/ListItem"
import data from "./ListItem/data"
import database from "../../data"

function toggleDiv() {
    const div = document.getElementById("pop")
    div.classList.toggle("toggle")
}

function Navbar() {

    const listItem = data.map(element => {
        return <ListItem
            key={element.id}
            {...element}
        />
    })

    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="brand">
                        <img id="nav-img" src={database.navbar} alt="" />
                        <img id="nav-tab" src={database.whatsAppTablet} alt="" />
                    </div>
                    <div className="list">
                        {listItem}
                    </div>

                    <div className="languages-items" onClick={toggleDiv}>
                        <img src="./images/world.svg" alt="" />
                        <span><h5 className="en">EN</h5></span>
                        <img id="down-img" src="./images/down.svg" alt="" />
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
export { toggleDiv, ListItem }