import React from "react";
import rhio from "./assets/rhio.jpeg"
import arhio from "./assets/avatarrhio.jpg"
import fitri from "./assets/fitri.jpeg"
import afitri from "./assets/avatarfitri.png"

function About() {
    return (
        <ul className='mt-5'>
            <div className='border border-yellow-500 py-2 px-2 mb-2 ml-6 mr-4 rounded-md'>
                <li className="ml-6 font-bold">Projek ini digunakan sebagai bahan presentasi pada Ezkoding.</li>
                <h1 className="bg-yellow-500 px-4 py-1 rounded-md text-yellow-600 mt-5 ml-6 text-2xl w-96 text-slate-950 font-bold">YANG BUAT :</h1>
                <li className="flex flex-no-wrap mt-6">
                    <div className="mr-2 ml-6 w-64 border border-teal-200">
                        <h1 className="font-bold mt-2 ml-2">RHIO EKA SAPUTRA</h1>
                        <img src={arhio} className="rounded w-56 h-64 mt-2 ml-2"></img>
                    </div>
                    <div className="mr border border-teal-200 w-64">
                        <h1 className="font-bold mt-2 ml-2 items-center object-center">FITRIYANTI HUTABARAT</h1>
                        <img src={afitri} className="rounded w-56 h-64 mt-2 ml-2"></img>
                    </div>
                </li>
            </div>
        </ul>
    )
}

export default About