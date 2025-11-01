// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Roadmap Modal
const modal = document.getElementById('roadmapModal');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.querySelector('.close-modal');
const viewRoadmapButtons = document.querySelectorAll('.view-roadmap');

// Career roadmaps data
const roadmaps = {
    frontend: {
        title: "Frontend Developer Roadmap",
        steps: [
            {
                title: "Fundamentals",
                description: "Start with HTML, CSS, and basic JavaScript. Learn how to structure web pages and add basic styling and interactivity.",
                resources: [
                    { name: "freeCodeCamp - Responsive Web Design", url: "https://www.freecodecamp.org/learn" },
                    { name: "MDN Web Docs - Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" }
                ]
            },
            {
                title: "Advanced CSS",
                description: "Master CSS Flexbox, Grid, animations, and preprocessors like SASS. Learn responsive design principles.",
                resources: [
                    { name: "CSS Tricks - Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
                    { name: "Scrimba - CSS Grid", url: "https://scrimba.com/learn/cssgrid" }
                ]
            },
            {
                title: "JavaScript Deep Dive",
                description: "Learn modern JavaScript (ES6+), DOM manipulation, asynchronous programming, and APIs.",
                resources: [
                    { name: "The Modern JavaScript Tutorial", url: "https://javascript.info/" },
                    { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" }
                ]
            },
            {
                title: "Frontend Frameworks",
                description: "Choose a framework like React, Vue, or Angular and learn component-based architecture.",
                resources: [
                    { name: "React Official Tutorial", url: "https://reactjs.org/tutorial/tutorial.html" },
                    { name: "Vue.js Tutorial", url: "https://vuejs.org/tutorial/" }
                ]
            },
            {
                title: "Build Projects",
                description: "Apply your knowledge by building real-world projects to showcase in your portfolio.",
                resources: [
                    { name: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" },
                    { name: "DevChallenges", url: "https://devchallenges.io/" }
                ]
            }
        ]
    },
    backend: {
        title: "Backend Developer Roadmap",
        steps: [
            {
                title: "Programming Fundamentals",
                description: "Learn a backend language like Python, JavaScript (Node.js), Java, or C#.",
                resources: [
                    { name: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/" },
                    { name: "The Odin Project - Node.js", url: "https://www.theodinproject.com/paths/full-stack-javascript" }
                ]
            },
            {
                title: "Databases",
                description: "Learn SQL for relational databases and NoSQL for document-based databases.",
                resources: [
                    { name: "SQLZoo - Interactive SQL Tutorial", url: "https://sqlzoo.net/" },
                    { name: "MongoDB University", url: "https://university.mongodb.com/" }
                ]
            },
            {
                title: "APIs and Web Servers",
                description: "Learn how to create RESTful APIs and handle HTTP requests/responses.",
                resources: [
                    { name: "freeCodeCamp - APIs and Microservices", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
                    { name: "Express.js Official Guide", url: "https://expressjs.com/en/starter/installing.html" }
                ]
            },
            {
                title: "Authentication & Security",
                description: "Learn about authentication methods (JWT, OAuth) and web security best practices.",
                resources: [
                    { name: "JWT Introduction", url: "https://jwt.io/introduction/" },
                    { name: "OWASP Security Principles", url: "https://owasp.org/www-project-top-ten/" }
                ]
            },
            {
                title: "Deployment & DevOps",
                description: "Learn about cloud platforms, containers, and CI/CD pipelines.",
                resources: [
                    { name: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
                    { name: "Docker Getting Started", url: "https://docs.docker.com/get-started/" }
                ]
            }
        ]
    },
    software: {
        title: "Software Engineer Roadmap",
        steps: [
            {
                title: "Programming Fundamentals",
                description: "Master a programming language and learn data structures and algorithms.",
                resources: [
                    { name: "freeCodeCamp - JavaScript Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
                    { name: "GeeksforGeeks - Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" }
                ]
            },
            {
                title: "Computer Science Concepts",
                description: "Learn operating systems, computer networks, and database systems.",
                resources: [
                    { name: "CS50 - Harvard's Intro to CS", url: "https://cs50.harvard.edu/" },
                    { name: "Teach Yourself CS", url: "https://teachyourselfcs.com/" }
                ]
            },
            {
                title: "Software Development",
                description: "Learn version control (Git), testing, debugging, and software design patterns.",
                resources: [
                    { name: "Git Official Documentation", url: "https://git-scm.com/doc" },
                    { name: "Refactoring Guru - Design Patterns", url: "https://refactoring.guru/design-patterns" }
                ]
            },
            {
                title: "System Design",
                description: "Learn how to design scalable and efficient systems.",
                resources: [
                    { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
                    { name: "Grokking the System Design Interview", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
                ]
            },
            {
                title: "Specialization",
                description: "Choose an area to specialize in like web, mobile, AI, or embedded systems.",
                resources: [
                    { name: "Roadmap.sh", url: "https://roadmap.sh/" },
                    { name: "Awesome Lists", url: "https://github.com/sindresorhus/awesome" }
                ]
            }
        ]
    },
    civil: {
        title: "Civil Services Roadmap",
        steps: [
            {
                title: "Understand the Exam Pattern",
                description: "Learn about the UPSC exam structure, stages (Prelims, Mains, Interview), and syllabus.",
                resources: [
                    { name: "UPSC Official Notification", url: "https://upsc.gov.in/" },
                    { name: "ClearIAS Exam Guide", url: "https://www.clearias.com/upsc-ias-exam/" }
                ]
            },
            {
                title: "Build Strong Foundation",
                description: "Focus on NCERT books (Class 6-12) for History, Geography, Polity, Economy, and Science.",
                resources: [
                    { name: "NCERT Books Online", url: "https://ncert.nic.in/textbook.php" },
                    { name: "PMF IAS Notes", url: "https://www.pmfias.com/" }
                ]
            },
            {
                title: "Current Affairs Preparation",
                description: "Daily newspaper reading (The Hindu, Indian Express) and monthly current affairs magazines.",