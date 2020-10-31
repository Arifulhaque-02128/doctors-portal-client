import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,

} from '@merc/react-timeline';
import projects from "./ProjectData";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './Projects.css';

const Projects = () => {
    const { myProjects } = projects;
    return (
        <div className="py-3 my-3"> 
            <h2 className="text-center mt-2">My Projects</h2><hr className="line mb-5" style={{width: "200px"}} />
            <Timeline>
                <Events className="text-center font-weight-bolder">
                    {
                        myProjects.map(project =>
                            <ImageEvent
                                key={project.projectName}
                                date={project.date}
                                text={project.projectName}
                                src={project.imgSrc}
                                alt={project.imgAltText}
                                credit=""
                            >
                                <div className="d-flex justify-content-between flex-column mt-1">
                                    <div>
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} className="p-2 text-center accordian-main" eventKey="1">
                                                    PROJECT DETAILS
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1" className="text-left">
                                                <Card.Body>
                                                    <h6>Description : </h6>
                                                    <p className="font-weight-normal">{project.description}</p>
                                                    <hr className="line my-4" style={{width: "200px"}} />
                                                    <h6>Details : </h6>
                                                    <p className="font-weight-normal">{project.details}</p>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    
                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <UrlButton href={project.liveLink} target="_blank" rel="noopener noreferrer">LIVE SITE</UrlButton>
                                        <UrlButton href={project.sourceLink} target="_blank" rel="noopener noreferrer">SOURCE CODE</UrlButton>
                                    </div>
                                </div>
                            </ImageEvent>
                        )
                    }

                </Events>
            </Timeline>
        </div>

    );
};

export default Projects;