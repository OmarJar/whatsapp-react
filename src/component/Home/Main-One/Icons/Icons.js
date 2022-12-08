import React from "react"

export default function Icons(props){
    return(
        <>
            <div>
                <img className="svg-icon-devices" src={props.svgImg} alt=""/>
                <span className="devices-names">{props.title}</span>
                <img className="flipped" src={props.svgImg2}  alt=""/>
            </div>
        </>
    )
}