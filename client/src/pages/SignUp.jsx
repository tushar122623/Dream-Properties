
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation: Ensure email ends with @gmail.com
    if (!formData.email.endsWith('@gmail.com')) {
      setError('Email must be a Gmail address (@gmail.com)');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
          type='text' 
          placeholder='Username' 
          className='border p-3 rounded-lg' 
          id='username' 
          value={formData.username}
          onChange={handleChange} 
        />

        {/* Contact number input */}
        <input 
          type='text' 
          placeholder='Contact number' 
          className='border p-3 rounded-lg' 
          id='contact' 
          value={formData.contact}
          onChange={handleChange} 
          maxLength={10}  // Restrict input to 10 characters max
          onInput={(e) => {
          // Allow only digits and limit the length to 10
         const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
         if (value.length <= 10) {
            handleChange(e); // Call your handleChange function
        }
    }}
        />

        <input 
          type='email' 
          placeholder='Email (must be @gmail.com)' 
          className='border p-3 rounded-lg' 
          id='email' 
          value={formData.email}
          onChange={handleChange} 
        />

        <input 
          type='password' 
          placeholder='Password' 
          className='border p-3 rounded-lg' 
          id='password' 
          value={formData.password}
          onChange={handleChange} 
        />

        <button 
          disabled={loading} 
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>

        {/* <OAuth /> */}
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
