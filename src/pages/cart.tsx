import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import styles from '@styles/pages/CartPage.module.scss';
import Head from 'next/head';

export default function CartPage(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>Panier • Bucko</title>
            </Head>
            <Content>
                <div className={styles.cart}>Cart</div>
            </Content>
        </Layout>
    );
}
