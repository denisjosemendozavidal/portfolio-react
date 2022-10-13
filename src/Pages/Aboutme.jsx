import React from 'react'

const Aboutme = ({handleIsTrue}) => {
  return (
    <article className='aboutme'>
        <div className='aboutme-header'>
            <h2 className='goback' onClick={handleIsTrue}>Go back</h2>
        </div>
        <h1 className="aboutmetittle">About me</h1>
        <div className='aboutme-summary'>
            <h2 className='aboutme-summary-tittle'>Summary of this section</h2>
                <ul className='aboutme-summary-list'>
                    <li className='aboutme-summary-list-element'>I'm a front end web developer.</li>
                    <li className='aboutme-summary-list-element'>I have hands on experience using HTML, CSS, Javascript-Vanilla and React.js.</li>
                    <li className='aboutme-summary-list-element'>10 years of experience in Sales.</li>
                    <li className='aboutme-summary-list-element'>Happily married and father of two boys.</li>
                    <li className='aboutme-summary-list-element'>Based out of Barranquilla, Atlantico, Colombia.</li>
                </ul>
        </div>
        <div className='aboutme-longerversion'>
            <h2 className='aboutme-longerversion-title'>About me - Longer version</h2>
            <h3 className='aboutme-longerversion-introVideo-title'>Intro Video</h3>
            <video className='aboutme-longerversion-introVideo vid-for-big-screens' src="/images/Video/Introduction.mp4" controls></video>
            <h3 className='aboutme-longerversion-motivationAndSkills-title'>My "why?"</h3>
                <p className='aboutme-longerversion-motivationAndSkills-paragrah'>Hi, I'm Denis Mendoza and Ever since I learned people could create, 
                    communicate and develop web applications and websites to teach them how to full-fill all sorts of duties while also 
                    getting them to interact in a responsive way with different type of users, I got hooked on everything programming related, 
                    since then, being a programmer, was more than a job, it became my passion and main source of motivation to keep learning and 
                    growing as a professional</p>

            <div className='aboutme-longerversion-motivationAndSkills-skills'>
                <h4 className='aboutme-longerversion-motivationAndSkills-skills-tittle'>Skills: </h4>
                <img src="/images/CSS.png" alt="" />
                <img src="/images/HTML.jpg" alt="" />
                <img src="/images/JS.png" alt="" />
                <img src="/images/react.png" alt="" />
            </div>
                <img src="/images/Learning-more.png" alt="" />
        </div>


        
    </article>
  )
}

export default Aboutme