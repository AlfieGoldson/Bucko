import { useRef, MouseEvent as ReactMouseEvent, useState } from 'react';
import styles from './LogoGrid.module.scss';

interface ILogo {
	title: string;
	image: string;
}

const LogoCard = ({ title, image }: ILogo) => {
	return (
		<div className={styles.card}>
			<img className={styles.thumb} src={image} alt={title} />
		</div>
	);
};

export const LogoCardGroup = ({ cards }: { cards: ILogo[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [maskPosition, setMaskPosition] = useState({ x: 50, y: 50 });

	const handleMouseMove = ({
		pageX,
		pageY,
	}: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref.current) return;

		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
			ref.current;

		setMaskPosition({
			x: (1 - (pageX - offsetLeft) / offsetWidth) * 100,
			y: (1 - (pageY - offsetTop) / offsetHeight) * 100,
		});
	};

	return (
		<div
			className={styles.cardGroup}
			ref={ref}
			onMouseMove={handleMouseMove}
			style={{
				WebkitMaskPosition: `${maskPosition.x}% ${maskPosition.y}%`,
				transform: `perspective(120px) rotateY(-4deg) translateX(${maskPosition.x}px)`,
			}}
		>
			{cards.map((card, i) => (
				<LogoCard {...card} key={i} />
			))}
		</div>
	);
};

interface Props {
	title: string | JSX.Element;
	cards: ILogo[];
}

export const LogoGrid = ({ title, cards }: Props) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.groupTitle}>{title}</h1>
			<LogoCardGroup cards={cards} />
		</div>
	);
};
