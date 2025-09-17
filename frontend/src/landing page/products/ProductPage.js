import React from 'react';
import Hero from './Hero.js';
import LeftImg from './LeftImg.js';
import RightImg from './RightImg.js';
import Universe from './Universe.js';

function AboutPage() {
    return (
        <>
            <Hero />
            <LeftImg imageURL="media-images/kite.png" 
            productName="Kite" 
            productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo="" 
            learMore="" 
            googlePlay="" 
            appStore="" />

            <RightImg imageURL="media-images/console.png" 
            productName="Console" 
            productDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
            tryDemo="" 
            learMore="" 
            googlePlay="" 
            appStore=""/>

            <LeftImg imageURL="media-images/coin.png" 
            productName="Coin" 
            productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemo="" 
            learMore="" 
            googlePlay="" 
            appStore="" />

            <RightImg imageURL="media-images/kiteconnect.png" 
            productName="Kite Connect API" 
            productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
            tryDemo="" 
            learMore="" 
            googlePlay="" 
            appStore=""/>

            <LeftImg imageURL="media-images/varsity.png" 
            productName="Varsity mobile" 
            productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            tryDemo="" 
            learMore="" 
            googlePlay="" 
            appStore="" />

            <Universe />
        </>
    );
}

export default AboutPage;