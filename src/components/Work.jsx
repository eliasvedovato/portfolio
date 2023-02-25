import React from 'react'
import { data } from '../data/data.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

const Work = () => {
	// projects file
	const project = data

	return (
		<div name='work' className='w-full h-screen text-gray-300 bg-[#0f2749]'>
			<div
				className='max-w-[1000px] mx-auto p-12 flex flex-col 
      	justify-center w-full h-full'
			>
				<div>
					<p
						className='text-4xl font-bold inline border-b-4 
          text-gray-300 border-pink-600'
					>
						Work
					</p>
					<p className='py-6'>Check out some of my recent works</p>
				</div>

				{/* container for projects */}
				<Swiper
					direction={'vertical'}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className='w-full h-[450px] '
				>
					{/* Grid Item */}
					{project.map((item, index) => (
							<SwiperSlide
								key={index}
								style={{backgroundImage: `url(${item.image})`}}
								className='rounded-lg flex justify-center content-div'
								>
								{/* Hover effect for images */}
								{/* <div className='opacity-0 group-hover:opacity-100'>
									<span className='text-2xl font bold text-white tracking-wider'>
										{item.name}
									</span>
								</div> */}

								<div className='text-center flex justify-center absolute bottom-[15px]'>
									{/* eslint-disable-next-line */}
									<a href={item.github} target='_blank'>
										<button
											className='text-center rounded-lg px-4 py-2 m-2
                     bg-gray-600 hover:bg-gray-400 text-white font-bold text-lg'
										>
											Github
										</button>
									</a>
									{/* eslint-disable-next-line */}
									<a
										href={item.live}
										className=''
										target='_blank'
									>
										<button
											className='text-center rounded-lg px-4 py-2 m-2
                    bg-blue-600 hover:bg-blue-400 text-white font-bold text-lg'
										>
											Live
										</button>
									</a>
								</div>
							</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Work
