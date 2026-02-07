export function FooterCard({heading,name}){
    return(
        <>
        <div>
            <h3>{heading}</h3>
            <ul>
                {name.map((items,index)=>{
              return  <li key={index}>{items}</li>
                })}
            </ul>
            </div> 
        </>
    )
}