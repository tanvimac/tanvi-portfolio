import { FaCode, FaTrophy } from "react-icons/fa";

function CodingProfiles(){

const cardStyle={
background:"#1c2541",
padding:"40px",
borderRadius:"16px",
width:"320px",
textAlign:"center",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"transform 0.3s, box-shadow 0.3s",
cursor:"pointer"
}

const iconStyle={
fontSize:"60px",
padding:"25px",
borderRadius:"20px",
color:"white",
marginBottom:"20px"
}

return(

<div style={{
padding:"100px",
textAlign:"center",
color:"white"
}}>

<h2 style={{marginBottom:"50px"}}>
<span style={{color:"white"}}>Coding </span>
<span style={{color:"#ff7a18"}}>Profiles</span>
</h2>

<div style={{
display:"flex",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap"
}}>

{/* LeetCode */}
<div
style={cardStyle}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-10px)"
e.currentTarget.style.boxShadow="0 20px 40px rgba(255,122,24,0.5)"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0px)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{...iconStyle,background:"linear-gradient(45deg,#ff7a18,#ffb347)"}}>
<FaCode/>
</div>

<h3>LeetCode</h3>

<p style={{opacity:"0.8"}}>
Problem Solving
</p>

<a href="https://leetcode.com/u/tanvi_shrma/" target="_blank">
<button style={{
marginTop:"20px",
padding:"12px 25px",
background:"#2c344f",
border:"none",
borderRadius:"20px",
color:"#ff7a18",
fontWeight:"bold"
}}>
View Profile
</button>
</a>

</div>


{/* HackerRank */}
<div
style={cardStyle}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-10px)"
e.currentTarget.style.boxShadow="0 20px 40px rgba(0,200,83,0.4)"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0px)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>

<div style={{...iconStyle,background:"linear-gradient(45deg,#00c853,#00e676)"}}>
<FaTrophy/>
</div>

<h3>HackerRank</h3>

<p style={{opacity:"0.8"}}>
5 Star
</p>

<a href="https://www.hackerrank.com/profile/tanvisharma2607" target="_blank">
<button style={{
marginTop:"20px",
padding:"12px 25px",
background:"#2c344f",
border:"none",
borderRadius:"20px",
color:"#ff7a18",
fontWeight:"bold"
}}>
View Profile
</button>
</a>

</div>

</div>

</div>

)

}

export default CodingProfiles
