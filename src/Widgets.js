import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
                
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Tesla in India","Tesla Inc is exploring an arrangement with Indian conglomerate Tata Sons' power generation unit, Tata Power, to set up charging infrastructure for electric vehicles in the country.")}
            {newsArticle("Coronavirus!","India's Covid-19 tally climbed to 1,20,95,855 with 56,211 more people testing positive for the infection in a span of 24 hours, while 271 more fatalities pushed death toll to 1,62,114, according to the Union health ministry's data updated on Tuesday. Registering a steady increase for the 20th day in row, active cases have increased to 5,40,720 comprising 4.47 per cent of the total infections, while the recovery rate has further dropped to 94.19 per cent.")}
            {newsArticle("Assembly Elections 2021 Live Updates","NDA has development agenda while Congress and DMK have dynasty agenda, says PM Modi in Tamil Nadu")}
            {newsArticle("Can states take care of their migrant workers?","When the nationwide lockdown due to Covid-19 was announced on March 24 last year, the reverse migration that ensued exposed the extreme limitations of many state governments in handling the crisis.")}
            {newsArticle("Monsoon 2021","IMD to forecast water-level rise in all dams, river basins for effective reservoir management")}

        </div>
    )
}

export default Widgets
