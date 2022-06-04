import React from 'react'
import graph from '../../assets/graph1.svg'
import './Skills.css'

const Skills = () => {
	return (
		<div className='mYcontainer container skills'>
			<div className="row">
				<div className="col-lg-6  col-sm-6 col-md-6 skills-col">
					<img src={graph} />
				</div>
				<div className="col-lg-6  col-sm-6 col-md-6 skills-col">
					<h2>my best skills</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat est quis 
					lorem tristique aliquet cras quis tristique felis vitae eleifend sapien.</p>
				</div>
			</div>
		</div>
	)
}

export default Skills