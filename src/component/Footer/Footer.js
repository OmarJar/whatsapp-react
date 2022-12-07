import React from "react"
import "./footer.css"
import { whatsApp, company, download, help } from "./menus"
import FooterItem from "./FooterItem"
import database from "../../data"

export default function Footer() {
    const whatsAppCol = whatsApp.map(element=><FooterItem key={element.id}{...element}/>)
    const companyCol = company.map(element=><FooterItem key={element.id}{...element}/>)
    const downloadCol = download.map(element=><FooterItem key={element.id}{...element}/>)
    const helpCol = help.map(element=><FooterItem key={element.id}{...element}/>)
    
    
    return (
        <footer>
            <div className="top-foot">
                <div className="foot-menu">
                    <ul className="footer-ul">
                        {whatsAppCol}
                    </ul>
                    <ul className="footer-ul">
                        {companyCol}
                    </ul>
                    <ul className="footer-ul">
                        {downloadCol}
                    </ul>
                    <ul className="footer-ul">
                        {helpCol}
                    </ul>
                </div>
            </div>
            <div className="bottom-foot">
                <div className="dodo">
                    <h4>{database.LLC}</h4>
                    <div className="privacy-terms">
                        <a href="https://www.google.com/">{database.terms}</a>
                        <img src={database.whiteArrow} className="arrow-svg flipped" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}