import { FaGraduationCap } from "react-icons/fa"
import { useState } from "react"

function Education(){

const [hover,setHover] = useState(null)

const sectionStyle={
padding:"120px 40px",
color:"white",
maxWidth:"1100px",
margin:"auto"
}

const timeline={
position:"relative",
marginTop:"80px"
}

const line={
position:"absolute",
left:"50%",
top:"0",
width:"3px",
height:"100%",
background:"linear-gradient(#ff7a18,#4da3ff)",
transform:"translateX(-50%)"
}

const row={
display:"grid",
gridTemplateColumns:"1fr 80px 1fr",
alignItems:"center",
marginBottom:"80px"
}

const card={
background:"#1c2541",
padding:"28px",
borderRadius:"14px",
width:"360px",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"all 0.35s ease",
cursor:"pointer"
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
e.currentTarget.style.transform="translateY(-10px)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
}}
>

<div style={{display:"flex",gap:"15px",alignItems:"center"}}>

<div style={{
background:"#2a324a",
padding:"12px",
borderRadius:"12px"
}}>
<FaGraduationCap style={{color:"#ff7a18",fontSize:"20px"}}/>
</div>

<div>
<h3 style={{color:hover===1?"#ff7a18":"white"}}>
B.Tech Computer Science and Engineering
</h3>

<p style={{color:"#4da3ff"}}>
Lovely Professional University
</p>

<p style={{color:"#aaa"}}>
CGPA: 7.1
</p>
</div>

</div>

<div style={{textAlign:"right",marginTop:"10px",color:"#ff7a18"}}>
Present
</div>

</div>

<div></div>

<div></div>

</div>


{/* ROW 2 */}

<div style={row}>

<div></div>

<div></div>

<div
style={card}
onMouseEnter={(e)=>{
setHover(2)
e.currentTarget.style.transform="translateY(-10px)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
}}
>

<div style={{display:"flex",gap:"15px",alignItems:"center"}}>

<div style={{
background:"#2a324a",
padding:"12px",
borderRadius:"12px"
}}>
<FaGraduationCap style={{color:"#ff7a18",fontSize:"20px"}}/>
</div>

<div>
<h3 style={{color:hover===2?"#ff7a18":"white"}}>
Intermediate
</h3>

<p style={{color:"#4da3ff"}}>
Star Public School Khairthal
</p>

<p style={{color:"#aaa"}}>
Percentage: 82%
</p>
</div>

</div>

<div style={{textAlign:"right",marginTop:"10px",color:"#ff7a18"}}>
Completed
</div>

</div>

</div>


</div>

</section>

)

}

export default Education
