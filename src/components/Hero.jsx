import { TypeAnimation } from "react-type-animation"

function Hero(){

return(

<section id="home" style={{
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
color:"white",
position:"relative",
padding:"120px 20px 60px 20px"
}}>

{/* Glow Background */}
<div style={{
position:"absolute",
top:"0",
left:"50%",
transform:"translateX(-50%)",
width:"900px",
height:"500px",
background:"radial-gradient(circle at center, rgba(255,122,24,0.35), transparent 70%)",
filter:"blur(70px)",
zIndex:"0"
}}></div>

<div style={{zIndex:"1"}}>

<img
src="/img2.jpeg"
alt="Tanvi Sharma"
style={{
width:"120px",
height:"120px",
borderRadius:"50%",
border:"4px solid #ff7a18",
marginBottom:"25px",
objectFit:"cover"
}}
/>

<h1 style={{
fontSize:"56px",
fontWeight:"bold",
marginBottom:"10px"
}}>
<span style={{color:"#ddd"}}>Hi, I'm </span>
<span style={{color:"#ff7a18"}}>Tanvi Sharma</span>
</h1>

<TypeAnimation
sequence={[
'Computer Science & Data Science Student',
2000,
'Data Science Enthusiast',
2000,
'Machine Learning Learner',
2000,
]}
wrapper="span"
speed={50}
repeat={Infinity}
style={{
fontSize:"22px",
display:"block",
marginBottom:"20px",
color:"#ccc"
}}
/>

<p style={{
maxWidth:"600px",
margin:"auto",
color:"#aaa",
marginBottom:"35px",
lineHeight:"1.6"
}}>
Passionate about transforming data into insights through analytics,
machine learning, and innovative problem-solving.
</p>

<div style={{
display:"flex",
gap:"20px",
justifyContent:"center"
}}>

	<a href="/cvcv.pdf">
	<button style={{
padding:"14px 28px",
background:"#ff7a18",
border:"none",
borderRadius:"10px",
color:"white",
fontSize:"16px",
cursor:"pointer",
boxShadow:"0 10px 25px rgba(255,122,24,0.4)"
}}>
Download CV
</button>
</a>

<a href="#projects">
<button style={{
padding:"14px 28px",
background:"transparent",
border:"1px solid #555",
borderRadius:"10px",
color:"#ddd",
fontSize:"16px",
cursor:"pointer"
}}>
View Projects
</button>
</a>

</div>

</div>

</section>

)

}

export default Hero
