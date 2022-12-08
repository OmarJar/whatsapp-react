import React from "react"
import "./main-two.css"
import database from "../../../data"

export default function MainTwo() {

    return (
        <div className="second-part">
            <div className="third-container">
                <div className="inner-container">
                    <div className="left-business">
                        <h1>{database.h1}</h1>
                        <p className="whatsapp-business"><span>{database.pSpan} </span>{database.paragraph}</p>
                        <p className="whatsapp-business">{database.secondParagraph} <span>{database.p2Span}</span></p>
                        <img src={database.catalog} className="catalog" alt="catalog" />
                    </div>
                    <div className="circle-emoji">
                        <div className="circle">
                            <img src={database.hello} alt="" />
                        </div>
                        <h3>{database.h3}</h3>
                        <h1>{database.security}</h1>
                        <p>{database.thrdP}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}