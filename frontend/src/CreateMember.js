import React from "react";
import { Fragment, useState } from "react";
import { addArgonaute } from "./ArgonauteData";

const CreateMember = () => {
  const [name, setName] = useState("");

  function handleCreateMember(event) {
    console.log("Name registered :", event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    addArgonaute(name).then((res) => {
      console.log(res);
      setName("");
    });
  }

  return (
    <Fragment>
      <div className="columns is-centered is-multiline mt-5">
        <div className="column is-3">
          <div className="field">
            <h2 className="label subtitle is-4 has-text-centered">
              Nom de l'Argonaute
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                className="input is-rounded is-medium is-danger is-mobile"
                type="text"
                placeholder="Charalampos"
                value={name}
                onChange={handleCreateMember}
              />

              <div className="column">
                <button
                  type="submit"
                  value="Envoyer"
                  className="button is-medium is-rounded is-danger is-light"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateMember;
