import React from "react"
import "./main-one.css"
import data from "./Icons/data"
import Icons from "./Icons/Icons"
import database from "../../data"

export default function MainOne() {
    const { bigWhat, simple, reliable, pWith, pStar, bigImg, whatsAppCut, downloadNow } = database
    const icons = data.map(icon => {
        return <Icons
            key={icon.id}
            {...icon}
        />
    })

    return (

        <div className="main-one-container">
            <div className="wrapper">
                <div className="big-what">
                    <img src={bigWhat} alt="" />
                </div>
                <div className="main-one-left">
                    <div className="simple-secure">
                        <h1>{simple}</h1>
                        <h1>{reliable}</h1>
                        <p id="p-with">{pWith}</p>
                        <p id="p-star">{pStar}</p>
                        <div className="download-button">
                            <a href="."><span>{downloadNow}</span></a>
                        </div>
                    </div>
                    <div className="icons">
                        {icons}
                    </div>
                </div>
                <div className="main-one-right">
                    <img className="big-whatsapp big-whatsapp-tablet" src={bigImg} alt="" />
                    <img className="big-whatsapp big-whatsapp-mobile" src={whatsAppCut} alt="" />
                </div>
            </div>
        </div>

    )

}