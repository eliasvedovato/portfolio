import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	// toggle the value
	const handleClick = () => setNav(!nav)

	return (
		<div
			className='fixed w-full h-[80px]
        flex justify-between items-center 
        px-4 bg-[#0a192f] text-gray-300 z-10'
		>
			<div>
				<Link to='home' smooth={true} duration={500} className='name-effect'>
					Elias
				</Link>
			</div>

			<ul className='hidden sm:flex'>
				<li className='shadow-links'>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='shadow-links'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='shadow-links'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='shadow-links'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='shadow-links'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			<div onClick={handleClick} className='z-10'>
				{!nav ? <FaBars size={25} className='sm:hidden' style={{cursor: 'pointer', }} /> : <FaTimes size={35} style={{cursor: 'pointer'}} />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'fixed top-0 left-0 w-full h-screen bg-[#10223c] flex flex-col md:flex-row justify-center items-center overflow-y-auto'
				}
			>
				<li className='py-6 text-4xl hover:underline'>
					<Link
						onClick={handleClick}
						to='home'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl hover:underline'>
					{' '}
					<Link
						onClick={handleClick}
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl hover:underline'>
					{' '}
					<Link
						onClick={handleClick}
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl hover:underline'>
					{' '}
					<Link
						onClick={handleClick}
						to='work'
						smooth={true}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl hover:underline'>
					{' '}
					<Link
						onClick={handleClick}
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>


		</div>
	)
}

export default Navbar
