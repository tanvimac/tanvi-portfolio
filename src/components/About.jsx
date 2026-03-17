import { FaDatabase, FaBrain, FaChartLine, FaLightbulb } from "react-icons/fa"

function About(){

const container={
padding:"120px 80px",
color:"white"
}

const grid={
display:"grid",
gridTemplateColumns:"1.3fr 1fr",
gap:"40px",
alignItems:"center",
marginTop:"60px"
}

const aboutCard={
background:"#1c2541",
padding:"40px",
borderRadius:"18px",
lineHeight:"1.7",
color:"#bfc7d5",
textAlign:"left",
border:"1px solid rgba(255,255,255,0.08)"
}

const skillsGrid={
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px"
}

const skillCard={
background:"#1c2541",
padding:"30px",
borderRadius:"16px",
textAlign:"center",
border:"1px solid rgba(255,255,255,0.08)"
}

const iconStyle={
fontSize:"35px",
marginBottom:"12px"
}

return(

<section id="about" style={container}>

<h2 style={{fontSize:"40px",marginBottom:"10px"}}>
<span style={{color:"#ddd"}}>About </span>
<span style={{color:"#ff7a18"}}>Me</span>
</h2>

<div style={{
width:"70px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto 0"
}}></div>

<div style={grid}>

{/* LEFT TEXT CARD */}

<div style={aboutCard}>

<p>
I'm a dedicated Computer Science student at Lovely Professional University with a strong passion for turning complex data into actionable insights.
My journey in technology is driven by curiosity and a desire to solve real-world problems through data-driven solutions.
</p>

<br/>

<p>
With expertise in data analytics, machine learning, and software development, I strive to create impactful projects that demonstrate both technical proficiency and innovative thinking.
I'm constantly learning and exploring new technologies to enhance my skill set.
</p>

</div>


{/* RIGHT SKILL CARDS */}

<div style={skillsGrid}>

<div style={skillCard}>
<FaDatabase style={{...iconStyle,color:"#ff7a18"}}/>
<h4>Data Science</h4>
</div>

<div style={skillCard}>
<FaBrain style={{...iconStyle,color:"#4da3ff"}}/>
<h4>Machine Learning</h4>
</div>

<div style={skillCard}>
<FaChartLine style={{...iconStyle,color:"#ff7a18"}}/>
<h4>Data Analytics</h4>
</div>

<div style={skillCard}>
<FaLightbulb style={{...iconStyle,color:"#4da3ff"}}/>
<h4>Problem Solving</h4>
</div>

</div>

</div>

</section>

)

}

export default About
