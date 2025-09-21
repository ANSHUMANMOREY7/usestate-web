import "./EmojiBtn.css";
function EmojiBtn({emoji,setemoji})
{
    return(
        <div className='emojis' 
        onClick={() => {setemoji(emoji)}}> {emoji} 
        </div>
        )
           
}

export default EmojiBtn;