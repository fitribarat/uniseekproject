import React from "react";

function UniList(props) {
    return (
        // <ul className='border border-yellow-500 py-2 px-2 mb-2 ml-6 mr-4 rounded-md'>
        //     {
        //     props.items.map((item) => {
        //         return (
        //             <>
        //             <li className="ml-6 font-bold" key={item.id}>{item.name}</li>
        //             {/* <li className="flex flex-no-wrap">
        //                 <div className="mr-2 ml-6 w-72">{item.country}</div>
        //                 <div className="mr">{item.domains}</div>
        //             </li> */}
        //             </>
        //         )
        //     })
        //     }
            
        // </ul>
        <ul className='mt'>
        {
        props.items.map((item) => {
          return (
            <div className='border border-yellow-500 py-2 px-2 mb-2 ml-6 mr-4 rounded-md'>
                <li className="ml-6 font-bold" key={item.id}>{item.name}</li>
                <li className="flex flex-no-wrap">
                    <div className="mr-2 ml-6 w-1/2">{item.country}</div>
                    <div className="mr">{item.domains}</div>
                </li>
            </div>
         ) })}
      </ul>
    )
}

export default UniList