# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

======================================

# React Hooks

* Hooks in React are a feature that allow you to use state and other React features in functional components without writing a class. Before hooks, state management and other React features were primarily available in class components. Hooks provide a way to reuse stateful logic and side effects in functional components, making them more powerful and expressive.

## Here are some of the most commonly used React hooks:
1. useState
2. useEffect
3. useContext
4. useReducer

### useState
* This hook allows you to add state to your functional components. It takes an initial state value and returns the current state and a function to update it.
```js
function App() { 
  const [email,setEmail] = useState("");

  const [username,setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <div className="App">
      <form>
        <h1>User Form</h1>
        <label htmlFor='email'>Email: </label>
        <input type='text' id='email' name='email' value={email} onChange={handleEmailChange}/>
        <label htmlFor='username'>Name: </label>
        <input type='text' id='username' name='username' value={username} onChange={handleNameChange}/>
      </form>
    </div>
  );
```

### useEffect
*  useEffect allows you to perform side effects in your components. You can use it to handle things like data fetching, DOM manipulation, and more. It takes a function and an optional array of dependencies as arguments.

1. Directly using the useEffect - there is no condition so, this will run continuously like a loop
```js
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
  });
```

2. Using useEffect with a empty array at the end - The empty dependency array means this effect runs only once
```js
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
  }, []); // The empty dependency array means this effect runs only once,
```

3. Using useEffect with a non empty array - // The non empty array means this effect runs when every the state of the array element changes
```js
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
  }, [userId]); // The non empty array means this effect runs when every the state of the array element changes
```

* We can use a cleanup function when the component is unmounted or when the dependencies array (the second argument to useEffect, which is empty [] in your case) changes. Its purpose is to clean up any resources or effects created by the effect function.
```js
useEffect(() => {
  document.addEventListener('mousemove', mouseMoveHandler);

  return () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
  };
});
```

### Custom Hooks
* Custom hooks in React are JavaScript functions that follow the naming convention of starting with "use" and allow you to reuse stateful logic across different components. Custom hooks are a powerful way to extract and share component logic, making your code more modular and maintainable.
```js
import React, { useState} from 'react';

function useFormInput(initialValue) { 
    // Custom Hook for userFormInput
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange,
    };
}

function SignUpform() {
    const email = useFormInput("")
    const name = useFormInput("")
    const password = useFormInput("")

  return (
    <div>
        <label htmlFor='email'>Email: </label>
        <input id='email' className='email' name='email' {... email}/>
        <label htmlFor='name'>Name:</label>
        <input id='name' className='name' name='name' {... name}/>
        <label htmlFor='name'>Password:</label>
        <input type='password' id='password' className='password' name='password' {... password}/>

        <ul>
            <li>Email: {email.value}</li>
            <li>Name: {name.value}</li>
            <li>Password: {password.value}</li>
        </ul>
    </div>
  );
}

export default SignUpform;
```