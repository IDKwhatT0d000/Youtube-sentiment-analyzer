import React, { useState } from 'react'
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { TbAnalyzeFilled } from "react-icons/tb";
import {options,getComments} from '../utils/index.js'
import Stats from './Stats.jsx';
const Youtube = () => {
  const[ide,setIde]=useState("");
  const [comments,setComments]=useState([]);
  const [score,setScore]=useState(null);
  const [ready,setReady]=useState(false)
  const handlechange=(e)=>{
    setIde(e.target.value)
  }
  const handleclick=async ()=>{
    const opt = { ...options, params: { id: ide } };
    const response = await getComments(opt);
    setComments([])
    const commentsArray = response.data;
    const textArray = commentsArray.map(comment => comment.textDisplay);
    setComments(textArray);
  }
  const handleanalyze=async ()=>{
    const res=await axios.post("http://localhost:3000/reviews",{
      comments
    });
    console.log(res.data);
    setReady(true);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex">
        <input
          type="text"
          placeholder='enter id'
          value={ide}
          onChange={(e)=>handlechange(e)}
          className="p-5 w-[500px]"
        />
        <button
          className="flex justify-center items-center p-3 bg-blue-500 text-white text-xl ml-3 rounded-xl w-[80px] hover:bg-black hover:text-blue-500"
          onClick={handleclick}
        >
          <FaSearch />
        </button>
      </div>
      <div className="flex justify-center mt-3">
        <ul className="ml-5">
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
      <div className="flex-col justify-center mt-5">
        <button className="flex justify-center items-center p-3 bg-blue-500 text-white text-xl rounded-xl w-[80px] mb-8 hover:bg-black hover:text-blue-500"
          onClick={handleanalyze}>
            <TbAnalyzeFilled />
        </button>
        {
          ready && score
        }
      </div>
    </div>
  );
}

export default Youtube