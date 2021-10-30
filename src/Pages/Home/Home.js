import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Review from '../../Components/Review/review';
import Offerings from '../../Components/Offerings/Offerings';
import Showcase from '../../Components/Showcase/Showcase';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Offerings></Offerings>
            <Review></Review>
            <Showcase></Showcase>
        </div>
    );
};

export default Home;