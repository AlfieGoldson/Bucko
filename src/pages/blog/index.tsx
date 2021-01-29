import { getAllPosts, IPost } from '../../util/api';
import { PostThumbnail } from '../../components/PostThumbnail';

import styles from '../../styles/BlogPage.module.scss';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';

interface Props {
	posts: IPost[];
}

export default function Blog({ posts }: Props) {
	return (
		<Layout>
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
