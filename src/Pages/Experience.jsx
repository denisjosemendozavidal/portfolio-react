import React from 'react'

const Experience = () => {
  return (
   <article className='experience'>
      <h2 className='experience-title'>Projects I've worked on</h2>
      <h4 className='experience-scroll-down-message'>Scroll down</h4>
      <div className='experience-galery'>
        <div className='experience-galery-RN-project'>
          <h3 className='experience-galery-RN-project-tittle'>React Native project</h3>
          <p>Used Tecnologies: React Native, expo go, among others</p>
          <p>Idea behind it: Sharing positive energy and motivation through a mobile app</p>
          <p>Please click on the image bellow to be redirected to its Github repository, link: "https://github.com/denisjosemendozavidal/React-native-first.git"</p>
          <a href="https://github.com/denisjosemendozavidal/React-native-first.git" target="_blank"><img src="/images/RN-first.gif" alt="" /></a>
        </div>
        <div className='experience-galery-Poke-project'>
          <h3 className='experience-galery-Poke-project-tittle'>The Poke app</h3>
          <p>Used Tecnologies: React.js, REST APIs, Axios, Among others</p>
          <p>Idea behind it: Solidifying React redux knowledge</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. (link: "https://denis-mendoza-pokeapi.netlify.app/")</p>
          <a href="https://denis-mendoza-pokeapi.netlify.app/" target="_blank"><img src="/images/pokeball.gif" alt="" /></a>
        </div>
        <div className='experience-galery-RandM-project'>
          <h3 className='experience-galery-RandM-project-tittle'>Rick and Morty Project</h3>
          <p>Used Tecnologies: React.js, REST APIs, Axios, Among others</p>
          <p>Idea behind it: The goal behind it was understanding more about how asynchronous requests and REST APIs work while customizing the rendering to user's interaction with the app.</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. (link: "https://denis-mendoza-api-usage-with-randm.netlify.app/")</p>
          <a href="https://denis-mendoza-api-usage-with-randm.netlify.app/" target="_blank"><img src="/images/R-m-moving.gif" alt="" /></a>
        </div>
        <div className='experience-galery-Weather-App'>
          <h3 className='experience-galery-Weather-App-tittle'>The Weather-App</h3>
          <p>Used Tecnologies: React.js, REST APIs, Axios, among others</p>
          <p>Idea behind it: Doing an API consumption using axios, app shows current weather conditions based on user's location</p>
          <p>Disclaimer: The App will not move beyond the loading page if it is not allowed to pull user's current location.</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. (link: "https://denis-mendoza-apiusage.netlify.app/")</p>
          <a href="https://denis-mendoza-apiusage.netlify.app/" target="_blank"><img src="/images/weather-app-preview.png" alt="" /></a>
        </div>
        <div className='experience-galery-Ecommerce'>
          <h3 className='experience-galery-Ecommerce-tittle'>Ecommerce Javascript Vanilla</h3>
          <p>Used Tecnologies: HTML 5, CSS 3 and Javascript-Vanilla</p>
          <p>Idea behind it: Showing a fully interactive ecommerce type website, that includes a shoping cart functionality</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. link: "https://denis-mendoza-ecommerce-vanillajs.netlify.app/"</p>
          <a href="https://denis-mendoza-ecommerce-vanillajs.netlify.app/" target="_blank"><img src="/images/logolumus.png" alt="" /></a>
        </div>
      </div>

   </article>
  )
}

export default Experience