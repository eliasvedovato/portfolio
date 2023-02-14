import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Me from '../assets/me/elias.jpg'

const Home = () => {
	return (
		<div name='home' className='bg-[#0a192f] h-screen'>
			<div
				className='mx-auto px-12 lg:px-40 flex flex-col 
      		justify-center items-center h-full text-white pt-16'
			>
				<h4 className='text-pink-600 font-bold z-10'>Hi, my name is</h4>
				<h1 className='text-4xl sm:text-7xl font-bold text-blue-700 z-10'>
					Elias Vedovato
				</h1>
				<h2 className='text-5xl font-bold text-center text-[#8892b0] z-10'>
					I'm a full-stack developer
				</h2>
				<p className='text-[#8892b0] text-center py-4 z-10'>
					Currently, I'm focused on building resposive and exceptional
					web applications
				</p>

				{/* social icons */}
				<div className='mt-10'>
					<ul className='flex flex-row gap-10 md:flex-row-reverse'>
						<li className='h-[60px] w-[60px] flex justify-between items-center bg-blue-600 hover:bg-blue-800 rounded-full'>
							<a
								className='text-gray-300'
								href='https://www.linkedin.com/in/elias-vedovato-3a35277a/'
								// eslint-disable-next-line
								target='_blank'
								// eslint-disable-next-line
							>
								<FaLinkedin size={30} />
							</a>
						</li>
						<li className=' h-[60px] w-[60px] flex justify-between items-center bg-[#333333] hover:bg-[#222] rounded-full'>
							<a
								className='text-gray-300'
								href='https://github.com/eliasvedovato'
								// eslint-disable-next-line
								target='_blank'
								// eslint-disable-next-line
							>
								<FaGithub size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<img
				className='absolute md:visible max-w-[100%] rounded-[50%] h-[200px] md:h-[250px] lg:h-[300px] 
					xl:right-[25%] lg:right-[25%] md:right-[20%] sm:right-[15%] right-[10%] top-[15%] 
					md:top-[15%] shadow-picture'
				src={Me}
				alt=''
			/>
		</div>
	)
}

export default Home
