import creativeAgency from '../../images/projects/Frame.png';
import volunteerNetwork from "../../images/projects/extraVolunteer.png";
import hardRock from "../../images/projects/hard-rock.jpg";
import weatherApp from "../../images/projects/weather-app.jpg";

const ProjectData = {

    myProjects: [
        {
            projectName : "Creative Agency",
            liveLink: "https://creative-agency-1708007.web.app/",
            sourceLink: "https://github.com/Arifulhaque-02128/creative-agency-client",
            imgAltText: "Creative Agency",
            imgSrc: creativeAgency,
            date : "17/10/2020",
            description: "In this site you can register in on or many courses. For this, you have to click on your chosen service from 'Provide awesome services'. Before register, you have to be logged in(authenticated using Firebase) if you are not already logged in. After logged in, you have to submit the form to order the service. You can see how many service you have ordered by clicking 'Service list'. You can also give feedback by clicking 'Review' which will be shown in Home Page's 'Client Feedback' section. There is also a protected link(Admin) for admins only. In which, admins can see how many customer ordered, customer's details; they can also add service and make admin. ",
            details : "In this website mainly React, Bootstrap, Material UI, React Routing are used in Front End. Node.js, Express.js are used in Back End. Form is created by React hook form. Firebase is used for authentication and hosting. Heroku is used for Back End hosting. Mongo DB is used as Database."
        },
        {
            projectName : "Volunteer Network",
            liveLink: "https://volunteer-network-bb871.web.app/home",
            sourceLink: "https://github.com/Arifulhaque-02128/volunteer-network-client",
            imgAltText: "Volunteer Network",
            imgSrc: volunteerNetwork,
            date : "6/10/2020",
            description: "In this site you can register in on or many voluntary works. For this, you have to click on your preferred voluntary event. Before register, you have to be logged in(authenticated using Firebase) if you are not already logged in. After logged in, you have to submit the form. If you submit the form, it will go another page where you can show your registered events.",
            details : "In this website mainly React, Bootstrap, Material UI, React Routing are used in Front End. Node.js, Express.js are used in Back End. Firebase is used for authentication and hosting. Heroku is used for Back End hosting. Mongo DB is used as Database."
        },
        {
            projectName : "Hard Rock (Find Song Lyrics)",
            liveLink: "https://arifulhaque-02128.github.io/hard-rock/",
            sourceLink: "https://github.com/Arifulhaque-02128/hard-rock",
            imgAltText: "Hard Rock",
            imgSrc: hardRock,
            date : "17/8/2020",
            description: "In this website, you can find the lyrics of songs by searching the name of the songs. If you search lyrics, it will show you suggestions. You can find the lyrics by choosing any of those suggestion. Lyrics may not found for some songs. You can also find the song details by clicking 'Song Details' which appears bottom of the page. ",
            details : "In this website mainly html, css, vanilla javaScript are used. Besides, lyrics and details of songs are taken by calling Api."
        },
        {
            projectName : "Weather App",
            liveLink: "https://arifulhaque-02128.github.io/weather-app/",
            sourceLink: "https://github.com/Arifulhaque-02128/weather-app",
            imgAltText: "Weather App",
            imgSrc: weatherApp,
            date : "16/8/2020",
            description: "In this website, you can get the temperature of any place by searching the name of the city. If you search a city, it will show you the temperature in celsius and condition of the weather. Results may not found for small cities.",
            details : "In this website mainly html, css, vanilla javaScript are used. Besides, temperature and details are taken by calling Api."
        }
      ]
}

export default ProjectData;