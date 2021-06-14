/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Swanand Katdare",
  title: "Hi all, I'm Swanand",
  subTitle: emoji(
    "A passionate AI Engineer 🚀 having an experience of building AI and deep learning applications with Pytorch / Tensorflow / MXNet / Caffe and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zD2y_pLPL2Dt3gdzSyIzn8xHAwtYfaz1/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/swanandkatdare",
  linkedin: "https://www.linkedin.com/in/swanand-katdare-8b4144126/",
  gmail: "katdare.swanand@gmail.com",
  medium: "https://medium.com/@katdare.swanand",
  instagram: "https://www.instagram.com/coffee_.fanatic/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech Geek with crazy obsession and interest to make machines think for themselves.",
  skills: [
    emoji(
      "⚡ Develop complex deep learning algorithms for Computer Vision and NLP "
    ),
    emoji("⚡ Optimization of deep learning models for deployment on edge."),
    emoji(
      "⚡ Research on all interesting topics in deep learning like transformers, pruning, knowledge distilation, etc. to name a few."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-low-vision"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Natural Language Processing",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pune University",
      logo: require("./assets/images/Unipune_Logo.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "Jul 2015 - May 2019",
      desc: ""
    },
    {
      schoolName: "Great Lakes Institue of Management",
      logo: require("./assets/images/Great_Lakes_Logo.png"),
      subHeader: "Post Graduation Diploma in Artificial Intelligence and Machine Learning",
      duration: "September 2019 - May 2021",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    },
    {
      Stack: "Deep learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "50%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Artificial Intelligence Engineer",
      company: "EDGENeural AI",
      companylogo: require("./assets/images/logo.png"),
      date: "Feb 2020 – Present",
      desc: "AI Enginner responsible for creating and deploying deep learning models to the edge.",
      descBullets: [
        "Work closely with CTO to understand new product and feature development.",
        "Develop various Computer Vision, NLP and Data analysis backbones for ENAP training platform using frameworks like Tensorflow, MxNet and PyTorch.",
        "Develop AI Inference engine for various backbones like and not limited to SSD, Yolo, RCNNs, Bert etc, for various different EDGE devices like and not limited to NVIDIA Jetson, Raspberry Pi, Intel Movidius, Xilinx or FPGA based boards, Qualcomm Snapdragon, Android etc.",
        "Ship various different dockers and work closely with Full-Stack Development team to integrate withing EdgeNeural’s infrastructure and ENAP cloud dashboard.",
        "Design and develop various automation scripts for trainings, inference engine and EDGE devices",
        "Troubleshooting of technical issues and providing quick resolution of customer complaints with the help of the team."
      ]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "EDGENeural AI",
      companylogo: require("./assets/images/logo.png"),
      date: "Nov 2019 – Feb 2020",
      desc: "AI Intern responsible for development and deployment of company product for face recognition services.",
      descBullets:[
        "Design, implement and improve/optimize Deep Learning AI/Computer Vision models.",
        "Implementation of AI pipelines.",
        "Edge AI model optimizations.",
        "Embedded software development.",
        "Full-Stack Software Development.",
        "Product Development."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Griffyn Robotech Pvt. Ltd.",
      companylogo: require("./assets/images/Griffyn_Logo.png"),
      date: "Jul 2019 – Oct 2019",
      desc: "Responsible for annotation and research in development of deep learning based solution for Cosmetic Grading Machine."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/EN-Symbol+Text.png"),
      projectName: "FaceEdge",
      projectDesc: "Face Recognition Terminal with Jetson Nano",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.edgeneural.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EN-Symbol+Text.png"),
      projectName: "ENAP Platform",
      projectDesc: "Decentralise AI by creating a platform that accelerates the process of deploying AI on the edge, which will make every device intelligent, secure and fast.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://becominghuman.ai/https-medium-com-katdare-swanand-college-student-to-machine-learning-enthusiast-af7e288e21a7",
      title: "College Student to Machine Learning Enthusiast",
      description:
        "My Journey from college student to the world of AI"
    },
    {
      url: "https://becominghuman.ai/artificial-intelligence-whats-the-hype-about-6d33795e1296",
      title: "Artificial Intelligence — What’s the hype about?",
      description:
        "My general view on AI and hype around it."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9130792208",
  email_address: "katdare.swanand@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
