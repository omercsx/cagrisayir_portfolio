import CV from '../assets/cagrisayir_frontend_resume.pdf';
import portrait from '../assets/portrait2.png';

const Hero = () => {
	return (
		<div className='flex flex-col-reverse lg:flex-row lg:justify-around lg:gap-0 gap-10 items-center pb-10'>
			<div className='flex flex-col text-white lg:py-40 lg:gap-20 gap-10'>
				<div>
					<p className='text-xl md:text-4xl xl:text-5xl 2xl:text-9xl'>
						Nice to meet you!
					</p>
					<p className='text-xl md:text-4xl xl:text-5xl 2xl:text-9xl'>
						I'm <span className='border-b-4 border-lime-500'>Cagri Sayir</span>
						{'.'}
					</p>
				</div>
				<p className='text-lg md:text-xl xl:text-3xl 2xl:text-5xl'>
					Based in <span className='text-red-400'>Ontario/Canada</span>, I'm a
					frontend developer <br /> who loves to build web applications.
				</p>
				<a
					href={CV}
					download='FE-cagrisayir-resume'
					target='_blank'
					rel='noreferrer'
				>
					<button className='border-b-2 font-medium border-lime-500 hover:text-lime-500 text-center text-base md:text-lg lg:text-xl w-max'>
						Download my CV here!
					</button>
				</a>
			</div>
			<img
				src={portrait}
				alt='portrait of mine'
				className='h-auto w-auto md:h-60 md:w-60 lg:h-72 lg:w-84 xl:h-96 xl:w-96'
			/>
		</div>
	);
};

export default Hero;
