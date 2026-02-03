import "./Contacts.css"

const Contacts = () => {
   // depois de fazer o linkedIn colocar ai embaixo o link 
  return (
    <div className='contacts-main-div'>
        <h1>Contatos</h1>
        <div>
          Email:<span> vitoriafreitas110903@gmail.com</span>
        </div>
        <div>
        Número:<span> 55 11 91345-5557</span>
        </div>
        <div>
          GitHub:<span> <a target="_blank" href="https://github.com/vitoriafreitasdev" className="link_contacts">vitoriafreitasdev</a></span>
        </div>
        <div>
          LinkedIn:<span> <a target="_blank" href="www.linkedin.com/in/vitória-freitas-b4076a387" className="link_contacts">Vitória Freitas</a></span>
        </div>
    </div>
  )
}

export default Contacts