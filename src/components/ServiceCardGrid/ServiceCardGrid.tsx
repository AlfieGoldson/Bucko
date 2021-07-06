import styles from './ServiceCardGrid.module.scss';
import { ServiceCard } from './ServiceCard';
import { IService } from '@lib/api/types';

interface Props {
    services: IService[];
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
