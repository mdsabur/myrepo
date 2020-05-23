import React from 'react';
import logo from './logo.svg';
import './App.css';

import Parser from 'html-react-parser';
import MyPost from './Post/MyPost'

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};


function App() {

   const res = useFetch("http://bizworldbd.com/wp-json/wp/v2/posts/85", {});
  if (!res.response) {
    return <div>Loading...</div>
  }
  const post_id = res.response.id
  const post_date = res.response.date
  const post_title =res.response.title
  const post_content =res.response.content
  
  console.log (post_content)
  return (
    <div className="App">
		<div> <h3>{post_id}</h3>
			<div>{post_date}</div>
			<div>{post_title.rendered}</div>
			<div>{Parser(post_content.rendered)}</div>
		</div>
    </div>
  );
}
export default App;
