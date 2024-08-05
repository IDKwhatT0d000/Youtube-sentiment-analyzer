import React, { useState } from 'react'
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { TbAnalyzeFilled } from "react-icons/tb";
import {options,getComments} from '../utils/index.js'
import Stats from './Stats.jsx';
const Youtube = () => {
  const[ide,setIde]=useState("");
  const [comments,setComments]=useState([]);
  const [sentiments, setSentiments] = useState([]);
  const [scores,setScores]=useState([])
  const [ready,setReady]=useState(false)
  const handlechange=(e)=>{
    setIde(e.target.value)
  }
  const handleclick=async ()=>{
    const opt = { ...options, params: { id: ide } };
    const response = await getComments(opt);
    //console.log(response)
    //setId("")
    setComments([])
    const commentsArray = response.data;
    const textArray = commentsArray.map(comment => comment.textDisplay);
    setComments(textArray);

    // Send the text array to the Flask backend
    const sentimentResponse = await axios.post('http://127.0.0.1:5000/process', {
      strings: textArray
    });
    console.log(sentimentResponse)
    setSentiments(sentimentResponse.data.sentiments);
    console.log(sentimentResponse.data.sentiments);
  }
  const handleanalyze=(sentiments)=>{
    let avg=0;
    let neg=0;
    let pos=0;
    let neu=0;
    sentiments.forEach(sentiment => {
      avg+=sentiment.compound
      neg+=sentiment.neg
      pos+=sentiment.pos
      neu+=sentiment.neu

    });
    const overallCompoundScore = avg / sentiments.length;
    const overallPositiveScore = pos / sentiments.length;
    const overallNegativeScore = neg / sentiments.length;
    const overallNeutralScore = avg / sentiments.length;

    setScores([overallCompoundScore,overallPositiveScore,overallNegativeScore,overallNeutralScore])
    setReady(true)
    // console.log(`compound score :${overallCompoundScore}`);
    // console.log(`positive score :${overallPositiveScore}`);
    // console.log(`negative score :${overallNegativeScore}`);
    // console.log(`neutral score :${overallNeutralScore}`);
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
          onClick={()=>handleanalyze(sentiments)}>
            <TbAnalyzeFilled />
        </button>
        {
          ready && <Stats scores={scores}></Stats>
        }
      </div>
    </div>
  );
}

export default Youtube