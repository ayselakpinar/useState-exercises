import { useState } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [h1Text, setH1Text] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setH1Text(`First Name: ${fname} Last Name: ${lname} Email: ${email}`);
    setFname("");
    setLname("");
    setEmail("");
   
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" value={fname}  onChange={(e) => setFname(e.target.value)}></input>
        <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)}></input>
        <input type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
      <h1>{h1Text}</h1>
    </>
  );
}
export default Form;
