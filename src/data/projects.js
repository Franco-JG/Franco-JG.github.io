const projects = [
    {
      id: 1,
      title: "Alis Salon",
      description: "Frontend para un salon de belleza con reservas en linea.",
      image: "/projects/alis-salon.webp",
      technologies: ["Next.js 16", "TypeScript","Tailwind v4"],
      githubUrl: "https://github.com/Franco-JG/alis-nail-salon",
      liveUrl: "https://alis-nail-salon.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Sitio web personal con animaciones usando React Three Fiber y GSAP.",
      image: "/projects/portfolio.webp",
      technologies: ["React", "Three.js", "Material UI", "GSAP", "Vite"],
      githubUrl: "https://github.com/Franco-JG/Franco-JG.github.io",
      liveUrl: "https://geovani-franco.me",
      // featured: true,
    },
    {
      id: 3,
      title: "Dragonball Parallax",
      description: "Escena 3D inspirada en Dragon Ball que simula el efecto de paralaje.",
      image: "/projects/parallax.webp",
      technologies: ["Javascript", "Three.js", "Blender", "Vite"],
      githubUrl: "https://github.com/Franco-JG/parallax-scene",
      liveUrl: "https://geovani-franco.me/parallax-scene",
    },
    {
      id: 4,
      title: "Lector RSS",
      description: "Aplicacion web para leer y gestionar feeds RSS.",
      image: "/projects/rss-feed.webp",
      technologies: ["React", "Typescript","PHP", "MySQL","REST API"],
      githubUrl: "https://github.com/Franco-JG/OAW-2025",
      liveUrl: "",
    },
  ];

export default projects;