import { useState } from 'react'
import MyComponent from './MyComponent'

function App() {
  const [formdata, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <>
      <h1>Working with React</h1>
      <MyComponent />

      <p>
        Enter a name:
        <input
          type='text'
          name='name'
          onChange={handleChange}
        />
      </p>

      <p>
        Enter your Email Address:
        <input
          type='email'
          name='email'
          onChange={handleChange}
        />
      </p>

      <p>
        Enter your Address:
        <input
          type='text'
          name='address'
          onChange={handleChange}
        />
      </p>

      <p>
        Hi my name is {formdata.name} and I live at {formdata.address}. If you need to contact me, {formdata.email}.
      </p>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
