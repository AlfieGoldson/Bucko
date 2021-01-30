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
						<h2 id='work'>Our Work.</h2>
					</Content>
				</div>
				<Content>
					<h2 id='about'>About Us.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras viverra sit amet eros at vehicula. Aliquam finibus
						pretium cursus. Ut vulputate, ex ac maximus fermentum,
						lectus lacus porttitor orci, in feugiat urna dolor ac
						risus. Ut id quam nec nisi tristique faucibus quis
						mollis justo. Curabitur facilisis scelerisque posuere.
						Nullam aliquam, erat nec commodo consequat, elit dolor
						luctus ex, vel tempor lectus tellus sed diam. Fusce
						tincidunt neque orci, non efficitur enim rutrum eu. Cras
						ornare accumsan ipsum in porta.
					</p>
				</Content>
				<div className={styles.lightAltBG}>
					<Content>
						<h2 id='contact'>Have A Project?</h2>
						<div>Let's Talk.</div>
					</Content>
				</div>
			</Layout>
		</>
	);
}
