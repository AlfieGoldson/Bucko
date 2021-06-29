import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const workDirectory = join(process.cwd(), '_work');

export const getWorkSlugs = () => fs.readdirSync(workDirectory);

export interface IWorkMetadata {
	title: string;
	excerpt: string;
	coverImage: string;
	author: { name: string; picture: string };
	date: number;
	ogImage: { url: string };
	type: 'Article' | 'Artwork' | 'Logo' | 'TwitchEmote';
}

export interface IWork extends IWorkMetadata {
	slug: string;
	content: string;
}

export const getWorkBySlug = (slug: string): IWork => {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(workDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents) as unknown as {
		data: IWorkMetadata;
		content: string;
	};

	return {
		...data,
		slug: realSlug,
		content,
	};
};

export const getAllWork = () => {
	const slugs = getWorkSlugs();
	const posts = slugs
		.map((slug) => getWorkBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
};
