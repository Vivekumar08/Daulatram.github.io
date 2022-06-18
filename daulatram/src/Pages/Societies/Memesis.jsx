import React from "react";
import Societies_side from "../../Components/Sidebar/Socieities_side";

const Memesis = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Societies{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">Societies</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px] mb-2">
          <Societies_side />
        </div>
        <div className="w-[1100px]">
          <div className="flex justify-center items-center flex-col">
            <div
              style={{
                backgroundImage: "url(/images/Socieities/logo_memesis.JPG)",
                width: "200px",
                height: "200px",
              }}
              className="bg-center bg-no-repeat mt-[3%] mb-5 bg-contain h-10 mr-4 rounded-2xl border-2 border-black"
            ></div>
            <div>
              <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-center items-center ">
                Memesis-The Theatre Society of Daulat Ram College
              </h2>
            </div>
          </div>

          <div className="text-justify p-3 m-2">
            <div
              style={{
                backgroundImage:
                  "url(/images/Socieities/soc_image_memesis.JPG)",
                width: "100%",
                height: "500px",
              }}
              className="bg-cover bg-no-repeat bg-center mb-5 rounded-lg border-2  mt-4 border-black"
            ></div>
            <p>
              <strong>
                {" "}
                𝐌𝐞𝐦𝐞𝐬𝐢𝐬- 𝐓𝐡𝐞 𝐓𝐡𝐞𝐚𝐭𝐫𝐞 𝐒𝐨𝐜𝐢𝐞𝐭𝐲 𝐨𝐟 𝐃𝐚𝐮𝐥𝐚𝐭 𝐑𝐚𝐦 𝐂𝐨𝐥𝐥𝐞𝐠𝐞
              </strong>{" "}
              has over years, nurtured the core values of theatre through its
              Stage and Street Plays. The "Neele-kurte" has always been our
              discrete identity which has left its footprint on almost every
              nukkad of Delhi-NCR.
            </p>
            <br />
            <p>
              Apart from this, Memesis hosts its{" "}
              <strong> 𝐀𝐧𝐧𝐮𝐚𝐥 𝐓𝐡𝐞𝐚𝐭𝐫𝐞 𝐅𝐞𝐬𝐭𝐢𝐯𝐚𝐥-𝐀𝐝𝐚𝐤𝐚𝐫𝐢</strong>, bringing people
              from various theatre societies together who perform on the college
              campus.
            </p>
          </div>
          <div className="ml-4">
            <span className="font-extrabold text-xl">Post holders:</span>
            <ul className="ml-5 list-disc">
              <li className="">
                <span className="font-semibold">President-</span> Bhawana Gaur
              </li>
              <li className="">
                <span className="font-semibold">Vice President-</span> Mahika
                Ajaideep
              </li>
              <li className="">
                <span className="font-semibold">Treasure-</span> Priyanka
              </li>
              <li className="">
                <span className="font-semibold">Coordinator-</span> Harshika
                Ranglani
              </li>
              <li className="">
                <span className="font-semibold">Co-coordinator-</span> Dimple
              </li>
              <li className="">
                <span className="font-semibold">Convenor-</span> Dr. Sharda
                Dautam
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memesis;
