import { Landing } from '../components/Landing';
import Head from 'next/head';
import { Content } from '../components/Content';
import styles from '../styles/HomePage.module.scss';
import { Layout } from '../components/Layout';

export default function Home() {
	return (
		<>
			<Head>
				<title>Paro Studio</title>
			</Head>
			<Layout>
				<Landing />
				<div className={styles.lightAltBG}>
					<Content>
						<h2 id='Work'>Our Work.</h2>
					</Content>
				</div>
				<Content>
					<h2 id='About'>About Us.</h2>
					<div>about</div>
				</Content>
				<Content>
					<h2 id='Contact'>Have A Project?</h2>
					<div>Let's Talk.</div>
				</Content>
			</Layout>
		</>
	);
}
