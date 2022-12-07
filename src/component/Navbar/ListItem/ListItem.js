import React from "react"

export default function ListItem(props) {
    return (
        <div className="list-item">
            <span><h5>{props.title}</h5></span>
        </div>
    )

}