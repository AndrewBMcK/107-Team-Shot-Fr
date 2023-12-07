import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="home page">
        <img src="./images/home-banner.png" alt="banner" />
        <div className="card-container">
        {/* Map over the card data and render MyCardComponent */}
        {cardData.map((card, index) => (
            <MyCardComponent key={index} {...card} />
        ))}
        </div>
    </div>
    );
}

function MyCardComponent({ title, imagePath, linkTo, buttonText }) {
    return (
    <div className="card">
        <img src={imagePath} className="card-img-top" alt={title} />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"></p>
        <Link to={linkTo} className="btn btn-primary">
            {buttonText || 'Go'}
        </Link>
        </div>
    </div>
    );
}

// Data for multiple cards
const cardData = [
    { title: 'Find LANs in your area', imagePath: './images/locallan.jpg', linkTo: '/locals', buttonText: 'Explore Locals' },
    { title: 'OpTic on the rise', imagePath: './images/ontherise.png', linkTo: '/randomarticle', buttonText: 'Read Article' },
    { title: 'New and Recruiting', imagePath: './images/t1logo.png', linkTo: '/randomarticle', buttonText: 'View Teams' },
];

export default Home;

