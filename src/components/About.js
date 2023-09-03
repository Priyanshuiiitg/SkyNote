import React  from 'react'
// import noteContext from '../context/note/noteContext'
import './About.css'
const About = () => {
  // const a=useContext(noteContext);
  // setTimeout(() => {
  //   a.toggle();
    
  // }, 1000);
  
   
  return (
    <div className="about-page my-4">
      

      <div className="section ">
        <h3>Welcome to SkyNote</h3>
        <p>SkyNote is your go-to platform for seamless note-taking and organization. We provide a user-friendly solution for capturing and managing your important thoughts, ideas, and tasks.</p>
      </div>

      <div className="section">
        <h3>Features and Benefits</h3>
        <ul>
          <li>Effortless Note-Taking</li>
          <li>Anywhere, Anytime Access</li>
          <li>Stay Organized</li>
          <li>Collaborate with Ease</li>
          <li>Data Security and Privacy</li>
        </ul>
      </div>

      <div className="section">
        <h3>Get Started</h3>
        <p>Sign up for SkyNote to start capturing your ideas, organizing your tasks, and collaborating with others.</p>
      </div>

      <div className="section">
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, please reach out to our support team at  <a href="mailto:">support@skynoteapp.com</a>  .</p>
      </div>

      <p>Thank you for choosing SkyNote. Start exploring the power of organized note-taking today!</p>
    </div>

   
  )
}

export default About