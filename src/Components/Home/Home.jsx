



import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import Profile from '../images/Profile_.png'
import WorkIcon from '@mui/icons-material/Work';

const Home = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span  className='introText'>I'm  <span className='introName' >Rajat</span> <br />Website Designer </span>
        <p className="introPara">I am a skilled Web designer with experience in creating    visually appealing  <br /> and user frindly Website. </p>
        <Link><button className='btn'> <WorkIcon   className='btnImg'/>        Hire Me</button></Link>
              </div>
      <img src={Profile} alt="Profile_"   className='bg' />
    </section>
  )
}

export default Home
