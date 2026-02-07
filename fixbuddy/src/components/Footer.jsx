import { FooterCard } from "./FooterCard"
export function Footer(){
    return(
        <>
            
         <FooterCard heading="Company" 
         name={["About Us",
            "Privacy Policy",
            "Terms & Conditions",
            "Careers"]} />
        
        <FooterCard heading="Social" 
         name={["Instagram",
            "Facebook",
            "Twitter",
            "Linkedln"]} />

            <FooterCard heading="Social" 
         name={["Instagram",
            "Facebook",
            "Twitter",
            "Linkedln"]} />
                  
        </>
    )
}