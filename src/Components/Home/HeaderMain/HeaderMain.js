import React from 'react';
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import photo from "../../../images/profile-pic/back1.png";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -250px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  img{
      border-radius : 50%;
  }
  div {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 7px;
    .main {
      color: ${props => props.theme.textColor};
      font-size: 40px;
    }
    .sub {
      color : #FF8C00;
      font-weight : bolder;
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const HeaderMain = () => {
    return (
        <MyTitleMessage>
            <img className="mb-3" src={photo} alt=""/>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        Hi, I am
                        <br />
                        <span>
                            <strong>MD. ARIFUL HAQUE</strong>
                        </span>
                    </div>
                    <div className="sub">
                        <Typewriter
                            options={{
                                strings: ["Full Stack Web Developer", "A Programmer", "A Learner"],
                                autoStart: true,
                                loop: true,
                                delay: 60
                            }}
                        />
                    </div>
                </div>
            </div>
        </MyTitleMessage>
    );
};

export default HeaderMain;