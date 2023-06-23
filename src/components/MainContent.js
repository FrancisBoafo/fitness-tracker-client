import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';
import McDonalds from './images/Mcdonaldss.jpg'; // update with your actual path
import Chipotle from './images/Chipotles.jpg'; // update with your actual path
import BurgerKing from './images/BurgerKing.png'; // update with your actual path
import dasherImage from './images/dasher.png';
import partnerImage from './images/partner.png';
import phone from './images/phone.png';
import newImage from './images/someImage4.jpg';
import secondImage from './images/someImage3.jpg'; 



const MainContent = () => {
    const restaurants = [
        {name: "McDonald's", deliveryFee: "$0 delivery fee", img: McDonalds},
        {name: "Chipotle", deliveryFee: "$0 delivery fee", img: Chipotle},
        {name: "Burger King", deliveryFee: "$0 delivery fee", img: BurgerKing},
        // add more restaurants here
    ];
    return (    
        <main className="mains-content"> 
            <div className="contents-containers">
                {/* <div className="restaurants-section-title-wrapper">
                        <h2 className="restaurants-section-title">Favorites Near You</h2>
                    </div> */}
                <section className="restaurants-section">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="restaurant-card">
                            <img src={restaurant.img} alt={restaurant.name} />
                            <h2>{restaurant.name}</h2>
                            <p className="delivery-fee">{restaurant.deliveryFee}</p>
                            <Link className="cta-link" to={`/${restaurant.name.replace(" ", "-")}`}>Order now</Link>
                        </div>
                    ))}
                </section>
                
                <section className="info-section">
                    <div className="info-card">
                        <div className="info-image">
                            <img src={dasherImage} alt="Become a Dasher"/>
                        </div>
                        <h2 className="info-title" style={{ fontWeight: 'bold' }}>Become a Dasher</h2>
                        <p className="info-desc">As a delivery driver, you'll make reliable money—working anytime, anywhere.</p>
                        <Link className="cta-link" to="/dasher-signup">Start earning <span className="arrow">&#8594;</span></Link>

                    </div>
                    
                    <div className="info-card" >
                        <div className="info-image">
                            <img src={partnerImage} alt="Become a Partner"/>
                        </div>
                        <h2 className="info-title" style={{ fontWeight: 'bold' }}>Become a Partner</h2>
                        <p className="info-desc">Grow your business and reach new customers by partnering with us.</p>
                        <Link className="cta-link" to="/partner-signup">Sign up your store <span className="arrow">&#8594;</span></Link>


                    </div>

                    <div className="info-card">
                        <div className="info-image">
                            <img src={phone} alt="Get the App"/>
                        </div>
                        <h2 className="info-title" style={{ fontWeight: 'bold' }}>Get the App</h2>
                        <p className="info-desc">Order from your favorite local restaurants with contactless delivery and pickup.</p>
                        <Link className="cta-link" to="/app">Download the app <span className="arrow">&#8594;</span></Link>
                        
                    </div>

                </section>

                <section className="new-section">
                    <div className="new-content">
                        <h2 className="new-title">It’s all here. All in one app.</h2>
                        <p className="new-desc">Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
                        <Link className="cta-link" to="/app">Get The App</Link>
                    </div>
                    <div className="new-image">
                        <img src={newImage} alt="New feature" style={{maxWidth: '600px', objectFit: 'cover'}} />
                    </div>

                    <div className="new-image">
                        <img src={secondImage} alt="New feature" style={{maxWidth: '600px', objectFit: 'cover'}} />
                    </div>
                    <div className="new-content">
                        <h2 className="new-title">Every Flavor Welcome</h2>
                        <p className="new-desc">From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.</p>
                        <Link className="cta-link" to="/app">Find restaurants</Link>
                    </div>
                   

                </section>

            </div>
        </main>
    )
}


export default MainContent;






