import parse from 'html-react-parser'
import { FC } from 'react'

interface IDescription {
	text: string;
	className?: string
}

const Description: FC<IDescription> = ({
	text,
	className = '',
}) => {
	return (
		<div
			className={`text-lg font-light text-white text-opacity-60 ${className}`}
		>
			<p>{parse(text)}</p>
		</div>
	)
}

export default Description
