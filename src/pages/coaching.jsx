import React from 'react';
import { Link } from 'react-router-dom';
import "./coaching.css";

function Coaching() {
    // Define MyCardComponent within the Coaching function
    function MyCardComponent({ title, imagePath, linkTo }) {
        return (
            <div className="card">
                <Link to={linkTo}>
                    <img src={imagePath} className="card-img-top" alt={title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"></p>
                    {/* You can remove the "Go" button */}
                </div>
            </div>
        );
    }

    // Data for multiple cards
    const cardData = [
        { title: 'Dota 2', imagePath: './images/Dota-2-Logo.png', linkTo: '/dota2coaches' },
        { title: 'League of Legends', imagePath: './images/League-of-Legends-Logo.png', linkTo: '/lolcoaches' },
        { title: 'Counter Strike 2', imagePath: './images/CounterStrike2.png', linkTo: '/cs2coaches' },
        { title: 'Valorant', imagePath: './images/Valorant-Logo.png', linkTo: '/valorantcoaches' },
        { title: 'Overwatch 2', imagePath: './images/Overwatch-Logo.png', linkTo: '/overwatchcoaches' },
        { title: 'Call of Duty', imagePath: './images/Call-of-Duty-Logo.png', linkTo: '/codcoaches' },
        { title: 'Apex Legends', imagePath: './images/Apex-Legends-Logo.png', linkTo: '/apexcoaches' },
        { title: 'Super Smash Bros Ultimate', imagePath: './images/Super-Smash-Bros-Logo.png', linkTo: '/smashcoaches' },
        // Add more card data as needed
    ];

    return (
        <div>
            <div className="card-container">
                {/* Map over the card data and render MyCardComponent */}
                {cardData.map((card, index) => (
                    <MyCardComponent key={index} {...card} />
                ))}
            </div>
        </div>
    );
}

export default Coaching;

