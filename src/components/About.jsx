import React from 'react'

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen bg-[#0f2749] text-gray-300'
		>
			<div className='flex flex-col justify-center items-center w-full h-full px-12'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<p className='text-2xl xl:text-4xl font-bold sm:text-right'>
							Hi. I'm Elias Vedovato, nice to meet you. I live in Argentina, Buenos Aires. 
							I'm a self-taught developer who likes to continusly learn different skills
						</p>
						<p className='xl:text-2xl'>
							I am passionate about building responsive web pages
							that improves the lives of those around me. I am actually 
							learning Typescript and state managers in React. 
							What would you do if
							you had a software expert available at your
							fingertips?
						</p>
				</div>
			</div>
		</div>
	)
}

export default About
