import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt='' />
               <p>Tomato is a vibrant restaurant celebrating the versatility of tomatoes. Located in the heart of the city, we offer 
                a menu brimming with fresh, locally sourced tomato-based dishes—from savory soups and salads to creative small plates 
                and desserts. Enjoy a warm, inviting atmosphere and a memorable dining experience with every bite</p>
               <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt='' />
                  <img src={assets.twitter_icon} alt='' />
                  <img src={assets.linkedin_icon} alt='' />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+923157635893</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div> 
        </div>
        <hr/>
        <p className="footer-copyright">
           Copyright 2024 © Tomato.com - All Rights Reserved.
        </p>
      
    </div>
  )
}

export default Footer
