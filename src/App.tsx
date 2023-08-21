import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

function App() {
	const [count, setCount] = useState(0);
	const [posts, setPosts] = useState<Post[]>([]);

	// https://jsonplaceholder.typicode.com/posts

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setPosts(json.slice(0, 5)));
	}, []);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<div className='card'>
				<h2>Posts</h2>
				<ul className='post-list'>
					{posts.map((post) => (
						<li key={post.id} className='post'>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
