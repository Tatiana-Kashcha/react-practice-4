import { nanoid } from '@reduxjs/toolkit';
import { addUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      id: nanoid(),
      name: event.target.elements.name.value,
      age: event.target.elements.age.value,
    };

    dispatch(addUser(newUser));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Age
        <input type="text" name="age" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
