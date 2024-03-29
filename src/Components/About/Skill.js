import L_HTML5 from "../../images/skills/html-5.svg";
import L_CSS3 from "../../images/skills/css3.svg";
import L_SASS from "../../images/skills/sass-1.svg";
import L_BOOTSTRAP from "../../images/skills/bootstrap-4.svg";
import L_REACT from "../../images/skills/react.svg";
import L_REDUX from "../../images/skills/redux.svg";
import L_REACT_ROUTER from "../../images/skills/react-router.svg";
import L_MATERIALUI from "../../images/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../images/skills/react-bootstrap.svg";
import L_NODE_JS from "../../images/skills/nodejs.svg";
import L_EXPRESS from "../../images/skills/express.svg";
import L_MONGODB from "../../images/skills/mongodb.svg";
import L_GIT from "../../images/skills/git-icon.svg";
import L_HEROKU from "../../images/skills/heroku.svg";
import L_GITHUB_PAGES from "../../images/skills/github.svg";
import L_JAVASCRIPT from "../../images/skills/javascript.svg";
import L_PYTHON from "../../images/skills/python.svg";
import firebase from "../../images/skills/firebase.svg";

const Skill = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://sass-lang.com/",
        imgAltText: "Sass",
        imgSrc: L_SASS,
        skillName: "Sass",
      },
      {
        link: "https://getbootstrap.com/",
        imgAltText: "Bootstrap",
        imgSrc: L_BOOTSTRAP,
        skillName: "Bootstrap",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://reacttraining.com/react-router/",
        imgAltText: "React Router",
        imgSrc: L_REACT_ROUTER,
        skillName: "React Router",
      },
      {
        link: "https://material-ui.com/",
        imgAltText: "Material-UI",
        imgSrc: L_MATERIALUI,
        skillName: "Material-UI",
      },
      {
        link: "https://react-bootstrap.github.io/",
        imgAltText: "React Bootstrap",
        imgSrc: L_REACT_BOOTSTRAP,
        skillName: "React Bootstrap",
      }
      
    ],
  
    backend: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Node.js",
        imgSrc: L_NODE_JS,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: L_EXPRESS,
        skillName: "Express",
      }
    ],
    hostingPlatforms: [
      {
        link: "https://www.heroku.com/",
        imgAltText: "Heroku",
        imgSrc: L_HEROKU,
        skillName: "Heroku",
      },
      {
        link: "https://firebase.google.com/",
        imgAltText: "Google Firebase",
        imgSrc: firebase,
        skillName: "Google Firebase",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
    ],
    programmingLanguages: [
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://www.python.org/",
        imgAltText: "Python",
        imgSrc: L_PYTHON,
        skillName: "Python",
      }
    ],
    databases: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: L_MONGODB,
        skillName: "MongoDB",
      },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
};


export default Skill;