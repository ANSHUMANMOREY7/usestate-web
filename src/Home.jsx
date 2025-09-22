import { useState } from 'react';
import EmojiBtn from './EmojiBtn';
import './Home.css';
function Home() {
    const [emoji, setemoji] = useState("😀");
    const [slidervalue, setslidervalue] = useState("50")
    return (
        <div className='body'>
            <h1 className="head">Playing with Emojis Using <span className='highlight-head'> React useState </span></h1>
            <h2 className='sub-head'>this is a simple react app that allows you to play with emojis </h2>
            <div className='emoji-box' style={{ fontSize: `${slidervalue}px` }}>
                <div className='emoji'> {emoji}</div>
            </div>
            <div className="emojis-container">
                <EmojiBtn emoji={"😀"} setemoji={setemoji} />
                <EmojiBtn emoji={"😁"} setemoji={setemoji} />
                <EmojiBtn emoji={"😂"} setemoji={setemoji} />
                <EmojiBtn emoji={"🤣"} setemoji={setemoji} />
                <EmojiBtn emoji={"😃"} setemoji={setemoji} />
                <EmojiBtn emoji={"😄"} setemoji={setemoji} />
                <EmojiBtn emoji={"😆"} setemoji={setemoji} />
                <EmojiBtn emoji={"😉"} setemoji={setemoji} />
                <EmojiBtn emoji={"😊"} setemoji={setemoji} />
                <EmojiBtn emoji={"😋"} setemoji={setemoji} />
            </div>

            <div className='color-picker'>
                <div className='color'style={{backgroundColor:'red'}} ></div>
                <div className='color'style={{backgroundColor:'pink'}} ></div>
                <div className='color'style={{backgroundColor:'green'}} ></div>
                <div className='color'style={{backgroundColor:'blue'}} ></div>
                <div className='color'style={{backgroundColor:'yellow'}} ></div>
                <div className='color'style={{backgroundColor:'purple'}} ></div>
                <div className='color'style={{backgroundColor:'orange'}} ></div>
                <div className='color'style={{backgroundColor:'black'}} ></div>
                <div className='color'style={{backgroundColor:'aqua'}} ></div>   
                <div className='color'style={{backgroundColor:'gray'}} ></div>


            </div>

            {/* <h2 className='sub-head slider-head'>Use the slider to change the size of the emoji</h2> */}

            <input type="range" className='slider' min="1" max="100" value={slidervalue} onChange={(e) => { setslidervalue(e.target.value) }} />

        </div>
    )
}
export default Home;