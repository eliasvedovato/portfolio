import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Me from '../assets/me/elias.jpg'

const Home = () => {
	return (
		<div name='home' className='bg-[#0a192f] h-screen'>
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

				{/* social icons */}
				<div className='mt-10'>
					<ul className='flex flex-row justify-around'>
						<li className='h-[60px] w-[60px] flex justify-between items-center bg-blue-600 hover:bg-blue-800 rounded-full'>
							<a
								className='text-gray-300'
								href='https://www.linkedin.com/in/elias-vedovato-3a35277a/'
								target='_blank'
							>
								<FaLinkedin size={30} />
							</a>
						</li>
						<li className=' h-[60px] w-[60px] flex justify-between items-center bg-[#333333] hover:bg-[#222] rounded-full'>
							<a
								className='text-gray-300'
								href='https://github.com/eliasvedovato'
								target='_blank'
							>
								<FaGithub size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<img
				className='absolute md:visible max-w-[100%] rounded-[50%] h-[200px] md:h-[250px] lg:h-[300px] 
					xl:right-[25%] lg:right-[15%] md:right-[8%] top-[10%] right-[5%] shadow-picture'
				src={Me}
				alt=''
			/>
		</div>
	)
}

export default Home
