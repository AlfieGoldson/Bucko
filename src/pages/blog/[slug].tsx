import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts, IPost } from '../../util/api';
import markdownToHtml from '../../util/markdownToHtml';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import { ParsedUrlQuery } from 'querystring';
import { motion } from 'framer-motion';

interface Props {
	post: IPost;
}

interface StaticParams extends ParsedUrlQuery {
	slug: string;
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
					<motion.h1 layoutId={`postTitle_${post.slug}`}>
						{post.title}
					</motion.h1>
					<motion.div
						dangerouslySetInnerHTML={{ __html: post.content }}
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					/>
				</article>
			</Content>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<Props, StaticParams> = async ({
	params,
}) => {
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
};

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
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
};
