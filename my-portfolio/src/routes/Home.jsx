import {Link} from "react-router-dom"
import foto from "../../images/foto-perfil-edit.png"


import "./Home.css"

const Home = () => {
  return (
    <div className='main-container'>
      <div className='introduction-div'>
        <h1>Futura desenvolvedora</h1> 
        <p className="aboutme-p">
          Me chamo Vitória Freitas, 22 anos. Iniciei os estudos em março de 2024, estou a procura de meu primeiro emprego.
        </p>    
        <h2>Um pouco sobre mim</h2>
          <div className="skills-div">
            <div className="skills-h3">
              <h3>Habilidades: </h3>
              <h3>Faculdade/Cursos:</h3>
            </div>
            <div className="skills-p">
              <p>
                Html, Css, JavaScript, ReactJS, Axios, Python. Básico: TypeScript e NodeJS com Express
              </p>
              <p className="line"></p>
              <p >
                Faço faculdade de Análise e Desenvolvimento de Sistemas na UNIP, estou no terceiro semestre. 
                E tenho dois cursos completos da Udemy. Nomes: Algoritmos e Lógica de Programação - O Curso COMPLETO, Instrutores Nelio Alves, Formação Front-end - HTML, CSS, JavaScript, React e +, Instrutores Matheus Battisti, Hora de Codar. Você pode verificar os certificados clicando <Link className="link" to="/sobremim">Aqui</Link>
              </p>
            </div>
            <Link className="btn" to="/sobremim"><button className="projects-btn">Projetos Pessoais</button></Link>
        </div>  
      </div>
      <div className='foto-div'>
          <img src={foto} alt="Foto de perfil" />
      </div>
    </div>
  )
}

export default Home