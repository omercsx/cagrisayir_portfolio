interface Props {
	name: string;
	image: string;
	description: string;
	link?: string;
}

const ProjectCard = ({ name, image, link, description }: Props) => {
	return (
		<div className='bg-gray-700 rounded-xl flex flex-col gap-5 text-center py-7 text-white min-w-[20rem]'>
			<p className='text-xl font-semibold text-emerald-100'>{name}</p>
			<img src={image} alt='Project image' className='h-48 lg:h-60' />
			<p className='font-light'>{description}</p>
			{link ? (
				<a
					href={link}
					target='_blank'
					className='hover:text-red-400 font-medium text-lg'
				>
					Click here to visit!
				</a>
			) : null}
		</div>
	);
};

export default ProjectCard;
