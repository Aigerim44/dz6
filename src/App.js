import logo from './logo.svg';
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [users, setUsers] = React.useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
    reset();
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleClearTable = () => {
    setUsers([]);
  };

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}

          <label>Username:</label>
          <input {...register("username", { required: true })} />
          {errors.username && <span>This field is required</span>}

          <label>Email:</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}

          <label>Phone:</label>
          <input type="tel" {...register("phone", { required: true })} />
          {errors.phone && <span>This field is required</span>}

          <label>Website:</label>
          <input {...register("website")} />

          <button type="submit">Create</button>
          <button type="button" onClick={handleClearTable}>Clear Table</button>
        </form>

        {users.length === 0 ? <p>Table is empty</p> :
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(index)}>Delete</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
        }
      </div>
  );
}

export default App;
