import { FaCode, FaTrophy, FaStar } from "react-icons/fa"
import { useState } from "react"

function Achievements(){

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
padding:"40px",
borderRadius:"18px",
width:"420px",
textAlign:"center",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"all 0.35s ease",
cursor:"pointer",
overflow:"hidden"
}

const iconBox={
height:"120px",
width:"220px",
borderRadius:"25px",
margin:"0 auto 30px auto",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"60px",
color:"white"
}

const button={
marginTop:"20px",
padding:"12px 28px",
background:"#2c344f",
border:"none",
borderRadius:"25px",
color:"#ff7a18",
fontWeight:"bold",
cursor:"pointer"
}

const starStyle={
color:"#ffcc00",
margin:"0 2px"
}

const [hover1,setHover1]=useState(false)
const [hover2,setHover2]=useState(false)

return(

<section id="achievements" style={sectionStyle}>

<h2 style={{fontSize:"48px"}}>
<span style={{color:"#ddd"}}>My </span>
<span style={{color:"#ff7a18"}}>Achievements</span>
</h2>

<div style={{
width:"90px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto"
}}></div>


<div style={container}>

{/* LeetCode */}

<div
style={{...card,borderTop:"6px solid #ff7a18"}}
onMouseEnter={(e)=>{
setHover1(true)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(255,122,24,0.45)"
}}
onMouseLeave={(e)=>{
setHover1(false)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{
...iconBox,
background:"linear-gradient(135deg,#ff7a18,#ffb347)"
}}>
<FaCode/>
</div>

<h2 style={{color:hover1 ? "#ff7a18" : "white"}}>
LeetCode
</h2>

<p style={{color:"#aaa"}}>
Solved <span style={{color:"#ff7a18",fontWeight:"bold"}}>150+</span> Problems
</p>

<a href="https://leetcode.com/" target="_blank">
<button style={button}>
View Profile
</button>
</a>

</div>


{/* HackerRank */}

<div
style={{...card,borderTop:"6px solid #22c55e"}}
onMouseEnter={(e)=>{
setHover2(true)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(0,200,83,0.45)"
}}
onMouseLeave={(e)=>{
setHover2(false)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{
...iconBox,
background:"linear-gradient(135deg,#00c853,#00e676)"
}}>
<FaTrophy/>
</div>

<h2 style={{color:hover2 ? "#ff7a18" : "white"}}>
HackerRank
</h2>

<p style={{color:"#aaa"}}>
<FaStar style={starStyle}/>
<FaStar style={starStyle}/>
<FaStar style={starStyle}/>
<FaStar style={starStyle}/>
<FaStar style={starStyle}/>
</p>

<a href="https://www.hackerrank.com/" target="_blank">
<button style={button}>
View Profile
</button>
</a>

</div>

</div>

</section>

)

}

export default Achievements