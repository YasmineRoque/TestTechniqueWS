import React from "react";
import { Fragment } from "react";

const ReadMember = () => {
  const argonautes = [
    { name: "Hello" },
    { name: "yaz" },
    { name: "Gilou" },
    { name: "Joao" },
    { name: "Nelia" },
  ];
  return (
    <Fragment>
      <div class="columns is-multiline">
        {argonautes.map((add) => {
          return (
            <div key={add} class="column is-3">
              <h3 className="title has-text-centered is-size-4">{add.name}</h3>
            </div>
          );
        })}
        ;
      </div>
    </Fragment>
  );
};
export default ReadMember;
