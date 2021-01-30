import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import styles from '../styles/CartPage.module.scss';

export default function Cart() {
	return (
		<Layout>
			<Content>
				<div className={styles.cart}>Cart</div>
			</Content>
		</Layout>
	);
}
