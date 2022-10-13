import React from 'react'

const Experience = () => {
  return (
   <article className='experience'>
      <h2 className='experience-title'>Projects I've worked on</h2>
      <div className='experience-galery'>
        <div className='experience-galery-Ecommerce'>
          <h3 className='experience-galery-Ecommerce-tittle'>Ecommerce Javascript Vanilla</h3>
          <p>Used Tecnologies: HTML 5, CSS 3 and Javascript-Vanilla</p>
          <p>Idea behind it: Showing a fully interactive ecommerce type website, that includes a shoping cart functionality</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. link: "https://denis-mendoza-ecommerce-vanillajs.netlify.app/"</p>
          <a href="https://denis-mendoza-ecommerce-vanillajs.netlify.app/" target="_blank"><img src="/images/logolumus.png" alt="" /></a>
        </div>
        <div className='experience-galery-Weather-App'>
          <h3 className='experience-galery-Weather-App-tittle'>The Weather-App</h3>
          <p>Used Tecnologies: React.js, REST APIs, Axios, among others</p>
          <p>Idea behind it: Doing an API consumption using axios, app shows current weather conditions based on user's location</p>
          <p>Disclaimer: The App will not move beyond the loading page if it is not allowed to pull user's current location.</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. (link: "https://denis-mendoza-apiusage.netlify.app/")</p>
          <a href="https://denis-mendoza-apiusage.netlify.app/" target="_blank"><img src="/images/weather-app-preview.png" alt="" /></a>
        </div>
      </div>

   </article>
  )
}

export default Experience