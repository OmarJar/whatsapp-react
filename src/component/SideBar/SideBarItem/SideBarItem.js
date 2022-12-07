import React from "react"


export default function SideBarItem(props) {

    return (
        <div className="sidebar">
            <a href="."><span>{props.title}</span></a>
        </div>
    )
}