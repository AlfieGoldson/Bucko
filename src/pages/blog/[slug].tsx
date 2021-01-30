import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts, IPost } from '../../util/api';
import markdownToHtml from '../../util/markdownToHtml';
import { GetStaticPropsContext } from 'next';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';

interface Props {
	post: IPost;
}

export default function Post({ post }: Props) {
	const router = useRouter();

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return router.isFallback ? (
		'Loading…'
	) : (
		<Layout>
			<Content>
				<article className='mb-32'>
					<Head>
						<title>{post.title} • Paro</title>
						<meta property='og:image' content={post.ogImage.url} />
					</Head>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</article>
			</Content>
		</Layout>
	);
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext<{ slug: string }>) {
	const post = getPostBySlug(params.slug);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts();

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
