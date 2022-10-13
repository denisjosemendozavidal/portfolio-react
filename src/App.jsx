import { useEffect, useState } from 'react'
import './App.css'
import Aboutme from './Pages/Aboutme'
import Experience from './Pages/Experience'


function App() {
  const [istrue, setIstrue] = useState(false)
  const [showLetters, setShowLetters] = useState(false)
  const [istrueFE, setistrueFE] = useState(false)
  const [istrueDe, setIstrueDe] = useState(false)
  const [istruePeace, setIstruePeace] = useState(false)
  const [istrueExp, setistrueExp] = useState(false)
  


  const handleIsTrue = () => {
    setIstrue(!istrue)
    
  }

  const handleShowletters = () => {
    setShowLetters(!showLetters)
    
  }

  const handleShowlettersFE = () => {
    setistrueFE(!istrueFE)
  }

  const handleShowlettersDE = () => {
    setIstrueDe(!istrueDe)
  }

  const handleShowlettersPeace = () => {
    setIstruePeace(!istruePeace)
  }

  const handleistrueExp = () => {
    setistrueExp(!istrueExp)
  }



  return (
    <div className="App">
      {
        istrue? <Aboutme handleIsTrue={handleIsTrue}/> : 
          <div className='introduction-and-pic'>
            <div className='pic'> {istrueExp ? <Experience/> :
              <img src="../images/imagenfondo.png" alt="" />

            }
            </div>
            <div className='introduction'>
              <h2 className="hi" onMouseEnter={handleShowletters} onMouseLeave={handleShowletters} onClick={handleIsTrue}>{showLetters? "About me" : "Hi!"}</h2>
              <h2 className="iam" onMouseEnter={handleShowlettersFE} onMouseLeave={handleShowlettersFE} onClick={handleistrueExp}>{istrueFE? "Experience" : "I'm"}</h2>
              <h1 className='denis' onMouseEnter={handleShowlettersDE} onMouseLeave={handleShowlettersDE}>{istrueDe? "My CV" : "Denis"}</h1> 
              <h2 onMouseEnter={handleShowlettersPeace} onMouseLeave={handleShowlettersPeace} className='peace'>{istruePeace? 
                      <span className='peace'>
                        <a href="https://github.com/denisjosemendozavidal" target="_blank"><img src="../images/github-logo.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/denis-mendoza-a085b518b" target="_blank"><img src="../images/linkedin-logo.png" alt="" /></a> 
                        <a href="https://api.whatsapp.com/send?phone=573044612480" target="_blank"><img src="../images/whatsapp-logo.png" alt="" /></a>
                      </span>
               : "✌🏾"}</h2>  
            </div>
           
          </div>

          
      }

                   

    </div>
  )
}

export default App
