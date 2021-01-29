import styles from '../styles/PostThumbnail.module.scss';
import Link from 'next/link';
import { IPost } from '../util/api';

interface Props {
	post: IPost;
}

export function PostThumbnail({ post }: Props) {
	return (
		<div className={styles.thumbnail}>
			<Link href={`/blog/${post.slug}`}>
				<a>{post.title}</a>
			</Link>
		</div>
	);
}
