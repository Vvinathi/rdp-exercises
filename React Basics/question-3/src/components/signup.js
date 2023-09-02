import React, { useState } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`User Details:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}`);
  };

  return (
    <body className='flex justify-center items-center'>
    <div className=" bg-purple-200 w-[500px] p-5 border rounded">
      <h2 className="text-2xl font-bold mb-4 ml-[170px]">Sign Up</h2>
      <form>
        <div className="fname  mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
            First Name:
          </label>
          <input
            className=" mt-1 p-2 border border-gray-300 rounded w-full"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className=" lname mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className=" email mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="p-3 bg-purple-500 text-white rounded hover:bg-purple-700"
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
    </body>
  );
}

export default SignUp;
