import React from 'react';
import skills from "./Skill";
import './About.css';

const MySkill = () => {
    const { frontend, backend, databases, versionControl, hostingPlatforms, programmingLanguages } = skills;
    return (
        <div className="container my-5 py-5">
            <h2 className="text-center"> Tech Skills </h2><hr className="line mb-5" style={{width: "200px"}} />
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Front End</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                frontend.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Back End</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                backend.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Database</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                databases.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Version Control</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                versionControl.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Hosting Platforms</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                hostingPlatforms.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">Programming Languages</h4>
                        <hr className="my-3 mx-5 line" />
                        <ul>
                            {
                                programmingLanguages.map( skill =>
                                    <li className="my-4" style={{listStyleType : "none"}} key={skill.skillName}>
                                        <img className="skill-img mx-4" src={skill.imgSrc} alt={skill.imgAltText} />
                                        <a style={{textDecoration: "none", color: "coral"}} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.skillName}</a>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MySkill;