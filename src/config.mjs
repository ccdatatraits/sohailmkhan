export const SITE = {
	name: 'Sohail M. Khan',

	origin: 'https://sohailmkhan.netlify.app',
	basePathname: '/',

	title: 'Sohail M. Khan — Portfolio',
	description: '🚀 Profile Repository built on top of Astro + Tailwind CSS',

	googleAnalyticsId: 'G-HZC7MB7H9Z', // or false,
	googleSiteVerificationId: 'phie4sohShe-ahv7ahKe1thoo2le_Ohxooy1eiGhaem', // or false,
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: 'blog', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
