import React from 'react';
import landscapeImg from '../assets/image-hero-landscape@2x.webp';
import portraitImg from '../assets/image-hero-portrait@2x.webp';

export default function HeroSection() {
  return (
    <section className='hero'>
        <div className="hero-container-top">
            <div className='hero-container-top-heading'>
                <svg className='hero-container-top-heading-arch-desktop hide-tablet hide-mobile' xmlns="http://www.w3.org/2000/svg" width="289" height="35" viewBox="0 0 289 35" fill="none">
                    <path d="M1 33.6757C1 33.6757 139.26 -38.3243 288 33.6757" stroke="#172339" stroke-width="2"/>
                </svg>
                <svg className='hero-container-top-heading-arch-tablet hide-desktop hide-mobile' xmlns="http://www.w3.org/2000/svg" width="233" height="29" viewBox="0 0 233 29" fill="none">
                    <path d="M1 27.6757C1 27.6757 112.376 -30.3243 232.194 27.6757" stroke="#172339" stroke-width="2"/>
                </svg>
                <svg className='hero-container-top-heading-arch-mobile hide-desktop hide-tablet' xmlns="http://www.w3.org/2000/svg" width="153" height="19" viewBox="0 0 153 19" fill="none">
                    <path d="M1 18C1 18 73.9705 -20 152.472 18" stroke="#172339" stroke-width="2"/>
                </svg>
                <h1 className='hero-container-top-heading-topic'>A <span>super solution</span> <br/> for your <span>business.</span></h1>
            </div>
            <p className='hero-container-top-content-para'>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
            <button className='primary' >Request Beta Access</button>
            <img className='hero-container-top-content-image' src={landscapeImg} alt='img' />
            <img className='hero-container-top-content-image-portrait' src={portraitImg} alt='img' />
        </div>
        <div className="hero-container-bottom">
            <div className="hero-container-bottom-row">
                <p className='hero-container-bottom-row-number'>2k+</p>
                <p className='hero-container-bottom-row-text Body'>COMPANIES</p>
            </div>
            <div className="hero-container-bottom-row">
                <p className='hero-container-bottom-row-number'>8</p>
                <p className='hero-container-bottom-row-text Body'>LANGUAGES</p>
            </div>
            <div className="hero-container-bottom-row">
                <p className='hero-container-bottom-row-number'>1.2M</p>
                <p className='hero-container-bottom-row-text Body'>LEADS</p>
            </div>
        </div>
    </section>
  );
}