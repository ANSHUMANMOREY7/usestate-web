import { useState } from 'react';
import EmojiBtn from './EmojiBtn';
import './Home.css';
function Home() {
    const [emoji , setemoji]= useState("😀");
return (
    <div>
        <h1 className="head">Playing with Emojis Using <span className='highlight-head'> React useState </span></h1>
        <h2 className='sub-head'>this is a simple react app that allows you to play with emojis and express your feelings</h2>
        <div className='emoji-box'>
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

    </div>
    
);
}
export default Home;