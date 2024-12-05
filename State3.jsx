const state3=()=>{
    const[total,setTotal]=userState(0);
    return(
        <div>
            <button
             onClick={()=>{
                setTotal(total+1);
             }}
           >Bhadta hua
           </button>  
           <button
            onClick={()=>{
                setTotal(total-1);
            }}
           ></button> 
        </div>
    )
}