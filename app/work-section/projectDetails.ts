export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "StruoCV",
    description:
      "Application web intuitive permettant de créer, personnaliser et télécharger un CV professionnel en quelques étapes, avec aperçu en temps réel, validation des champs et modèles personnalisables.",
    technologies: ["HTML5", "Tailwind CSS", "Javascript"],
    github: "https://github.com/ka-amina/StruoCV-Project",
    demo: "https://ka-amina.github.io/StruoCV-Project/",
    image: require(".//../../public/projects/image-1024.webp"),
    available: true,
  },
  {
    id: 1,
    name: "Youdemy",
    description:
      "Application web en PHP orienté objet permettant la gestion de cours en ligne avec rôles multiples, statistiques, recherche avancée et génération de certificats.",
    technologies: ["MySQL", "Tailwind CSS", "PHP","JavaScript"],
    github: "https://github.com/ka-amina/Youdemy",
    demo: "",
    image: require(".//../../public/projects/image-1024.webp"),
    available: false,
  },
  {
    id: 2,
    name: "Menara",
    description:
      "Application web développée en Laravel pour centraliser le processus de recrutement : gestion des candidats, offres d’emploi, entretiens, évaluations et tâches, avec rôles personnalisés et notifications automatisées.",
    technologies: ["PHP", "Javascript", "Tailwind Css","Laravel"],
    github: "https://github.com/ka-amina/Menara",
    demo: "",
    image: require(".//../../public/projects/image-1024.webp"),
    available: false,
  },

];


