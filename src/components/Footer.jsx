import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa"

function Footer(){

return(

<footer style={{
background:"#0b132b",
color:"white",
padding:"50px 60px 20px",
position:"relative"
}}>

{/* TOP SECTION */}
<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

{/* LEFT SIDE */}
<div>
<h2 style={{
color:"#ff7a18",
fontSize:"26px",
marginBottom:"6px",
fontWeight:"600"
}}>
Tanvi Sharma
</h2>

<p style={{
color:"#9aa4b2",
fontSize:"15px"
}}>
Building the future with data and code
</p>
</div>

{/* RIGHT ICONS */}
<div style={{
display:"flex",
gap:"18px"
}}>

{/* ICON STYLE */}
{[
{icon:<FaGithub/>, link:"https://github.com/tanvimac"},
{icon:<FaLinkedin/>, link:"https://www.linkedin.com/in/tanvi-sharma-63301b297/"},
{icon:<FaEnvelope/>, link:"mailto:tanvi.sharma@example.com"}
].map((item,index)=>(
<a href={item.link} target="_blank" key={index}>
<div
style={{
width:"52px",
height:"52px",
display:"flex",
alignItems:"center",
justifyContent:"center",
borderRadius:"12px",
background:"#1c2541",
border:"1px solid rgba(255,255,255,0.08)",
color:"#9aa4b2",
fontSize:"20px",
transition:"all 0.3s ease",
cursor:"pointer"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-6px)"
e.currentTarget.style.background="#ff7a18"
e.currentTarget.style.color="white"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.background="#1c2541"
e.currentTarget.style.color="#9aa4b2"
}}
>
{item.icon}
</div>
</a>
))}

</div>

</div>

{/* LINE */}
<div style={{
height:"1px",
background:"rgba(255,255,255,0.08)",
marginTop:"30px"
}}></div>

{/* COPYRIGHT */}
<p style={{
textAlign:"center",
marginTop:"20px",
color:"#9aa4b2",
fontSize:"14px"
}}>
© 2026 Tanvi Sharma. All rights reserved.
</p>

{/* SCROLL BUTTON */}
<div
style={{
position:"fixed",
right:"30px",
bottom:"30px",
width:"58px",
height:"58px",
borderRadius:"50%",
background:"#ff7a18",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"white",
fontSize:"20px",
cursor:"pointer",
boxShadow:"0 15px 40px rgba(255,122,24,0.5)",
transition:"all 0.3s ease"
}}
onClick={()=>{
window.scrollTo({top:0,behavior:"smooth"})
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-5px) scale(1.05)"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0) scale(1)"
}}
>
<FaArrowUp/>
</div>

</footer>

)

}

export default Footer