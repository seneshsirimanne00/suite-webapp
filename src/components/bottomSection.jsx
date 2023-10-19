import React from 'react';
import JeramyImage from '../assets/jeramy.png';
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import instagramIcon from '../assets/icon-instagram.svg';

export default function BottomSection() {
  return (
    <section className='bottom'>
        <div className="bottom-top">
          <div className="bottom-top-image">
              <img src={JeramyImage} alt="man holding phone" />
          </div>
          <div className="bottom-top-vector">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" viewBox="0 0 52 42" fill="none">
              <path d="M50.2683 1C50.2683 1 45.3593 32.7494 0.999966 41" stroke="#FAF8F6" stroke-width="2"/>
            </svg>
          </div>
          <div className="bottom-top-text">
            <h2 className='bottom-top-text-heading'> It just <span>works.</span></h2>
            <p className='bottom-top-text-quote'>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
            <p className='bottom-top-text-author'>JEREMY ROBINSON</p>
            <p className='bottom-top-text-designation'>CMO, FYLO</p>
          </div>
        </div>
        <div className="bottom-footer">
          <p className='bottom-footer-logo'>suite</p>
          <p className='bottom-footer-text'>Copyright - Suite</p>
          <div className="bottom-footer-icons">
            <a href='#'><img src={facebookIcon} alt="facebook" /></a>
            <a href='#'><img src={twitterIcon} alt="twitter" /></a>
            <a href='#'><img src={instagramIcon} alt="instagram" /></a>
          </div>
        </div>
    </section>
  );
}