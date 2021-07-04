import { Button } from '@components/Button';
import { IArtwork } from '@lib/api';
import { useRef, MouseEvent as ReactMouseEvent, useState } from 'react';
import styles from './LogoGrid.module.scss';

const LogoCard = ({ title, thumb }: IArtwork) => {
	return (
		<div className={styles.card}>
			<img className={styles.thumb} src={thumb} alt={title} />
		</div>
	);
};

export const LogoCardGroup = ({ logos }: { logos: IArtwork[] }) => {
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
			{logos.map((card, i) => (
				<LogoCard {...card} key={i} />
			))}
		</div>
	);
};

interface Props {
	title: string | JSX.Element;
	logos: IArtwork[];
	cta?: { href: string; title: string };
}

export const LogoGrid = ({ title, logos, cta }: Props) => {
	return (
		<div className={styles.wrapper} id='work'>
			<h1 className={styles.groupTitle}>{title}</h1>
			<LogoCardGroup logos={logos} />
			{cta && (
				<div className={styles.cta}>
					<Button {...cta} />
				</div>
			)}
		</div>
	);
};
