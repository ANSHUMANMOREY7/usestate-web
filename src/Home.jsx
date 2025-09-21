import { useState } from 'react';
import EmojiBtn from './EmojiBtn';
import './Home.css';
function Home() {
    const [emoji , setemoji]= useState("😀");
    const [slidervalue , setslidervalue] = useState("50")
return (
    <div>
        <h1 className="head">Playing with Emojis Using <span className='highlight-head'> React useState </span></h1>
        <h2 className='sub-head'>this is a simple react app that allows you to play with emojis and express your feelings</h2>
        <div className='emoji-box' style={{ fontSize: `${slidervalue}px` }}>
            <div className='emoji'> {emoji}</div>
        </div>
  <div className="emojis-container">
        <EmojiBtn emoji={"😀"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😁"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😂"} setemoji={setemoji}/>
        <EmojiBtn emoji={"🤣"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😃"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😄"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😆"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😉"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😊"} setemoji={setemoji}/>
        <EmojiBtn emoji={"😋"} setemoji={setemoji}/>
        </div>
 

 <input type="range" className='slider' min="1" max="100" value={slidervalue} onChange={(e)=>{setslidervalue(e.target.value)}}/>
   <span className='slider-value'>{slidervalue}</span>
    </div>
)}
export default Home;