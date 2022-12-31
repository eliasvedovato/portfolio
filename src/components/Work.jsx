import React from 'react'
import { data } from '../data/data.js'

const Work = () => {
	// projects file
	const project = data
	// setProject(data);

	return (
		<div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
			<div
				className='max-w-[1000px] mx-auto p-12 flex flex-col 
      justify-center w-full h-full'
			>
				<div className='pb-8'>
					<p
						className='text-4xl font-bold inline border-b-4 
          text-gray-300 border-pink-600'
					>
						Work
					</p>
					<p className='py-6'>Check out some of my recent work</p>
				</div>

				{/* container for projects */}
				<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4'>
					{/* Grid Item */}
					{project.map((item, index) => (
						<div className='flex flex-col items-center'>
							<div
								key={index}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								className='shadow-lg shadow-[#040c16] group container rounded-md 
            	flex justify-center text-center items-center mx-auto content-div 
							h-[100px] md:h-[150px] lg:h-[250px]'
							>
								{/* Hover effect for images */}
								<div className='opacity-0 group-hover:opacity-100 '>
									<span className='text-2xl font bold text-white tracking-wider '>
										{item.name}
									</span>
									<div className='pt-2 text-center '>
										{/* eslint-disable-next-line */}
										<a href={item.github} target='_blank'>
											<button
												className='text-center rounded-lg px-4 py-2 m-2
                     bg-white text-gray-700 font-bold text-lg'
											>
												Code
											</button>
										</a>
										{/* eslint-disable-next-line */}
										
									</div>
								</div>
							</div>
							<div>
								<a
									href={item.live}
									className=''
									target='_blank'
								>
									<button
										className='text-center rounded-lg px-4 py-2 m-2
                     bg-white text-gray-700 font-bold text-lg'
									>
										Live
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Work
