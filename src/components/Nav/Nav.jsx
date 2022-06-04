import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}
	return (
		<>
		<div className="mYcontainer nav-container container">
			<Link to='/' className='nav-brand'>13.5coder</Link>
			<nav ref={navRef}>
				<Link to='Home' className='nav-links'>01 Intro</Link>
				<Link to='Menu' className='nav-links'>02 About me</Link>
				<Link to='Menu' className='nav-links'>03 my services</Link>
				<Link to='Menu' className='nav-links'>04 contact me</Link>
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes/>
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars/>
			</button>
			</div>
		</>
	)
}

export default Nav