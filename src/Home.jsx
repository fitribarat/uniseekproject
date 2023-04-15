import React from "react";
import UniList from "./components/UniList";
import { useState, useEffect } from "react";

function Home() {

    const [listUni, setListUni] = useState([])

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?country=indonesia").then((response) => {
            return response.json();
        }).then((data) => {
            setListUni(data);
        });
    }, []);

    return (
        <div className="flex relative mt-2 ml-2">
            <div className="w-96 h-screen border-2 border-teal-200 rounded-md">
                <h1 className="p-2 font-serif text-lg font-medium">Filter</h1>
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Bandung</label>
                </div>
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Jakarta</label>
                </div> 
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Yogyakarta</label>
                </div>     
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Medan</label>
                </div>    
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Surabaya</label>
                </div>    
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Makassar</label>
                </div>    
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Semarang</label>
                </div>    
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Lampung</label>
                </div>      
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Aceh</label>
                </div>          
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Bali</label>
                </div>  
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Padang</label>
                </div>  
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Jambi</label>
                </div>  
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Bengkulu</label>
                </div>  
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Kupang</label>
                </div>  
                <div className="flex items-center mb-4 ml-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-serif text-gray-900 dark:text-gray-300">Lombok</label>
                </div>  
            </div>
            <div className="w-full mr-3 ml-3 h-3/4 border-2 border-teal-200 rounded-md">
            <h1 className="p-2 ml-4 font-serif text-lg font-medium">List Universitas</h1>
            <UniList items={listUni} />
            </div>
            
        </div> 
    )
}

export default Home