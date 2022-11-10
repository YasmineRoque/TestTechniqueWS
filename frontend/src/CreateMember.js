import React from "react";
import { Fragment } from "react";

const CreateMember = () => {
  return (
    <Fragment>
      <div className="columns is-centered is-multiline mt-5">
        <div className="column is-3">
          <div className="field">
            <label className="label subtitle is-4 has-text-centered">
              Nom de l'Argonaute
            </label>
            <input
              className="input is-rounded is-medium is-danger"
              type="text"
              placeholder="Charalampos"
            />
            <div className="column">
              <button className="button is-medium is-rounded is-danger is-light">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CreateMember;
