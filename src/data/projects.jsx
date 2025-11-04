export const portfolioData = [
  {
    imageSrc: "/assets/projects/neighbourgood/0.png",
    imageAlt: "Neighbourgood app preview",
    header: "NeighbourGood App (group project)",
    date: new Date("2023-04-06"),
    description:
      "It is a powerful community-driven app designed to strengthen community by connecting neighbours, where they can engage in conversations, request, or offer help, such as DIY, do the shopping, dog walking and more. As a team of four, we successfully collaborated and completed this project within a tight timeframe of just 1.5 weeks. We utilised Flutter and Firebase.",
    badges: ["dart", "flutter", "firebase", "github", "googlemaps"],
    buttons: (
      <>
        <a
          href="https://www.youtube.com/watch?v=3MB573PKkI4"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube" style={{ color: "#FF0000" }}></i>
          Watch Showcase
        </a>
        <a
          href="https://github.com/Kristaps31/NeighbourGood"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "NC BoardGames front-end reviews preview",
    header: "NC BoardGames Front-End 🎲",
    date: new Date("2023-03-18"),
    description:
      "Delivers an engaging and responsive user interface for a board game reviews. Developed in a week, it interacts seamlessly with the backend NC BoardGames Backend API, allowing users to browse, contribute to a reviews, comment, vote and more.",
    badges: ["javascript", "react", "htmlCss"],
    buttons: (
      <>
        <a
          href="https://nc-bg.netlify.app/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/fe-nc-games/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames-api/0.png",
    imageAlt: "NC BoardGames API endpoints preview",
    header: "NC BoardGames Backend API",
    date: new Date("2023-02-28"),
    description:
      "Built for NC BoardGames Front-End that designed to serve reviews, comments, users, categories related to board games and more. It is a fast, efficient server built in a week as part of Northcoder Coding Bootcamp, powering a user-driven board game reviews platform.",
    badges: ["nodejs", "express", "psql", "tdd", "supertest"],
    buttons: (
      <>
        <a
          href="https://nc-games.lendi.dev/api"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/backend-nc-games/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/meteorites/0.png",
    imageAlt: "Meteorite landings website preview",
    header: "Meteorite Landings 🌍",
    date: new Date("2023-03-07"),
    description:
      "My impressive one-day sprint project that visualizes meteorite landings based on NASA's database. Leveraging React, the interactive map (MapBox) provides an engaging and intuitive way to explore meteorite impact locations across the globe.",
    badges: ["react", "htmlCss", "mapbox"],
    buttons: (
      <>
        <a
          href="https://meteorite-landings-react.netlify.app"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/meteorites-map-react-app"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/online-shop/0.png",
    imageAlt: "online shop preview",
    header: "Online Shop 🛒",
    date: new Date("2023-02-12"),
    description:
      "This e-commerce website features two user stories - one for customers to place orders and one for admins to manage products and fulfill orders. To ensure an efficient user experience, the shop also integrates with an AWS S3 bucket to store and upload product images",
    badges: ["nodejs", "express", "ejs", "mongodb", "s3"],
    buttons: (
      <>
        <a
          href="https://github.com/LendiDev/online-shop"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/portfolio/0.png",
    imageAlt: "My portfolio website preview",
    header: "My Portfolio Website",
    date: new Date("2023-02-01"),
    description:
      "Is a sleek and simple personal portfolio that showcases my skills, web development projects and experiences. It features a responsive design for optimal viewing on various devices. The website highlights my passion for creating innovative and user-friendly applications.",
    badges: ["react", "htmlCss", "nodejs", "nodemailer", "recaptcha"],
    buttons: (
      <>
        <a
          href="https://github.com/LendiDev/portfolio-website-v1"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
];
