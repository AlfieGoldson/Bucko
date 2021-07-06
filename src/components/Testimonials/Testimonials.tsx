import styles from './Testimonials.module.scss';
import { ITestimonial } from '@lib/api/types';
import { RichText } from 'prismic-reactjs';

export const Testimonial = ({
    name,
    content,
    picture,
}: ITestimonial): JSX.Element => {
    return (
        <div className={styles.testimonial}>
            <RichText render={content} />
            <div className={styles.meta}>
                <img className={styles.picture} src={picture} alt={name} />
                {name}
            </div>
        </div>
    );
};

interface Props {
    testimonials: ITestimonial[];
}

export const Testimonials = ({ testimonials }: Props): JSX.Element => {
    return (
        <div className={styles.testimonials}>
            {testimonials.map((testimonial, i) => (
                <Testimonial {...testimonial} key={i} />
            ))}
        </div>
    );
};
