import { getAllPosts, IPost } from '@util/api';
import { PostThumbnail } from '@components/PostThumbnail';

import styles from '@styles/pages/BlogPage.module.scss';
import { Layout } from '@components/Layout';
import { Content } from '@components/Content';
import Head from 'next/head';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
};
