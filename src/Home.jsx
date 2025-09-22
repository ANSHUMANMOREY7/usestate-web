import { useState } from 'react';
import Bgcolor from './Bgcolor';
import EmojiBtn from './EmojiBtn';
import './Home.css';
function Home() {
    const [emoji, setemoji] = useState("😀");
    const [slidervalue, setslidervalue] = useState("50")
    const [bgcolor, setbgcolor] = useState("white")
    return (
        <div className='body'>
            <h1 className="head">Playing with Emojis Using <span className='highlight-head'> React useState </span></h1>
            <h2 className='sub-head'>this is a simple react app that allows you to play with emojis </h2>
            <div className='emoji-box' style={{ fontSize: `${slidervalue}px` , backgroundColor: bgcolor }}>
                
                <div className='emoji'> {emoji}</div>
                
            </div>
              <input type="range" className='slider' min="1" max="100" value={slidervalue} onChange={(e) => { setslidervalue(e.target.value) }} />
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
                <Bgcolor bgcolor={"yellow"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"pink"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"green"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"blue"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"purple"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"orange"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"black"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"aqua"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"gray"} setbgcolor={setbgcolor} />
                <Bgcolor bgcolor={"red"} setbgcolor={setbgcolor} />
            </div>

          

        </div>
    )
}
export default Home;