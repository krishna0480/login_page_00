import { useState } from 'react';
import { useRouter } from 'next/router';

interface User {
  email: string;
  username: string;
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the user already exists in the local storage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: User) => user.email === email || user.username === username);

    if (userExists) {
      // User already exists, display an error message
      setError('Email or username already taken');
    } else {
      // Create a new user and add it to the local storage
      const newUser: User = { email, username };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // User account created successfully, redirect to the home page
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">Sign Up</button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;


const keyToAdd = 'newKey';
const valueToAdd = 'newValue';
const emailToFind = 'johndoe@example.com'; // replace with the email of the user object to update

let users: User[] = JSON.parse(localStorage.getItem('users') || '[]'); // get the users array from localStorage
const userToUpdate = users.find((user) => user.email === emailToFind); // find the user object to update
if (userToUpdate) {
  userToUpdate[keyToAdd] = valueToAdd; // add the new key to the user object
  localStorage.setItem('users', JSON.stringify(users)); // save the updated users array to localStorage
}


import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  imagePath?: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const updateUserImagePath = (email: string, imagePath: string) => {
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, imagePath } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <AppContext.Provider value={{ users, updateUserImagePath }}>
      <HomePage />
    </AppContext.Provider>
  );
};

const HomePage = () => {
  const { updateUserImagePath } = React.useContext(AppContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imagePath = event.target?.result as string;
      const email = 'johndoe@example.com'; // Get the email from the form or other input
      updateUserImagePath(email, imagePath);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default App;