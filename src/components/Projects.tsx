import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<div>
			<p>Projects</p>
			<ProjectCard
				name='Project 1'
				image='https://via.placeholder.com/150'
				description='This is a project'
				link='https://google.com'
			/>
		</div>
	);
};

export default Projects;
