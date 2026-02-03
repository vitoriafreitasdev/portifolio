
import certificadoAlgoritmos from "../../images/certificado1.png"
import certificadoFrontEnd from "../../images/certificado2.png"

import "./AboutMe.css"
const AboutMe = () => {
    
  return (
    <div className="aboutme-main-div">
        
        <div>
            
            <h1>Mais sobre mim</h1>
            <div className="div-projects">
                    <h2>Projetos pessoais.</h2>
                    <p className="introduction-p">
                        Cada projeto representa um marco na minha jornada de aprendizado, 
                        utilizando as tecnologias que dominava em cada fase.
                    </p>

                    <ul className="ul-projects">
                        <li>React platarforma de gestão de estoque</li>
                        <p>Uma plataforma completa de gestão de estoque com autenticação de usuários e administradores. Usuários podem solicitar produtos disponíveis, enquanto administradores (com chave de acesso) podem gerenciar todo o inventário.</p>
                        <p><span>Tecnologias:</span> React (react router dom, axios), Node.js, MongoDB, Express, JWT, Multer</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/platarforma-de-gestao-de-estoque" target="_blank">Aqui</a></p>
                        
                        <li>Quiz de JS + React e Python</li>
                        <p>
                           Plataforma de quiz com duas categorias técnicas. Usuários cadastrados podem testar seus conhecimentos, competir por pontuações e ver um ranking global.
                           Disponível: <a className="link" href="https://quiz-redux-extension-frontend.vercel.app/" target="_blank">neste link</a>:
                        </p>
                        <p><span>Tecnologias:</span> React (react router dom, axios, redux), Redux, Node.js, MongoDB, Express</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/quiz_redux_extension" target="_blank">Aqui</a></p>

                        <li>React Services</li>
                        <p>Sistema para solicitação de serviços automotivos com base no orçamento do cliente. Inclui painel administrativo exclusivo para gestão de pedidos.</p>
                        <p><span>Tecnologias:</span> React (react router dom, toastify), Node.js, MongoDB, Express, JWT</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReactServices" target="_blank">Aqui</a></p>

                        <li>React Recipes </li>
                        <p>Comunidade para compartilhamento de receitas culinárias. Usuários podem postar, editar e explorar receitas de outros, com suporte a upload de fotos, disponível: <a href="https://react-recipes-frontend-zeta.vercel.app/" target="_black">Aqui</a></p>
                        <p><span>Tecnologias:</span> React (react router dom, axios, toastify), Node.js, Cloudinary, MongoDB, Express</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReactRecipes" target="_blank">Aqui</a></p>

                        <li>Gerenciador de Treinos</li>
                        <p>Aplicação para registro e acompanhamento de treinos semanais. Usuários organizam sua rotina de exercícios de forma simples e intuitiva.</p>
                        <p><span>Tecnologias:</span> JavaScript, Node.js, MongoDB, Express, JWT</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/JS_Project" target="_blank">Aqui</a></p>

                        <li>React + TypeScript com Redux Toolkit</li>
                        <p>Aplicação que consome API pública para busca e gerenciamento de personagens. Demonstração avançada do uso de Redux Toolkit com operações assíncronas.</p>
                        <p><span>Tecnologias:</span> React, TypeScript, Redux Toolkit, API REST</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReduxProject" target="_blank">Aqui</a></p>

                        <li>Github Finder</li>
                        <p>Um sistema para procurar perfis do Github e retorna o perfil com os melhores repositórios. Utiliza o react router dom e api do Github.</p>
                        <p><span>Tecnologias:</span> React, TypeScript, GitHub API</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/GitHubFinderReactTS" target="_blank">Aqui</a></p>

                        {/* <li>React Quiz</li>
                        <p>Um quiz feito em react, utilizando useReducer e o useContext</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReactQuiz" target="_blank">Aqui</a></p>

                        <li>React Party Time</li>
                        <p>Um sistema para agendamento de festas, cria, edita e mostra as festas cadastradas. Utilizei React com react-router-dom, axios e no backend NodeJS com express, mongoose e mongoDB Atlas.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReactPartyTime" target="_blank">Aqui</a></p>

                        <li>React Memories</li>
                        <p>Um CRUD para guardar memórias, consegue fazer o upload de imagem através de arquivos. Utilizei React com react-router-dom, axios e no backend NodeJS com express, mongoose, mongoDB Atlas e o multer.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/ReactMemories" target="_blank">Aqui</a></p>

                        <li>Formulário multistep com React e TypeScript</li>
                        <p>Um formulário para avaliações dos usuários.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/FormularioMultistepReactTS" target="_blank">Aqui</a></p>

                        <li>APIRESTful com nodeJS.</li>
                        <p>Uma api feita com nodejs para um CRUD simples, utiliza nodeJS com Express e mongoose para fazer as interações com o banco MongoDB Atlas.</p>
                        <p>Repositório <a className="link" href="https://github.com/vitoriafreitasdev/API-RESTful-NodeJS" target="_blank">Aqui</a></p> */}
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