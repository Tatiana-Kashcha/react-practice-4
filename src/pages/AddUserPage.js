// import { useDispatch } from 'react-redux';

export default function AddUserPage() {
  // const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // const newUser = {
    //   name: event.target.elements.name.value,
    //   email: event.target.elements.email.value,
    //   phone: event.target.elements.phone.value,
    //   avatar: event.target.elements.avatar.value,
    // };

    // dispatch(addUser(newUser));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Phone
        <input type="text" name="phone" />
      </label>

      <label>
        Phone
        <input type="url" name="avatar" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
