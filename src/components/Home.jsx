import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

import Me from '../assets/me/elias.jpg'

const Home = () => {
	return (
		<div name='home' className='bg-[#0a192f] w-full h-screen'>
			<div
				className='max-w-[1000px] mx-auto px-12 flex flex-col 
      		justify-center h-full text-white'
			>
				<p className='text-pink-600 font-bold'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
					Elias Vedovato
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm a full-stack developer
				</h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					Currently, I'm focused on building resposive and exceptional
					web applications
				</p>
				<div>
					<button
						className='text-white border-2 px-6 py-3 my-2 group
          		flex items-center hover:bg-pink-600 hover:border-pink-600'
					>
						View my projects
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3' />
						</span>
					</button>
				</div>
			</div>

			<img
				className='absolute rounded-[50%] h-[200px] md:h-[250px] lg:h-[300px] 
				xl:right-[25%] lg:right-[15%] md:right-[8%] top-[10%] right-[5%] shadow-picture'
				src={Me}
				alt='profile picture'
			/>
		</div>
	)
}

export default Home
