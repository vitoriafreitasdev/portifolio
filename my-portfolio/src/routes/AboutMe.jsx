import certificadoAlgoritmos from "../../images/certificado1.png"
import certificadoFrontEnd from "../../images/certificado2.png"

import "./AboutMe.css"
const AboutMe = () => {
    // fazer os repositorios no git de cada um dos projetos.
  return (
    <div className="aboutme-main-div">
        
        <div>
            
            <h1>Mais sobre mim</h1>
            <div className="div-projects">
                    <h2>Projetos pessoais.</h2>
                    <p className="introduction-p">
                        Desde que iniciei os estudos fiz alguns projetos pessoais com o conhecimento que tinha na época que fiz ele, abaixo estão elas:
                    </p>
                    <ul className="ul-projects">
                        <li>Reac Services</li>
                        <p>Um CRUD para fazer solicitação de serviços para veículo, você cadastra seus dados e de acordo com seu orçamento pode solicitar serviços para o seu veículo, possui um painel administrativo, apenas o usuário administrador tem acesso. Utiliza react router dom, axios react tostify, no backend NodeJs, mongoose, express, bcrypt, jsonwebtoken e mongoDB Atlas.</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/ReactServices" target="_blank">Aqui</a></p>

                        <li>React Recipes </li>
                        <p>Um CRUD para fazer postagem de receitas, você cadastra seus dados e pode postar, editar e excluir suas receitas e ver as receitas postadas por outras pessoas, tem upload de imagem através de arquivo do computador. Utiliza react router dom, axios react tostify, no backend NodeJs, mongoose, express, bcrypt, jsonwebtoken, multer e mongoDB Atlas.</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/ReactRecipes" target="_blank">Aqui</a></p>

                        <li>React Quiz</li>
                        <p>Um quiz feito em react, utilizando useReducer e o useContext</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/ReactQuiz" target="_blank">Aqui</a></p>

                        <li>Github Finder com react e TypeScript</li>
                        <p>Um sistema para procurar perfis do Github e retorna o perfil com os melhores repositórios. Utiliza o react router dom e api do Github.</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/GitHubFinderReactTS" target="_blank">Aqui</a></p>

                        <li>React Party Time</li>
                        <p>Um sistema para agendamento de festas, cria, edita e mostra as festas cadastradas. Utilizei React com react-router-dom, axios e no backend NodeJS com express, mongoose e mongoDB Atlas.</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/ReactPartyTime" target="_blank">Aqui</a></p>

                        <li>React Memories</li>
                        <p>Um CRUD para guardar memórias, consegue fazer o upload de imagem através de arquivos. Utilizei React com react-router-dom, axios e no backend NodeJS com express, mongoose, mongoDB Atlas e o multer.</p>
                        <p>Repoitório <a className="link" href="https://github.com/vitoriafreitasdev/ReactMemories" target="_blank">Aqui</a></p>

                        <li>Formulário multistep com React e TypeScript</li>
                        <p>Um formulário para avaliações dos usuários.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/FormularioMultistepReactTS" target="_blank">Aqui</a></p>

                        <li>APIRESTful com nodeJS.</li>
                        <p>Uma api feita com nodejs para um CRUD simples, utiliza nodeJS com Express e mongoose para fazer as interações com o banco MongoDB Atlas.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/API-RESTful-NodeJS" target="_blank">Aqui</a></p>
                    </ul>
            </div>

            <div className="certificates-div">
                <h2>Meus certificados:</h2>
                <span><img src={certificadoAlgoritmos} alt="Certificado do curso Algoritmos e Lógica de Programação - O Curso COMPLETO, Instrutores Nelio Alves." /></span>
                <span><img src={certificadoFrontEnd} alt="Certificado do curso Formação Front-end - HTML, CSS, JavaScript, React e +, Instrutores Matheus Battisti, Hora de Codar." /></span>
            </div>

            
        </div>

    </div>
  )
}

export default AboutMe