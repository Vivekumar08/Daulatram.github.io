import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Research_data = (props ) => {
  const [visible, setVisible] = useState(false);

  return (
    <figure className="flex flex-col">
      <div
        className="flex items-center py-4 cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <h1 className="font-bold flex-shrink pr-4 text-2xl">{props.tittle}</h1>
        <div class="flex-grow h-px bg-gray-400"></div>
        {visible ? (
          <FontAwesomeIcon icon={faChevronDown} className="pl-4" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="pl-4" />
        )}
      </div>
      {visible && <p>{props.para}</p> }
      {props.pic && visible && <div
                style={{
                  backgroundImage: `url(${props.pic})`,
                  width: "100%",
                  height: "250px",
                }}
                className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              > </div>}
    </figure>
  );
};

export default Research_data;
