import React from 'react';
import fs from 'fs';

const Post = (slug) => {
	return <div>The pages slug is :{slug}</div>;
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync('posts');
	console.log('files: ', files);

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async () => {
	return {
		props: {
			slug
		}
	};
};

export default Post;
