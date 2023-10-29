import ProjectCard from './ProjectCard';
import gamehub from '../assets/gamehub.jpeg';
import qrcode from '../assets/qrcode.png';

const Projects = () => {
	return (
		<div className='flex flex-col items-center lg:items-start pb-20'>
			<h1 className='my-10 text-white font-bold text-4xl'>Projects</h1>
			<div className='flex flex-col lg:flex-row md:flex-wrap gap-10 justify-start items-center'>
				<ProjectCard
					name='Game Hub'
					image={gamehub}
					description='Game Hub Game finder project'
					link='https://gamehub.cagrisayir.dev'
				/>
				<ProjectCard
					name='QR Code Component'
					image={qrcode}
					description='Basic QR Code Component'
					link='https://qr.cagrisayir.dev'
				/>
				<ProjectCard
					name='Coin Wallet'
					image='https://via.placeholder.com/150'
					description='Coin Prices Tracker Project'
					link='https://google.com'
				/>
			</div>
		</div>
	);
};

export default Projects;
