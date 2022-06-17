import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
import "./fac.css";

function Faculty() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="ml-3 mt-12">
          <div class="py-4">
            <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
              <div>
                <div class="w-full image-cover rounded-t-md">
                </div>
                <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                  <span class="block text-lg text-gray-800 font-bold tracking-wide">
                    Book a flight
                  </span>
                  <span class="block text-gray-600 text-sm">
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis
                    ligula. Donec bibendum faucibus purus eget cursus. Proin
                    enim ante, scelerisque vel sem sit amet, ultrices mollis
                    risus. Praesent justo felis, ullamcorper a cursus sed,
                    condimentum at dui.
                  </span>
                </div>
              </div>
              <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                  Paris city of light
                </span>
                <div class="pt-8 text-center">
                  <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
