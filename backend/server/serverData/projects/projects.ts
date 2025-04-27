interface Projects {
    [key: string]: {
        Photo: string;
        Info: string;
        Details: Array<string>;
        TechStack: Array<string>;
        Link: string;
        IsDeployed: string;
    };
}

export const projects: Projects = {
    CareerCatalyst: {
        Photo: "https://drive.google.com/thumbnail?id=1789zAtxVO2ZUPwhYUQB4FmVptZ6OTQHq&sz=w1000",
        Info: "ASU's Career Catalyst is a platform that helps with upskilling for learners trying to advance their career.",
        Details: [
            "NUXT2 and Vue.js were used to create a web application that is user friendly and easy to navigate.",
            "Created a career path builder using OpenAI's GPT-3.5 Turbo to help users create a career path based on their skills and interests.",
            "Implemented AWS Lambda to create a serverless application that is scalable and cost effective.",
            "I used AWS S3 to store user data and AWS Cognito for user authentication.",
            "I used DynamoDB to create a database that is scalable and cost effective.",
            "Integrated Salesforce to create a CRM that is scalable and cost effective.",
        ],
        TechStack: [
            "NUXT2",
            "Vue.js",
            "Javascript",
            "DynamoDB",
            "Express.JS",
            "AWS Lambda",
            "Salesforce",
            "AWS S3",
            "AWS Cognito",
            "Node.JS",
            "Typesense",
            "Canvas",
            "OpenAI",
        ],
        Link: "https://careercatalyst.asu.edu/",
        IsDeployed: "Currently Deployed on AWS",
    },
    ElixirIv: {
        Photo: "https://drive.google.com/thumbnail?id=1I_M0iW4BmUvWduWjcjlj31WS7L7DCXlw&sz=w1000",
        Info: "A mobile iv hydration service that provides hydration and vitamin therapy.",
        Details: [
            "Implemented a React application that is user friendly, easy to navigate, mobile friendly and SSR.",
            "I hit 100% SEO and Lighthouse scores using Vite and SSR.",
            "I used Nodemailer to send emails to users and Twilio to send SMS messages to users.",
            "Made responsive web design using advanced CSS3 principles like styling such as using grid, flex and media queries."
        ],
        TechStack: [
            "React",
            "Typescript",
            "Node.JS",
            "Nodemailer",
            "Vite",
            "SSR",
            "Bootstrap"
        ],
        Link: "https://elixirivtherapy.com/",
        IsDeployed: "Currently Deployed on Vercel",
    },
    AquaticNWritingRehab: {
        Photo: "https://drive.google.com/thumbnail?id=1sCd5_b6XUfZv9Ke6TCIkKfNIKR-beXv2&sz=w1000",
        Info: "An application for a children's rehab facility specializing in aquatics.",
        Details: [
            "Implementing bootstrap designs and semantic UI elements to make responsive web design.",
            "Using Node.JS to communicate with the front end of my application so data can be easily passed from the backend",
            "Working the technologies such as nodemailer to allow form submission on client side to make UX intuitive.",
            "Using git branches and git merges to manage our applications progress on the team. Creating a trello board to delegate and complete tasks with transparency, while working using agile scrum methodology of 2 day sprints.",
            "Using functions like .map() to easily display an array of data that is being passed from endpoints on the backend.",
        ],
        TechStack: [
            "React",
            "Javascript",
            "PostgreSQL",
            "Express.JS",
            "Node.JS",
            "Nodemailer",
        ],
        Link: "https://www.anwrehab.com/",
        IsDeployed: "Deployed on Vercel",
    },
    WbExplorer: {
        Photo: "https://drive.google.com/thumbnail?id=1lNsFmY6ZKV766BZR1It4p_Tt3J2btmsc&sz=w1000",
        Info: "A site dedicated to helping backpackers traveling the world.",
        Details: [
            "Implemented the REST methodology via Node JS, using axios calls to the database to update, delete, create and read data using PostgreSQL.",
            `Used a two third party API’s, one for pulling weather data and the other to calculate currency conversions and used google chrome developer tools 
             to access the props that were coming off the API’s data. Read documentation to see the requirements of what functionality such as 
             filter with a query string that could be used with the API where the user can select a country and city or currency type to view the data they requested.`,
            "Utilized Auth0 for client verification, where in which the user could use info from a third party to help create a profile.",
            "Utilized PostgreSQL heroku database for managing data while along with using some intermediate to advanced SQL to have tables create one to many relationships along with referencing foreign keys.",
            "Implementing advanced CSS3 principles like styling such as using grid, flex and media queries to make the application responsive. Using advanced HTML5 concepts such as semantic elements.",
            "Using ifconfig | grep inet to test applications on IOs mobile devices before running a build.",
        ],
        TechStack: [
            "React",
            "Javascript",
            "PostgreSQL",
            "Express.JS",
            "Node.JS",
            "Cloudinary",
            "Zeit",
            "Redux",
            "Auth0",
        ],
        Link: "https://github.com/Dreier14/personalproject/",
        IsDeployed: "Currently Not Deployed",
    },
    AdventureProject: {
        Photo: "https://drive.google.com/thumbnail?id=1eKpE72p81j7vU7e8f5wjBYUgfqURGAOx&sz=w1000",
        Info: "An application that provides hikers with trails and info.",
        Details: [
            "Implemented the REST methodology, via Node JS. Used axios to make calls to the database to update, delete, create,and read data using PostgreSQL.",
            `Implemented third party API’s for pulling data such as trail info, google map info and weather data accessed via props. 
             Creating filter functionality for the user to search by location. Testing the API using Postman to make sure the data was being received 
             correctly through app.get, app.post, app.create, app.delete.`,
            "Enabled locating services via props using latitude and longitude so user can get access to trails that the API would respond with that are nearby.",
            "Using git branches and git merges to manage our applications progress on the team. Creating a trello board to delegate and complete tasks with transparency, while working using agile scrum methodology of 2 day sprints.",
            "Transformed and modernized software development methodology by advocating, establishing, implementing efficient planning processes and using agile scrum methodology.",
        ],
        TechStack: [
            "React",
            "Javascript",
            "PostgreSQL",
            "Express.JS",
            "Node.JS",
            "Nodemailer",
            "Bootstrap",
            "Redux",
            "Bcrypt",
        ],
        Link: "https://github.com/mcintdre000/Adventure-Project",
        IsDeployed: "Currently Not Deployed",
    }
};
