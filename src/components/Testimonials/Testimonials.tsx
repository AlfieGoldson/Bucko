import styles from './Testimonials.module.scss';
import { ITestimonial } from '@lib/api/types';
import { RichText } from 'prismic-reactjs';

export const Testimonial = ({ name, content, date, picture }: ITestimonial) => {
	return (
		<div className={styles.testimonial}>
			<RichText render={content} />
			<p className={styles.meta}>
				<img className={styles.picture} src={picture} alt={name} />
				{name}
			</p>
		</div>
	);
};

interface Props {
	testimonials: ITestimonial[];
}

export const Testimonials = ({ testimonials }: Props) => {
	return (
		<div className={styles.testimonials}>
			{testimonials.map((testimonial) => (
				<Testimonial {...testimonial} />
			))}
		</div>
	);
};
