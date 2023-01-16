import React from 'react'

const Experience = () => {
  return (
   <article className='experience'>
      <h2 className='experience-title'>Projects I've worked on</h2>
      <h4 className='experience-scroll-down-message'>Scroll down</h4>
      <div className='experience-galery'>
        <div className='experience-galery-PERN-App'>
          <h3 className='experience-galery-PERN-App-tittle'>PERN APP</h3>
          <p>Used Tecnologies: PostgreSQL, Express, React.js, Node.js, among others</p>
          <p>Idea behind it: Understanding how Front and Back relate to make a Full stack app possible</p>
          <p>Please click on the image bellow to be redirected to its deployment. (link: "https://fe-pern-crud-users.denismendoza.site/")</p>
          <a href="https://fe-pern-crud-users.denismendoza.site/" target="_blank"><img src="/images/PERNStack.png" alt="" /></a>
        </div>
        <div className='experience-galery-RN-project'>
          <h3 className='experience-galery-RN-project-tittle'>React Native project</h3>
          <p>Used Tecnologies: React Native, expo go, among others</p>
          <p>Idea behind it: Sharing positive energy and motivation through a mobile app</p>
          <p>Please click on the image bellow to be redirected to its Github repository, link: "https://github.com/denisjosemendozavidal/React-native-first.git"</p>
          <a href="https://github.com/denisjosemendozavidal/React-native-first.git" target="_blank"><img src="/images/RN-first.gif" alt="" /></a>
        </div>
        <div className='experience-galery-basic-PHP-project'>
          <h3 className='experience-galery-basic-PHP-project-tittle'>My baby steps with PHP and MySQL</h3>
          <p>Used Tecnologies: Vanilla PHP, My SQL, HTML and Bootstrap</p>
          <p>Idea behind it: Learning how to build something with vanilla PHP.</p>
          <p>Link to its github Repo: https://github.com/denisjosemendozavidal/My-First-PHP-MySQL-ap</p>
          <p>Please click on the image bellow to be redirected to its deployment. (link: "https://my-baby-steps-with-php.000webhostapp.com/index.php")</p>
          <a href="https://my-baby-steps-with-php.000webhostapp.com/index.php" target="_blank"><img src="/images/phpmysql.png" alt="" /></a>
        </div>
        <div className='experience-galery-Poke-project'>
          <h3 className='experience-galery-Poke-project-tittle'>The Poke app</h3>
          <p>Used Tecnologies: React.js, REST APIs, Axios, Among others</p>
          <p>Idea behind it: Solidifying React redux knowledge</p>
          <p>Please click on the image bellow to be redirected to its Netlify deployment. (link: "https://denis-mendoza-pokeapi.netlify.app/")</p>
          <a href="https://denis-mendoza-pokeapi.netlify.app/" target="_blank"><img src="/images/pokeball.gif" alt="" /></a>
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