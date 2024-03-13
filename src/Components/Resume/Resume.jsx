import React from 'react'
import './Resume.css'
import ResumeD from './Rajat_Jain_resume.pdf'

const Resumer = () => {
  return (
    <section id='Resume'>
         <h2 className="ResumeTitle">Resume</h2>
      <span className="ResumeTitles">Resume</span>
      <span className="ResumeDesc">
      To secure a promising position that offers a challenge and a good opportunity for growth. Utilizing my 
technical skills to implement innovative ideas and meanwhile benefit the team with my analytical and 
logical abilities.
      </span>

   



<div className="boxContainer">
    <div className="box">
      <h2>2020-2023</h2>
      <h3>Bachelor of Computer Applications</h3>
      <p>JIWAJI UNIVERSITY</p>
      <span>
      As a proud graduate of Jiwaji University, I have cultivated a strong foundation in [your major or field of study], harnessing both theoretical knowledge and practical skills to excel in my academic pursuits. Throughout my time at Jiwaji University, I embraced diverse learning opportunities, engaged in rigorous coursework, and collaborated with esteemed faculty members and peers.
      </span>
    </div>
    <div className="box">
      <h2>2023-2024[Aug-Jan]</h2>
      <h3>Full Stack Developer</h3>
      <p>Mactosys Software Technology pvt. ltd</p>
      <span>
      Trained by Moctosys Company, I'm a full stack developer passionate about crafting immersive digital experiences. With expertise in both front-end and back-end development, I bring a diverse skill set to every project. From elegant user interfaces to robust server-side solutions, I thrive on delivering innovative web solutions that exceed expectations.
      </span>
    </div>
    <div className="box">
      <h2>2023-2024[Dec-Jan]</h2>
      <h3>React.js</h3>
      <p>Mactosys Software Technology pvt. ltd</p>
      <span>
      As a React.js developer at Mactosys company, I specialize in crafting dynamic and intuitive user interfaces. With a focus on performance and scalability, I strive to deliver solutions that exceed expectations and drive meaningful impact. Passionate about pushing the boundaries of web development, I'm committed to continuous growth and innovation.
      </span>
    </div>
    <div className="box">
      <h2>2023-2024</h2>
      <h3>Master of Computer Application</h3>
      <p>Dr Preeti Global University</p>
      <span>
      Enrolled in Dr. Preeti Global University's MCA program, I'm exploring a spectrum of computer science topics, from programming languages to database management. Through practical projects and extracurricular activities, I'm honing my skills and nurturing a fervent interest in technology. I'm eager to leverage this education to contribute to advancements in the field.





      </span>
    </div>
  </div>

<div  className='CVbtns'  >
    <a href={ResumeD}>
    <button  className='CVbtn'  >DOWNLOAD CV</button>
    </a>
</div>

    </section>
  )
}

export default Resumer


