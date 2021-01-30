import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import styles from '../styles/CartPage.module.scss';
import Head from 'next/head';

export default function Cart() {
	return (
		<Layout>
			<Head>
				<title>Cart • Paro</title>
			</Head>
			<Content>
				<div className={styles.cart}>Cart</div>
			</Content>
		</Layout>
	);
}
