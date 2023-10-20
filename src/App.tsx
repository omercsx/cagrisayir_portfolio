import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {
	return (
		<div className='h-full px-10 md:px-20 lg:px-40 xl:px-60 bg-black divide-y-2 divide-white'>
			<Navbar />
			<Hero />
			<Experiences />
			<Projects />
			{/* <p>educations</p>
			<p>Projects</p>
			<footer>footer</footer> */}
		</div>
	);
};

export default App;
