import React from 'react'
import graph from '../../assets/graph1.svg'
import './Skills.css'
import Resume from '../../assets/resume.png'

const Skills = () => {
	return (
		<div className='mYcontainer container skills'>
			<div className="row">
				<div className="col-lg-6  col-sm-6 col-md-6 skills_col">
					<img src={graph} className='graph-img' />
				</div>
				<div className="col-lg-6  col-sm-6 col-md-6 skills_col">
					<h2 className='skills-h2'>my best skills</h2>
					<p className='skills-para'>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat est 
					quis lorem tristique aliquet cras quis trque felis vitae eleifend sapien.</p>
				{/*--------------------------------*/}
					<div className="skills-div">
						<div className='skills-box'>
							<h3 className='skills-box_h3'>ReactJs</h3>
							<p className='skills-box_p'>80%</p>
						</div>
						{/*<div className='skills-box'>
							<h3 className='skills-box_h3'>Javascript</h3>
							<p className='skills-box_p'>40%</p>
						</div>*/}
						<div className='skills-box'>
							<h3 className='skills-box_h3'>Boostrap</h3>
							<p className='skills-box_p'>99%</p>
						</div>
						<div className='skills-box'>
							<h3 className='skills-box_h3'>Css</h3>
							<p className='skills-box_p'>95%</p>
						</div>
						<div className='skills-box'>
							<h3 className='skills-box_h3'>Sass</h3>
							<p className='skills-box_p'>99%</p>
						</div>
						<div className='skills-box'>
							<h3 className='skills-box_h3'>Html</h3>
							<p className='skills-box_p'>99%</p>
						</div>
						<div className='skills-box'>
							<h3 className='skills-box_h3'>Photoshop</h3>
							<p className='skills-box_p'>99%</p>
						</div>
					</div>
					<div style={{marginTop: '14px'}}>
						<a href={Resume} download className='resume-btn'>download resume</a>
					</div>
				{/*---------------------*/}
				</div>
			</div>
		</div>
	)
}

export default Skills