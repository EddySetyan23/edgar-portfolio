const DATA = {
  // Professional Experiences
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "April 2021",
      endDate: "August 2021",
      position: "Software Developer Intern",
      diamondColors: ["Blue", "Green"],
      company: {
        logo: "tangerine-logo.png", // Ensure the logo is in your assets folder
        name: "Tangerine Bank",
        info: "Toronto, ON",
      },
      description:
        "Designed and implemented scalable Java components within a high-performance web application, resulting in a 15% increase in user satisfaction and system scalability. Optimized Docker and Kubernetes configurations, reducing deployment errors by 20%. Refactored SQL queries and optimized database indexing, significantly improving application load times.",
      links: [
        { label: "GitHub", url: "https://github.com/eddysetyan23" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/edgar-setyan-809bb0170/" },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "April 2020",
      endDate: "August 2020",
      position: "Software Developer Intern",
      diamondColors: ["Orange", "Yellow"],
      company: {
        logo: "tangerine-logo.png",
        name: "Tangerine Bank",
        info: "Toronto, ON",
      },
      description:
        "Engineered a high-performance Java web application, implementing efficient algorithms and design patterns to improve scalability and enhance user experience. Reduced build errors by 50% by automating tasks using Maven. Increased code coverage by writing 20+ unit tests using JUnit, significantly improving code quality and maintainability.",
      links: [
        { label: "GitHub", url: "https://github.com/eddysetyan23" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/edgar-setyan-809bb0170/" },
      ],
    },
  ],

  // Personal Projects
  personalProjects: [
    {
      id: "proj_1",
      startDate: "",
      position: "Full-Stack Developer",
      diamondColors: ["Pink"],
      company: {
        logo: "portfolio-logo.png", // Ensure the logo is in your assets folder
        name: "Personal Portfolio Website",
        info: "",
      },
      description:
        "Created a modern, responsive portfolio website using Java for the backend, React for the frontend, and HTML/CSS for design. Optimized the site for various devices and screen sizes by leveraging responsive design principles and modular React components.",
      links: [
        { label: "GitHub", url: "https://github.com/eddysetyan23/portfolio-website" },
        { label: "Live Site", url: "https://your-portfolio-link.com" }, // Replace with your live site link
      ],
    },
    {
      id: "proj_2",
      startDate: "",
      position: "Full-Stack Developer",
      diamondColors: ["Blue"],
      company: {
        logo: "task-management-logo.png",
        name: "Task Management System",
        info: "",
      },
      description:
        "Built a full-stack web application using Java, Spring Boot, and React for real-time task management. Designed a RESTful API using Spring Boot, implementing object-oriented design principles and MVC architecture to ensure maintainable, modular code.",
      links: [
        { label: "GitHub", url: "https://github.com/eddysetyan23/task-management-system" },
      ],
    },
    {
      id: "proj_3",
      startDate: "",
      position: "Data Analyst / Developer",
      diamondColors: ["Yellow"],
      company: {
        logo: "data-mining-logo.png",
        name: "Data Mining Project",
        info: "",
      },
      description:
        "Developed a Python script using pandas and the Yahoo Finance API to analyze historical stock data. Applied machine learning concepts with scikit-learn, experimenting with k-means clustering to group similar stocks based on price movements and trading volumes.",
      links: [
        { label: "GitHub", url: "https://github.com/eddysetyan23/data-mining-project" },
      ],
    },
  ],

  // Education
  educationalExperiences: [
    {
      id: "edu_1",
      icon: "lassonde-logo.png", // Use a relevant icon
      course: "Bachelor of Science Honours in Computer Science",
      institution: "York University",
      degree: "Bachelor Degree",
      startDate: "2019",
      endDate: "2024",
    },
  ],

  // Skills
  technicalSkills: [
    { id: "skill_1", icon: "java-icon.png", name: "Java", description: "Backend Development" },
    { id: "skill_2", icon: "python-icon.png", name: "Python", description: "Data Analysis and Machine Learning" },
    { id: "skill_3", icon: "react-icon.png", name: "React", description: "Frontend Development" },
    { id: "skill_4", icon: "spring-boot-icon.png", name: "Spring Boot", description: "REST API Development" },
    { id: "skill_5", icon: "docker-icon.png", name: "Docker", description: "Containerization" },
    { id: "skill_6", icon: "kubernetes-icon.png", name: "Kubernetes", description: "Container Orchestration" },
    { id: "skill_7", icon: "sql-icon.png", name: "SQL", description: "Database Management" },
    { id: "skill_8", icon: "html-icon.png", name: "HTML5", description: "Web Design" },
    { id: "skill_9", icon: "css-icon.png", name: "CSS", description: "Styling and Frameworks" },
    { id: "skill_10", icon: "nodejs-icon.png", name: "Node.js", description: "Backend JavaScript Development" },
  ],

  // Certifications and Awards
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: "linkedin-icon.png",
      provider: "Microsoft & LinkedIn",
      course: "Career Essentials in Software Development",
      startDate: "September 2024",
    },
    {
      id: "cert_award_2",
      icon: "docker-icon.png",
      provider: "Docker, Inc.",
      course: "Docker Foundations Professional Certificate",
      startDate: "September 2024",
    },
  ],

  // Hobbies and Interests
  hobbiesAndInterests: [
    { id: "hob_1", icon: "gaming-icon.png", name: "Gaming" },
    { id: "hob_2", icon: "reading-icon.png", name: "Reading" },
    { id: "hob_3", icon: "traveling-icon.png", name: "Traveling" },
    { id: "hob_4", icon: "blogging-icon.png", name: "Blogging" },
  ],
};

export default DATA;
