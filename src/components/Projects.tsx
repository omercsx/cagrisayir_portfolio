import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<div className='flex flex-col items-center lg:items-start pb-20'>
			<h1 className='my-10 text-white font-bold text-4xl'>Projects</h1>
			<div className='flex flex-col lg:flex-row md:flex-wrap gap-10 justify-start items-center'>
				<ProjectCard
					name='Project 1'
					image='https://via.placeholder.com/150'
					description='This is a project'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
				<ProjectCard
					name='Project 2'
					image='https://via.placeholder.com/150'
					description='This is a project2'
					link='https://google.com'
				/>
			</div>
		</div>
	);
};

export default Projects;
