import { FaAward, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"

function Certificates(){

const [hover,setHover] = useState(null)

const sectionStyle={
padding:"120px 60px",
textAlign:"center",
color:"white"
}

const container={
display:"flex",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
marginTop:"70px"
}

const card={
background:"#1c2541",
padding:"30px",
borderRadius:"18px",
width:"360px",
textAlign:"left",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"all 0.35s ease",
cursor:"pointer",
overflow:"hidden"
}

const iconBox={
padding:"12px",
borderRadius:"10px",
marginRight:"15px",
fontSize:"20px",
color:"white",
transition:"all 0.35s ease"
}

return(

<section id="certificates" style={sectionStyle}>

<h2 style={{fontSize:"48px"}}>
<span style={{color:"#ddd"}}>My </span>
<span style={{color:"#ff7a18"}}>Certificates</span>
</h2>

<div style={{
width:"90px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto"
}}></div>

<div style={container}>


{/* Certificate 1 */}

<div
style={{...card,borderTop:"6px solid #ff7a18"}}
onMouseEnter={(e)=>{
setHover(1)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(255,122,24,0.4)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{display:"flex",alignItems:"center"}}>

<div style={{
...iconBox,
background:"#ff7a18",
transform:hover===1 ? "translateY(-4px)" : "translateY(0)"
}}>
<FaAward/>
</div>

<div>
<h3 style={{color:hover===1 ? "#ff7a18" : "white"}}>
Master Generative AI & Generative Tools
</h3>
<p style={{color:"#aaa"}}>Online Course</p>
</div>

</div>

<hr style={{margin:"20px 0",borderColor:"#2a324a"}}/>

<a
href="https://drive.google.com/file/d/1J6-B-Me5GI99oXP_cApBNvnpKHejURMg/view"
target="_blank"
rel="noopener noreferrer"
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
color:"#aaa",
textDecoration:"none"
}}
>
View Certificate
<FaExternalLinkAlt style={{color:"#ff7a18"}}/>
</a>

</div>



{/* Certificate 2 */}

<div
style={{...card,borderTop:"6px solid #4da3ff"}}
onMouseEnter={(e)=>{
setHover(2)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(77,163,255,0.4)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{display:"flex",alignItems:"center"}}>

<div style={{
...iconBox,
background:"#4da3ff",
transform:hover===2 ? "translateY(-4px)" : "translateY(0)"
}}>
<FaAward/>
</div>

<div>
<h3 style={{color:hover===2 ? "#ff7a18" : "white"}}>
ChatGPT-4 Prompt Engineering
</h3>
<p style={{color:"#aaa"}}>Infosys</p>
</div>

</div>

<hr style={{margin:"20px 0",borderColor:"#2a324a"}}/>

<a
href="https://drive.google.com/file/d/1V-9TReAnkn9PbIqav5AvqvSsb6I81kGH/view"
target="_blank"
rel="noopener noreferrer"
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
color:"#aaa",
textDecoration:"none"
}}
>
View Certificate
<FaExternalLinkAlt style={{color:"#ff7a18"}}/>
</a>

</div>



{/* Certificate 3 */}

<div
style={{...card,borderTop:"6px solid #22c55e"}}
onMouseEnter={(e)=>{
setHover(3)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(34,197,94,0.4)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{display:"flex",alignItems:"center"}}>

<div style={{
...iconBox,
background:"#22c55e",
transform:hover===3 ? "translateY(-4px)" : "translateY(0)"
}}>
<FaAward/>
</div>

<div>
<h3 style={{color:hover===3 ? "#ff7a18" : "white"}}>
NPTEL Cloud Computing
</h3>
<p style={{color:"#aaa"}}>IIT Kharagpur</p>
</div>

</div>

<hr style={{margin:"20px 0",borderColor:"#2a324a"}}/>

<a
href="https://drive.google.com/file/d/1Tb-awiLX4ZDdW1YpLRz334jS--Hu3tFz/view"
target="_blank"
rel="noopener noreferrer"
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
color:"#aaa",
textDecoration:"none"
}}
>
View Certificate
<FaExternalLinkAlt style={{color:"#ff7a18"}}/>
</a>

</div>

</div>

</section>

)

}

export default Certificates
