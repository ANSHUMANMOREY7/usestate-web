import './Bgcolor.css';
function Bgcolor({bgcolor , setbgcolor})
{
    return(
        
        <div className='color'
         onClick={()=>{setbgcolor(bgcolor)}} 
             style={{backgroundColor:bgcolor }}
             >
         </div>
        
    )
}
export default Bgcolor ;