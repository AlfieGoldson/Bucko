import styles from './ServiceCardGrid.module.scss';
import { Props as Service, ServiceCard } from './ServiceCard';

interface Props {
    services: Service[];
}

export const ServiceCardGrid = ({ services }: Props): JSX.Element => {
    return (
        <div className={styles.cardGrid}>
            {services.map((service, i) => (
                <ServiceCard {...service} key={i} />
            ))}
        </div>
    );
};
