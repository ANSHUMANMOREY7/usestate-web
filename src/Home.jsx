import './Home.css';
function Home() {
return (
    <div>
        <h1 className="head">Playing with Emojis Using <span className='highlight-head'> React useState </span></h1>
        <h2 className='sub-head'>this is a simple react app that allows you to play with emojis and express your feelings</h2>
        <div className='emoji-box'>
            <span className='emoji'>😀</span>
        </div>
    </div>
);
}
export default Home;