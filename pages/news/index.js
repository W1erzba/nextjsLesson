// our-domain.com/news
import Link from 'next/link';

function NewsPage() {
	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href='/news/nextjs-is-a-great-framework'>
						NextJS Is A Great Framework
					</Link>
				</li>
				<li>Something Else</li>
			</ul>
		</>
	);
}

export default NewsPage;

/*
Not the best option to link to routed page. because it cause a little refresh as a default behaviour, loading a new page. 
It is better to use Link from next/link

	<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<a href='/news/nextjs-is-a-great-framework'>
						NextJS Is A Great Framework
					</a>
				</li>
				<li>Something Else</li>
			</ul>
		</>
*/
