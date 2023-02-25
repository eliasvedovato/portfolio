import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Next from '../assets/next.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Redux from '../assets/redux.png'
import Firebase from '../assets/firebase.png'
import Sass from '../assets/sass.png'
import Typescript from '../assets/typescript.svg'
import MongoDB from '../assets/MongoDB.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Skills = () => {
	return (
		<div
			name='skills'
			className='w-full h-screen bg-[#132d54] text-gray-300'
			style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 5%, 100% 95%, 70% 100%, 30% 100%, 0 95%, 0 5%)'}}
		>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-12 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
						Skills
					</p>
					<p className='py-4'>
						These are the technologies I've worked with
					</p>
				</div>

				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={false}
					slidesPerView={3}
					coverflowEffect={{
						rotate: 30,
						stretch: 20,
						depth: 0,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className='w-full h-[205px] mt-10 text-center select-none '
				>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={HTML}
							alt='HTML icon'
						/>
						<p className='my-4'>HTML</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={CSS}
							alt='HTML icon'
						/>
						<p className='my-4'>CSS</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto rounded-[50%]'
							src={Sass}
							alt='HTML icon'
						/>
						<p className='my-4'>SASS</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={JavaScript}
							alt='HTML icon'
						/>
						<p className='my-4'>JAVASCRIPT</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={Node}
							alt='HTML icon'
						/>
						<p className='my-4'>NODE JS</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={GitHub}
							alt='HTML icon'
						/>
						<p className='my-4'>GITHUB</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={ReactImg}
							alt='HTML icon'
						/>
						<p className='my-4'>REACT</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={Tailwind}
							alt='HTML icon'
						/>
						<p className='my-4'>TAILWIND</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={Next}
							alt='HTML icon'
						/>
						<p className='my-4'>NEXT JS</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={Redux}
							alt='HTML icon'
						/>
						<p className='my-4'>REDUX</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto'
							src={Firebase}
							alt='HTML icon'
						/>
						<p className='my-4'>FIREBASE</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto rounded-[50%]'
							src={Typescript}
							alt='HTML icon'
						/>
						<p className='my-4'>TYPESCRIPT</p>
					</SwiperSlide>
					<SwiperSlide className='shadow-md shadow-[#040c16] pt-10'>
						<img
							className='w-20 mx-auto bg-white rounded-[50%]'
							src={MongoDB}
							alt='HTML icon'
						/>
						<p className='my-4'>MONGODB</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Skills