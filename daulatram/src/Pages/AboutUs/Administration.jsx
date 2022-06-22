import React from 'react'
import Admin_banner from '../../Components/Banners/Admin_banner';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Administration = () => {
    return (
        <>
            <div className=" flex flex-col">
                <div className="">
                    <Admin_banner/>
               
                </div>
                <div className="flex flex-row">
                    <div className="w-[350px]">
                        <Sidebar />
                    </div>
                    <div>
                        <div className="w-[1100px]">
                            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                                Administration
                            </h2>
                            {/* <div className="flex pr-4 pl-4 pb-2"></div> */}
                            <div
                                style={{
                                    backgroundImage: "url(/images/About/administration.jpg)",
                                    width: "50%",
                                    height: "500px",
                                }}
                                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5 ml-56 rounded-2xl border-2 border-black"
                            >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Administration;