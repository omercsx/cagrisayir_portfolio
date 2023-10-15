import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className='px-60 bg-black h-screen w-screen'>
			<Navbar />
			<Hero />
			<p>download cv</p>
			<p>experiences</p>
			<p>educations</p>
			<p>Projects</p>
			<footer>footer</footer>
		</div>
	);
};

export default App;
