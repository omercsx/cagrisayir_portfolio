interface Props {
	language: string;
	year: number;
}

const ExperiencesCard = ({ language, year }: Props) => {
	return (
		<div className='flex flex-col text-white items-center gap-2 p-10'>
			<p className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-mono font-medium'>
				{language}
			</p>
			<p className='text-lg lg:text-xl font-mono'>{year} Years Experience</p>
		</div>
	);
};

export default ExperiencesCard;
