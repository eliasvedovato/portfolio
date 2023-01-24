import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	// toggle the value
	const handleClick = () => setNav(!nav)

	return (
		<div
			className='fixed w-full h-[80px] 
        flex justify-between items-center 
        px-4 bg-[#0a192f] text-gray-300'
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

			<div onClick={handleClick} className='sm:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
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

			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[70%] left-0'>
				<ul>
					<li
						className='w-[160px] h-[60px] flex justify-between items-center
					ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'
					>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.linkedin.com/in/elias-vedovato-3a35277a/'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li
						className='w-[160px] h-[60px] flex justify-between items-center
					ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'
					>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://github.com/eliasvedovato'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
