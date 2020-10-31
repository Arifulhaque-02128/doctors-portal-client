import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile-pic/profile-5.jpg';
import './About.css';
import MySkill from './MySkill';

const About = () => {
    return (
        <div>
            <div className="container background-img my-5 py-5">
                <h2 className="text-center">Who Am I </h2>
                <hr className="line mb-5" style={{width: "200px"}} />
                <div className="row">
                    <div className="col-md-6">
                        <div className="py-5 pl-4 font-weight-normal">
                            <article>Hi! My name is Ariful Haque. I'm a highly passionate and progress-focused Web developer, love to learn new technologies related to web development. I have a great interest in javaScript and javaScript based technologies. I desire to work in a institution with a good learning environment to grow up my skill higher.</article> <br/>
                            {/* <article>I am a student of Chittagong University of Engineering and Technology, studying in Electronics and Telecommunication Engineering. My hometown is in Moulvibazar. I have passed my SSC from Moulvibazar Govt. High School, Moulvibazar and HSC from Notre Dame College, Dhaka.</article> */}
                            <article>I love to learn javaScript based projects and technologies. Having expertise in HTML, CSS, Bootstrap, JavaScript, React; Comfortable in Firebase, Heroku, Node.js, MongoDB. And also familiar with Data Structure and Algorithm, Object Oriented Programming, SASS, Redux etc.</article><br />
                            <article>Feel free to contact for any other information.</article>
                        </div>
                        <div className="text-center">
                            <Link to="/contact">
                                <button type="button" className="btn btn-outline-primary ml-2 my-2">Contact</button>
                            </Link>
                            <a href="https://github.com/Arifulhaque-02128" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark ml-3 my-2">Github</button>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-success ml-3 my-2">My Resume</button>
                            </a>
                            <a href="https://www.linkedin.com/in/md-ariful-haque-7b57911b9" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-info ml-3 my-2">LinkedIn</button>
                            </a>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center p-3">
                            <img className="img-fluid img-thumbnail w-100" src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MySkill></MySkill>
            </div>
        </div>
    );
};

export default About;