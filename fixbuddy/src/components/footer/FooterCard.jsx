export function FooterCard({heading,name}){
    return(
        <>
         
        <div className="pt-5">
            
            <h3 className="font-bold ">{heading}</h3>
            <ul>
                {name.map((items,index)=>{
              return  <li key={index}>{items}</li>
                })}
            </ul>
            </div> 
        
        </>
    )
}