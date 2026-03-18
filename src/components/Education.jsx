import { FaGraduationCap } from "react-icons/fa"
import { useState } from "react"

function Education(){

const [hover,setHover] = useState(null)

const sectionStyle={
padding:"120px 40px",
color:"white",
maxWidth:"1100px",
margin:"auto",
position:"relative"
}

const timeline={
position:"relative",
marginTop:"80px"
}

const line={
position:"absolute",
left:"50%",
top:"0",
width:"4px",
height:"100%",
background:"linear-gradient(#ff7a18,#4da3ff)",
transform:"translateX(-50%)",
boxShadow:"0 0 15px rgba(255,122,24,0.5)"
}

const node={
position:"absolute",
left:"50%",
width:"18px",
height:"18px",
background:"#ff7a18",
borderRadius:"50%",
transform:"translateX(-50%)",
boxShadow:"0 0 15px rgba(255,122,24,0.8)"
}

const row={
display:"grid",
gridTemplateColumns:"1fr 80px 1fr",
alignItems:"center",
marginBottom:"110px"
}

const card={
background:"rgba(28,37,65,0.6)",
padding:"30px",
borderRadius:"18px",
width:"360px",
border:"1px solid rgba(255,255,255,0.08)",
backdropFilter:"blur(12px)",
boxShadow:"0 10px 30px rgba(0,0,0,0.6)",
transition:"all 0.4s ease",
cursor:"pointer",
lineHeight:"1.6"
}

const badge={
display:"inline-block",
padding:"6px 14px",
borderRadius:"20px",
fontSize:"13px",
marginTop:"14px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
color:"white"
}

const textBlock={
marginTop:"6px"
}

return(

<section id="education" style={sectionStyle}>

<h2 style={{fontSize:"42px",textAlign:"center"}}>
<span style={{color:"#ddd"}}>My </span>
<span style={{color:"#ff7a18"}}>Education</span>
</h2>

<div style={{
width:"70px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto"
}}></div>

<div style={timeline}>

<div style={line}></div>

{/* ROW 1 */}
<div style={row}>

<div
style={card}
onMouseEnter={(e)=>{
setHover(1)
e.currentTarget.style.transform="translateY(-12px) scale(1.03)"
e.currentTarget.style.boxShadow="0 20px 50px rgba(255,122,24,0.3)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0) scale(1)"
e.currentTarget.style.boxShadow="0 10px 30px rgba(0,0,0,0.6)"
}}
>

<div style={{display:"flex",gap:"15px",alignItems:"center"}}>

<div style={{
background:"#2a324a",
padding:"14px",
borderRadius:"12px"
}}>
<FaGraduationCap style={{color:"#ff7a18",fontSize:"20px"}}/>
</div>

<div>

<h3 style={{color:hover===1?"#ff7a18":"white"}}>
B.Tech Computer Science and Engineering
</h3>

<p style={{color:"#4da3ff",marginTop:"4px"}}>
Lovely Professional University
</p>

<p style={{color:"#888",fontSize:"14px"}}>
📍 Phagwara, Punjab
</p>

<p style={{color:"#aaa",marginTop:"6px"}}>
CGPA: 7.1
</p>

</div>

</div>

<div style={badge}>Present</div>

</div>

<div style={{position:"relative"}}>
<div style={{...node, top:"25px"}}></div>
</div>

<div></div>

</div>


{/* ROW 2 */}
<div style={row}>

<div></div>

<div style={{position:"relative"}}>
<div style={{...node, top:"25px"}}></div>
</div>

<div
style={card}
onMouseEnter={(e)=>{
setHover(2)
e.currentTarget.style.transform="translateY(-12px) scale(1.03)"
e.currentTarget.style.boxShadow="0 20px 50px rgba(255,122,24,0.3)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0) scale(1)"
e.currentTarget.style.boxShadow="0 10px 30px rgba(0,0,0,0.6)"
}}
>

<div style={{display:"flex",gap:"15px",alignItems:"center"}}>

<div style={{
background:"#2a324a",
padding:"14px",
borderRadius:"12px"
}}>
<FaGraduationCap style={{color:"#ff7a18",fontSize:"20px"}}/>
</div>

<div>

<h3 style={{color:hover===2?"#ff7a18":"white"}}>
Intermediate
</h3>

<p style={{color:"#4da3ff",marginTop:"4px"}}>
Star Public School Khairthal
</p>

<p style={{color:"#888",fontSize:"14px"}}>
📍 Khairthal, Rajasthan
</p>

<p style={{color:"#aaa",marginTop:"6px"}}>
Percentage: 82%
</p>

</div>

</div>

<div style={badge}>Completed</div>

</div>

</div>

</div>

</section>

)

}

export default Education