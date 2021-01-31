import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export interface IPostMetadata {
	title: string;
	excerpt: string;
	coverImage: string;
	author: { name: string; picture: string };
	date: number;
	ogImage: { url: string };
	type: 'Article' | 'Artwork';
}

export interface IPost extends IPostMetadata {
	slug: string;
	content: string;
}

export function getPostBySlug(slug: string): IPost {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = (matter(fileContents) as unknown) as {
		data: IPostMetadata;
		content: string;
	};

	return {
		...data,
		slug: realSlug,
		content,
	};
}

export function getAllPosts() {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
