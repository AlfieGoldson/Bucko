import { getAllPosts, IPost } from '../../util/api';
import { PostThumbnail } from '../../components/PostThumbnail';

import styles from '../../styles/BlogPage.module.scss';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import Head from 'next/head';

interface Props {
	posts: IPost[];
}

export default function Blog({ posts }: Props) {
	return (
		<Layout>
			<Head>
				<title>Blog • Paro</title>
			</Head>
			<Content>
				<h2>Latest Blog Posts</h2>
				<div className={styles.postsContainer}>
					{posts.map((post) => (
						<PostThumbnail key={post.slug} post={post} />
					))}
				</div>
			</Content>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}
