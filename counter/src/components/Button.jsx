function Button({ loggedInText, setLoggedInText }) {
  function handleClick() {
    if (loggedInText === "Logged In") {
      setLoggedInText("Logged Out");
    } else {
      setLoggedInText("Logged In");
    }
  }

  return <button onClick={handleClick}>Toggle</button>;
}
export default Button;
