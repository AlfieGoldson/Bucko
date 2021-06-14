import styles from './PostThumbnail.module.scss';
import Link from 'next/link';
import { IPost } from '@util/api';
import { motion } from 'framer-motion';

interface Props {
	post: IPost;
}

export function PostThumbnail({ post }: Props) {
	return (
		<div className={styles.thumbnail}>
			<Link href={`/blog/${post.slug}`}>
				<motion.a
					layoutId={`postTitle_${post.slug}`}
					className={styles.title}
				>
					{post.title}
				</motion.a>
			</Link>
		</div>
	);
}
