import certificadoAlgoritmos from "../../images/certificado1.png";
import certificadoFrontEnd from "../../images/certificado2.png";
import { useState } from "react";
const useAboutMe = () => {

    const [activeProject, setActiveProject] = useState(null);

    const toggleProjectDetails = (id) => {
        setActiveProject(activeProject === id ? null : id);
    };
    // Array de projetos para organização
    const projects = [
      {
        id: 1,
        title: "React Plataforma de Gestão de Estoque",
        description: "Uma plataforma completa de gestão de estoque com autenticação de usuários e administradores. Usuários podem solicitar produtos disponíveis, enquanto administradores (com chave de acesso) podem gerenciar todo o inventário.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Multer"],
        repo: "https://github.com/vitoriafreitasdev/platarforma-de-gestao-de-estoque",
        live: null,
        features: ["Autenticação diferenciada", "CRUD completo", "Upload de imagens"]
      },
      {
        id: 2,
        title: "Quiz de JS + React e Python",
        description: "Plataforma de quiz com duas categorias técnicas. Usuários cadastrados podem testar seus conhecimentos, competir por pontuações e ver um ranking global.",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        repo: "https://github.com/vitoriafreitasdev/quiz_redux_extension",
        live: "https://quiz-redux-extension-frontend.vercel.app/",
        features: ["Dois tipos de quiz", "Sistema de ranking", "Persistência de pontuações"]
      },
      {
        id: 3,
        title: "React Services",
        description: "Sistema para solicitação de serviços automotivos com base no orçamento do cliente. Inclui painel administrativo exclusivo para gestão de pedidos.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        repo: "https://github.com/vitoriafreitasdev/ReactServices",
        live: null,
        features: ["Painel administrativo", "Orçamento personalizado", "Autenticação segura"]
      },
      {
        id: 4,
        title: "React Recipes",
        description: "Comunidade para compartilhamento de receitas culinárias. Usuários podem postar, editar e explorar receitas de outros, com suporte a upload de fotos.",
        technologies: ["React", "Node.js", "Cloudinary", "Express", "MongoDB"],
        repo: "https://github.com/vitoriafreitasdev/ReactRecipes",
        live: "https://react-recipes-frontend-zeta.vercel.app/",
        features: ["Upload para Cloudinary", "Comunidade interativa", "CRUD completo"]
      },
      {
        id: 5,
        title: "Gerenciador de Treinos",
        description: "Aplicação para registro e acompanhamento de treinos semanais. Usuários organizam sua rotina de exercícios de forma simples e intuitiva.",
        technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "JWT"],
        repo: "https://github.com/vitoriafreitasdev/JS_Project",
        live: null,
        features: ["Foco em JavaScript puro", "Autenticação JWT", "Interface limpa"]
      },
      {
        id: 6,
        title: "React + TypeScript com Redux Toolkit",
        description: "Aplicação que consome API pública para busca e gerenciamento de personagens. Demonstração avançada do uso de Redux Toolkit com operações assíncronas.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "API REST"],
        repo: "https://github.com/vitoriafreitasdev/ReduxProject",
        live: null,
        features: ["Async Thunks", "Favoritos", "Filtragem em tempo real"]
      },
      {
        id: 7,
        title: "Github Finder",
        description: "Ferramenta para busca de perfis do GitHub com exibição detalhada de informações e repositórios mais relevantes.",
        technologies: ["React", "TypeScript", "GitHub API"],
        repo: "https://github.com/vitoriafreitasdev/GitHubFinderReactTS",
        live: null,
        features: ["Integração GitHub API", "TypeScript", "Design responsivo"]
      }
    ];
    
    const certificates = [
      {
        id: 1,
        image: certificadoAlgoritmos,
        alt: "Certificado do curso Algoritmos e Lógica de Programação - O Curso COMPLETO, Instrutor Nelio Alves",
        title: "Algoritmos e Lógica de Programação",
        instructor: "Nelio Alves"
      },
      {
        id: 2,
        image: certificadoFrontEnd,
        alt: "Certificado do curso Formação Front-end - HTML, CSS, JavaScript, React e +, Instrutor Matheus Battisti - Hora de Codar",
        title: "Formação Front-end Completa",
        instructor: "Matheus Battisti"
      }
    ];

    return {projects, certificates, activeProject, toggleProjectDetails}
}

export default useAboutMe