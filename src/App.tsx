import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className='px-10 md:px-20 lg:px-40 xl:px-60 bg-black divide-y-2 divide-white'>
			<Navbar />
			<Hero />
			<Experiences />
			{/* <p>educations</p>
			<p>Projects</p>
			<footer>footer</footer> */}
		</div>
	);
};

export default App;
