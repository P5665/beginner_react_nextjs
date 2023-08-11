import Layout from '../../components/layout';
//https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
export default function Post() {
	return <Layout>...</Layout>;
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	return {
		paths: [],
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	return {
		props: {
			data: null,
		},
	};
}
