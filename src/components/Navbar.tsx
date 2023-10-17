import { VscGithubInverted } from 'react-icons/vsc';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center text-white py-10 gap-3'>
			<div className='flex gap-1 items-center text-center'>
				<p className='text-2xl'>{'</>'}</p>
				<p className='text-2xl font-mono font-medium'>cagrisayir</p>
			</div>
			<div className='flex gap-5  items-center'>
				<a href='https://www.github.com/cagrisayir' target='_blank'>
					<VscGithubInverted className='text-2xl text-white' />
				</a>
				<a href='https://www.linkedin.com/in/cagrisayir' target='_blank'>
					<AiFillLinkedin className='text-3xl text-white' />
				</a>
				<a href='https://leetcode.com/cagrisayir/' target='_blank'>
					<SiLeetcode className='text-3xl text-white' />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
