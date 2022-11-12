import React, { Fragment, useEffect, useState } from "react";
import { getArgonautes } from "./ArgonauteData";

const ReadMember = () => {
  const [argonautes, setArgonautes] = useState([]);
  useEffect(() => {
    async function getArgonautesLoad() {
      const argonautes = await getArgonautes();
      setArgonautes(argonautes);
    }
    getArgonautesLoad();
  }, []);

  // const argonautes = [
  //   { name: "Hello" },
  //   { name: "yaz" },
  //   { name: "Gilou" },
  //   { name: "Joao" },
  //   { name: "Nelia" },
  // ];
  return (
    <div>
      <div className="columns is-multiline">
        {argonautes.argonautes?.map((argonaute, index) => (
          <div className="column is-3" key={index}>
            <h3 className="title has-text-centered is-size-4">
              {argonaute.name}
            </h3>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};
export default ReadMember;
