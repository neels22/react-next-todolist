"use client";

import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");

  const [desc, setdesc] = useState("");

  const [maintask, setMaintask] = useState([]); // empty array

  const submithangler = (e) => {
    e.preventDefault(); //////// use to stop form reloading

    setMaintask([...maintask, { Title, desc }]); //// coppying previous tasks also

    console.log(maintask);

    setTitle("");
    setdesc("");
  };

  const deletehandler = (i)=>{

    let copytask = [...maintask]  /// copy all the elements of array

    copytask.splice(i,1)  /// used to cut the array or remove the element
    setMaintask(copytask)
    
  }

  let rendertask = <h2>No Task available</h2>;

  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between  mb-5">
          <div className="flex item-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.Title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={()=>{deletehandler(i)}} className="bg-red-400 text-white font-bold px-4 py-2 rounded">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>

      <form onSubmit={submithangler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Title of here"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Decription here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 ">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
