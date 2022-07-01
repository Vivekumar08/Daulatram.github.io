import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../Context/AuthProvider";
import {useNavigate} from 'react-router-dom'


const Res_fac_data = (props) => {
  const [visible, setVisible] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  var path_pic = props.pic;
  var path2 = path_pic.replace(/\\/g, "/");
  var path = path2.slice(19)

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_research_fac/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data || response.status === 200) {
        // navigate('/research/research_facilities')
        setAuth(true)
        window.location.reload()
    } else {
      setErrMsg("Unable to Delete");
    }
  };

  return (
    <figure className="flex flex-col">
      <div className="flex flex-row w-full">
        <div
          className="flex items-center w-full py-4 cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          <h1 className="font-bold flex-shrink pr-4 text-2xl">
            {props.tittle}
          </h1>
          <div class="flex-grow h-px bg-gray-400"></div>
          {visible ? (
            <FontAwesomeIcon icon={faChevronUp} className="pl-4" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="pl-4" />
          )}
        </div>
        <span className="ml-6">
          {auth && (
            <>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  className="mt-6 cursor-pointer ml-auto mr-16 hover:text-red-500"
                  onClick={() => del(props.id)}
                ></FontAwesomeIcon>
              </div>
            </>
          )}
        </span>
      </div>
      {visible && <p>{props.para}</p>}
      {props.pic && visible && (
        <div
          style={{
            backgroundImage: `url(${path})`,
            width: "100%",
            height: "250px",
          }}
          className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
        >
          {" "}
        </div>
      )}
    </figure>
  );
};

export default Res_fac_data;
