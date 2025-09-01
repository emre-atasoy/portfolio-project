const data = {
  heroSection: {
    greeting: "Hi, I'm Amira Su",
    intro: "Creative thinker & Minimalism lover",
    profileImage: "/assets/profile-image.png",
    socials: [
      {
        logo: "/assets/in.png",
        alt: "LinkedIn",
        link: "https://linkedin.com"
      },
      {
        logo: "/assets/github.png",
        alt: "Github",
        link: "https://github.com"
      }
      
    ]
  },

  skillsSection: {
    title: "Skills",
    skills: [
      { name: "JavaScript", icon: "/assets/icon-js.png" },
      { name: "React.js", icon: "/assets/icon-react.png" },
      { name: "Node.js", icon: "/assets/icon-node.png" }
    ]
  },

  profileSection: {
    title: "Profile",
    birthDate: "24.12.1996",
    city: "Ankara",
    education: "Hacettepe Üniversitesi, Bilgisayar Mühendisliği",
    english: "B2",
    aboutMe:
      "I’m a full-stack developer passionate about building scalable web apps and beautiful user experiences."
  },

  projectsSection: {
    title: "Projects",
    projects: [
      {
        name: "Workintech",
        description:
          "An app that helps developers showcase their portfolios.",
        image: "/assets/project1.png",
        github: "https://github.com/workintech",
        live: "https://workintech.com"
      },
      {
        name: "Random Jokes",
        description: "A fun app that fetches random jokes from an API.",
        image: "/assets/project2.png",
        github: "https://github.com/random-jokes",
        live: "https://randomjokes.com"
      },
      {
        name: "Journey",
        description:
          "A travel blog app where users can share their journey stories.",
        image: "/assets/project3.png",
        github: "https://github.com/journey",
        live: "https://journeyapp.com"
      }
    ]
  },

  footerSection: {
    email: "amirasucode@gmail.com",
    links: {
      blog: "https:/.dev",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in"
    }
  }
};

export default data;
