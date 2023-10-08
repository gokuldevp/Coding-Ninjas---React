import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [userId, setUserId] = useState(["1"]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        // Check if fetchedData is an array before setting it into the state
        console.log(data)
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [userId]); // The empty dependency array means this effect runs only once,

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  })

  function mouseMoveHandler(event) {
    console.log(event.clientX);
  }

  return (
    <div>
      <button onClick={() => setUserId(`${parseInt(userId)+1}`)}>
        Set Next User
      </button>

        {data.map((user) => ( <p>{user.title}</p>))}
    </div>
  );
}

export default UseEffect;
