import React from "react"
import "./main-three.css"
import database from "../../../data"

export default function MainThree() {
    return (
        <div className="third-part">
            <a href="https://www.google.com/"><span>{database.explore}</span></a>
        </div>
    )
}