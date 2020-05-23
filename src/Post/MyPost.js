import React, {useState,useEffect} from 'react';

const Mypost = props => {

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
   
  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://bizworldbd.com/wp-json/wp/v2/posts/85")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
		  console.log(data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    
	return (
	
	<div>
	<h1>Hello {items.id}</h1>
		
	</div> 
    
    );
  }
}

export default Mypost
