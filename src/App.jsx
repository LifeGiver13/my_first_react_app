
// function MyComponent() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>This is my first Component</p>
//     </div>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);
//   // const [name, setName] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [add, setAdd] = useState('')
//   const [formdata, setFormData] = useState({ name: '', email: '', address: '' })

//   return (
//     <>

//       <h1>Working with React</h1>
//       <MyComponent />
//       {/* create a form input to recieve users name */}
//       <p>Enter a name:  <input type='text' onChange={e => setName(e.target.value)} />
//       </p>
//       {/* Display Hello {usernaem} everything the for input is updated */}
//       <p>Enter your EmailAddress:  <input type='email' onChange={e => setEmail(e.target.value)} />
//       </p>
//       <p>Enter a your Address:  <input type='text' onChange={e => setAdd(e.target.value)} />
//       </p>
//       <p>Hi my name is {formdata.name} and i live at {formdata.address} if you need to contact me {formdata.email} </p>



//       <div className="card">

//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>


//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// function App() {
//   const [formdata, setFormData] = useState({ name: '', email: '', address: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   return (
//     <>
//       <h1>My Listings</h1>













//       {/* <MyComponent />

//       <p>
//         Enter a name:
//         <input
//           type='text'
//           name='name'
//           onChange={handleChange}
//         />
//       </p>

//       <p>
//         Enter your Email Address:
//         <input
//           type='email'
//           name='email'
//           onChange={handleChange}
//         />
//       </p>

//       <p>
//         Enter your Address:
//         <input
//           type='text'
//           name='address'
//           onChange={handleChange}
//         />
//       </p>

//       <p>
//         Hi my name is {formdata.name} and I live at {formdata.address}. If you need to contact me, {formdata.email}.
//       </p>

//       <div className="card">
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }

// export default App


// function Greetings(username) {
//   return <h2>Hello {username}</h2>
// }



// import { useState } from 'react'
// import MyComponent from './MyComponent'

// function App() {
//   const [formdata, setFormData] = useState({ name: '', email: '', address: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   return (
//     <>
//       <h1>Working with React</h1>
//       <MyComponent />

//       <p>
//         Enter a name:
//         <input
//           type='text'
//           name='name'
//           onChange={handleChange}
//         />
//       </p>

//       <p>
//         Enter your Email Address:
//         <input
//           type='email'
//           name='email'
//           onChange={handleChange}
//         />
//       </p>

//       <p>
//         Enter your Address:
//         <input
//           type='text'
//           name='address'
//           onChange={handleChange}
//         />
//       </p>


// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData(prev => ({
//     ...prev,
//     [name]: value
//   }));
// };

// const handleSubmit = () => {
//   const newItem = {
//     id: items.length + 1,
//     question: formdata.question,
//     answer: formdata.answer
//   };
//   setItems(prev => [...prev, newItem]);
//   setFormData({ question: '', answer: '' });
// };




// return (
//   <>
{/* <h1>Fill the following form to add a question.</h1>
      <p>
        Enter a question:
        <input
          type="text"
          name="question"
          value={formdata.question}
          onChange={handleChange}
        />
      </p>

      <p>
        Enter an answer:
        <input
          type="text"
          name="answer"
          value={formdata.answer}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>Add</button>
      </p> */}


import React, { useState } from 'react';
import './App.css';
import { CondensedListings } from './components/list';
import { useQuery } from '@tanstack/react-query';

export default function App() {
  const [shouldFetch, setShouldFetch] = useState(false);

  const fetchItems = async () => {
    const res = await fetch('/questions.json');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ['anime-questions'],
    queryFn: fetchItems,
    enabled: shouldFetch,
    refetchOnWindowFocus: false
  });


  return (
    <>
      <div className='body'>
        <h1>Anime Trivia</h1>

        {!shouldFetch && <p>No info available</p>}

        <button onClick={() => setShouldFetch(true)}>
          Load Trivia
        </button>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}

        {items.map((item) => (
          <div key={item.id}>
            <div className='item' >
              <CondensedListings item={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}