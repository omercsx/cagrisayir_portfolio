interface Props {
	name: string;
	image: string;
	description: string;
	link?: string;
}

const ProjectCard = ({ name, image, link, description }: Props) => {
	return (
		<div className='bg-gray-700 rounded-xl flex flex-col'>
			<p>{name}</p>
			<img src={image} alt='Project image' />
			<p>{description}</p>
			{link ? <a href={link}>Click here to visit!</a> : null}
		</div>
	);
};

export default ProjectCard;
