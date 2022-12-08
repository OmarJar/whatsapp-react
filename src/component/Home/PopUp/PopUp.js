import React from "react"
import "./popup.css"
import languages from "./Languages"
import database from "../../../data"
import { toggleDiv } from "../Navbar/Navbar"

const PopUp = () => {
    
    const list = languages.map(language => {
        return (
            <div className="lang" key={Math.random().toString(16).slice(2)}>
                {language.title}
            </div>
        )
    })

    return (
        <>
            <div id="pop" className="popup">
                <div className="select-language">
                    <h1 className="languages-title">Select your language</h1>
                    <img src={database.upArrow} alt="" className="flipped" onClick={toggleDiv} />
                </div>

                <div className="languages-list">
                    {list}
                </div>
            </div>
        </>
    )
}

export default PopUp