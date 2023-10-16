import ExperiencesCard from './ExperiencesCard';

const Experiences = () => {
	return (
		<div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 py-10 2xl:px-96'>
			<ExperiencesCard language='HTML' year={3} />
			<ExperiencesCard language='CSS' year={3} />
			<ExperiencesCard language='Tailwind CSS' year={2} />
			<ExperiencesCard language='React' year={2} />
			<ExperiencesCard language='NodeJS' year={2} />
			<ExperiencesCard language='Typescript' year={2} />
			<ExperiencesCard language='Javascript' year={2} />
			<ExperiencesCard language='NextJS' year={1} />
			<ExperiencesCard language='MongoDB' year={2} />
		</div>
	);
};

export default Experiences;
