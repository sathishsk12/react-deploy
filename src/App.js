import React from 'react'
import './App.css'




function App() {
	return (
		<div className='App'>
		<div>
				<h1 className ='Intro__header'>
			I’m Sathish,a Frontend Developer,UX/UI Designer.Specialized on creating awesome
experience on web and mobile devices.
		</h1>
		</div>
		<h2 className='Intro__sub'>
		I am specialized in designing meaningful and intuitives interfaces for mobile and web devices and making the UI design functional.
        </h2>
		<div className='Available'>
		 <img  className='Available__img'src='http://adrien.website/img/available.svg' alt='Available'/>
		 <h1 className='Available__h1'>Currently available for freelance or full-time work</h1>
		</div>
		<div className='works'>
			<img className='works__1' src={require("./assets/Music App.jpg")} alt='Project1'/>
			<p>Music App (Inspired From Spotify)</p>
		</div>
		<div className='checkout'>
			<h1>Check out more on <a href="https://dribbble.com/SathizhSK" target="_blank"><u>Dribble</u></a></h1>
		</div>
		<div className='footer'>
        <div>
		<h1 className='aboutme'> About me</h1>
		<p className='aboutme__intro'>I’m Sathish,a UI/UX Designer,Frontend Developer.I like to turn Ideas in to designs and designs into working Application</p>
		</div>
		<section className='section'>
			<h1> Let's talk</h1>
			<p>satheshklpt@gmail.com</p>
			 <div className='social'>
			   <a href="https://dribbble.com/SathizhSK" target="_blank">
				   <img  src={require("./assets/linkedin.png")} alt='Linkedin_logo'/>
			   </a>
			  
				<a href='https://github.com/sathishsk12' target="_blank">
					<img  src={require("./assets/github.png")} alt='github_logo'/>
					 </a>
			   <a  href='https://www.linkedin.com/in/sathiskumar-p-2ab07a1b1' target="_blank"> <img src={require("./assets/dribble.png")} alt='dribble'/></a>
				
           </div>
		 
		</section>
		  <div className='credits'>
			   <p>@Sathish2020</p>
		   </div>

		</div>
        
		
	
        

		
			
		</div>
	)
}

export default App

