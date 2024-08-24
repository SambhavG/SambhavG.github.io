const ProjectData = [
  {
    type: "Projects",
    content: [
      {
        title: "CourseCorrect",
        description: "Drag and drop 5 year course planner with degree verification",
        type: "Project",
        link: "https://sambhavg.github.io/coursecorrect",
        image: process.env.PUBLIC_URL + "/image_ship.jpg",
      },
      {
        title: "QuadCorp",
        description: "A game for learning quadric surfaces, developed for Lawrence Technological University",
        type: "Project",
        link: "https://sambhavg.github.io/QuadCorp-WebGL",
        image: process.env.PUBLIC_URL + "/image_radar.jpg",
      },
      {
        title: "Tetris",
        description: "A Processing (Java) implementation of classic Tetris",
        type: "Project",
        link: "https://github.com/SambhavG/Classic-Tetris",
        image: process.env.PUBLIC_URL + "/image_tetris.jpg",
        fontsize: "8em",
      },
      {
        title: "3D Art",
        description: "Blender art and animation",
        type: "Project",
        link: "https://www.instagram.com/sambhavgupta159/",
        image: process.env.PUBLIC_URL + "/image_tree.jpg",
      },
    ],
  },
  {
    type: "Publications",
    content: [
      {
        title: "CFSMP for Burnt Pancake Graphs",
        description: "Graph theory research published in IJCM:CST",
        type: "Publication",
        link: "https://www.tandfonline.com/doi/abs/10.1080/23799927.2022.2110159?journalCode=tcom20",
        image: process.env.PUBLIC_URL + "/image_cpu.jpg",
      },
    ],
  },
  {
    type: "Experience",
    content: [
      {
        title: "Amazon SDE Intern",
        description: "Operations - developed and deployed AWS application for internal use",
        type: "Work",
        link: "https://www.amazon.jobs/en/jobs/2408098/software-development-engineer-internship-2024-us",
        image: process.env.PUBLIC_URL + "/image_warehouse.jpg",
      },
      {
        title: "Stealth Startup",
        description: "Contech startup Principal Engineer, developed frontend/backend and used OpenAI API",
        type: "Work",
        link: "/",
        image: process.env.PUBLIC_URL + "/image_construction.jpg",
      },
      {
        title: "The Amherst Group Research Intern",
        description: "Modeled growth regions with high accuracy using neural network models",
        type: "Work",
        link: "https://www.amherst.com/",
        image: process.env.PUBLIC_URL + "/image_buildings.jpg",
      },
    ],
  },
];

export default ProjectData;
