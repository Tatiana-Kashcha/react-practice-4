export default function Form() {
  const handleSubmit = event => {
    event.preventDefault();
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
