import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"

function Contact(){

const [hover,setHover] = useState(null)

const sectionStyle={
padding:"120px 40px",
color:"white",
maxWidth:"1200px",
margin:"auto"
}

const grid={
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"60px",
marginTop:"70px"
}

const infoCard={
display:"flex",
alignItems:"center",
gap:"20px",
background:"#1c2541",
padding:"22px",
borderRadius:"14px",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"all 0.35s ease",
cursor:"pointer",
marginBottom:"20px"
}

const iconBox={
padding:"14px",
borderRadius:"12px",
fontSize:"20px",
transition:"all 0.3s ease"
}

const textBox={
display:"flex",
flexDirection:"column",
alignItems:"flex-start",
justifyContent:"center",
textAlign:"left",
lineHeight:"1.4"
}

const formBox={
background:"#1c2541",
padding:"30px",
borderRadius:"16px",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)"
}

const input={
width:"100%",
padding:"14px",
marginTop:"10px",
marginBottom:"20px",
borderRadius:"10px",
border:"1px solid rgba(255,255,255,0.08)",
background:"#2a324a",
color:"white",
outline:"none"
}

const textarea={
...input,
height:"120px"
}

const button={
width:"100%",
padding:"14px",
background:"#ff7a18",
border:"none",
borderRadius:"10px",
color:"white",
fontWeight:"bold",
cursor:"pointer",
fontSize:"16px",
transition:"all 0.3s ease"
}

return(

<section id="contact" style={sectionStyle}>

<h2 style={{fontSize:"42px",textAlign:"center"}}>
<span style={{color:"#ddd"}}>Get In </span>
<span style={{color:"#ff7a18"}}>Touch</span>
</h2>

<div style={{
width:"70px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto"
}}></div>

<p style={{
textAlign:"center",
color:"#aaa",
marginTop:"20px",
maxWidth:"650px",
marginLeft:"auto",
marginRight:"auto"
}}>
I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
</p>


<div style={grid}>

<div>

<h3 style={{marginBottom:"25px", textAlign:"left"}}>
Contact Information
</h3>


{/* EMAIL */}

<a href="mailto:tanvi.sharma@example.com" style={{textDecoration:"none"}}>

<div
style={{
...infoCard,
transform:hover===1?"translateY(-8px)":"translateY(0)"
}}
onMouseEnter={()=>setHover(1)}
onMouseLeave={()=>setHover(null)}
>

<div style={{
...iconBox,
background:hover===1?"#ff7a18":"#2a324a",
color:hover===1?"white":"#ff7a18"
}}>
<FaEnvelope/>
</div>

<div style={textBox}>
<span style={{color:"#aaa",fontSize:"14px"}}>Email</span>
<span style={{color:hover===1?"#ff7a18":"white"}}>
tanvi.sharma@example.com
</span>
</div>

</div>

</a>


{/* GITHUB */}

<a
href="https://github.com/tanvimac"
target="_blank"
rel="noopener noreferrer"
style={{textDecoration:"none"}}
>

<div
style={{
...infoCard,
transform:hover===2?"translateY(-8px)":"translateY(0)"
}}
onMouseEnter={()=>setHover(2)}
onMouseLeave={()=>setHover(null)}
>

<div style={{
...iconBox,
background:hover===2?"#ff7a18":"#2a324a",
color:hover===2?"white":"#ff7a18"
}}>
<FaGithub/>
</div>

<div style={textBox}>
<span style={{color:"#aaa",fontSize:"14px"}}>GitHub</span>
<span style={{color:hover===2?"#ff7a18":"white"}}>
github.com/tanvimac
</span>
</div>

</div>

</a>


{/* LINKEDIN */}

<a
href="https://www.linkedin.com/in/tanvi-sharma-63301b297/"
target="_blank"
rel="noopener noreferrer"
style={{textDecoration:"none"}}
>

<div
style={{
...infoCard,
transform:hover===3?"translateY(-8px)":"translateY(0)"
}}
onMouseEnter={()=>setHover(3)}
onMouseLeave={()=>setHover(null)}
>

<div style={{
...iconBox,
background:hover===3?"#ff7a18":"#2a324a",
color:hover===3?"white":"#ff7a18"
}}>
<FaLinkedin/>
</div>

<div style={textBox}>
<span style={{color:"#aaa",fontSize:"14px"}}>LinkedIn</span>
<span style={{color:hover===3?"#ff7a18":"white"}}>
linkedin.com/in/tanvi-sharma
</span>
</div>

</div>

</a>

</div>


{/* RIGHT FORM */}

<div style={formBox}>

<label>Name</label>
<input type="text" placeholder="Your Name" style={input}/>

<label>Email</label>
<input type="email" placeholder="your.email@example.com" style={input}/>

<label>Message</label>
<textarea placeholder="Your Message" style={textarea}></textarea>

<button
style={button}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-4px)"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)"
}}
>
Send Message
</button>

</div>

</div>

</section>

)

}

export default Contact