import { useState } from "react";

function User() {
  const initFormState = {
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
  };
  const [formState, setFormState] = useState(initFormState);
  const [errorState, setErrorState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "post",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.json();
        } else {
          setFormState(initFormState);
        }
      })
      .catch((err) => {
        err.then((errors) => {
          setErrorState(errors);
        });
      });
  };

  const handleInputChange = (e) => {
    const currentIdChange = e.target.id;
    const currentValueChange = e.target.value;
    setFormState({ ...formState, [currentIdChange]: currentValueChange });
  };
  console.info(errorState);
  return (
    <div>
      <h1>Ajouter un nouvelle utilisateur</h1>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div>
          <label htmlFor="firstname">Firstname *</label>
          <input
            id="firstname"
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={formState.firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname *</label>
          <input
            id="lastname"
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={formState.lastname}
          />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            onChange={(e) => handleInputChange(e)}
            value={formState.email}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={formState.bio}
          />
        </div>
        <input type="submit" value="envoyer" />
        {errorState.length > 0 &&
          errorState.map((error) => (
            <div key={error.field} className="error">
              {error.message}
            </div>
          ))}
      </form>
    </div>
  );
}

export default User;
