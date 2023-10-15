import CV from '../cagrisayir_frontend_resume.pdf';
const Hero = () => {
	return (
		<div className='flex flex-col text-white py-40 gap-20'>
			<div>
				<p className='text-9xl'>Nice to meet you!</p>
				<p className='text-9xl'>
					I'm{' '}
					<span className='border-b border-b-4 border-lime-500'>
						Cagri Sayir
					</span>
					{'.'}
				</p>
			</div>
			<p className='text-5xl'>
				Based in <span className='text-red-400'>Ontario/Canada</span>, I'm a
				frontend developer <br /> who loves to build web applications.
			</p>
			<a
				href={CV}
				download='FE-cagrisayir-resume'
				target='_blank'
				rel='noreferrer'
			>
				<button className='border-b border-b-2 font-medium border-lime-500 text-center text-xl w-max'>
					Download my CV here!
				</button>
			</a>
		</div>
	);
};

export default Hero;
