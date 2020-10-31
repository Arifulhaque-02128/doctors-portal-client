import React from 'react';
import About from '../About/About';
import Header from './Header/Header';
import HeaderMain from './HeaderMain/HeaderMain';
import Fade from 'react-reveal/Fade';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    const backgroundStyle = {
        backgroundColor : "thistle"
    }
    return (
        <div style={backgroundStyle}>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <Fade left>
                <About></About>
            </Fade>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;