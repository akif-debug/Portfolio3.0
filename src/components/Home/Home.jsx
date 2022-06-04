import React from 'react'
import './Home.css'
import hero from '../../assets/hero3.png'
import {Link} from 'react-router-dom'
import Resume from '../../assets/resume.png'

const Home = () => {
	return (
		<div className='mYcontainer container home'>
			<div className="row">
				<div className="col-lg-6 col-sm-6 col-md-6 home-col">
					<h1 className='home-h1'>Hello, I'm</h1> 
					<h1 className='home-h1'>Marlon simon</h1> 
					<h1 className='home-h1 primary-text'>UX-UI developer</h1>
					<a href={Resume} download className='resume-btn' >download resume</a>
				</div>
				<div className="col-lg-6 col-sm-6 col-md-6 home-col"><img src={hero} className='home-img' /> </div>
			</div>
		</div>
	)
}

export default Home