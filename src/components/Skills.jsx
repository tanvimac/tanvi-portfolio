function Skills(){

const sectionStyle={
padding:"120px 60px",
color:"white",
textAlign:"center"
}

const container={
display:"flex",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
marginTop:"60px"
}

const card={
background:"#1c2541",
padding:"30px",
borderRadius:"16px",
width:"320px",
border:"1px solid rgba(255,255,255,0.08)"
}

const titleRow={
display:"flex",
alignItems:"center",
gap:"15px",
marginBottom:"25px"
}

const iconBox={
background:"#2a324a",
padding:"12px",
borderRadius:"10px"
}

const skill={
background:"#27324a",
padding:"14px",
borderRadius:"10px",
marginBottom:"12px",
textAlign:"left"
}

return(

<section id="skills" style={sectionStyle}>

<h2 style={{fontSize:"42px"}}>
<span style={{color:"#ddd"}}>My </span>
<span style={{color:"#ff7a18"}}>Skills</span>
</h2>

<div style={{
width:"80px",
height:"4px",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
margin:"10px auto"
}}></div>


<div style={container}>

{/* Programming Languages */}

<div style={card}>

<div style={titleRow}>
<div style={iconBox}>{"</>"}</div>
<h3>Programming Languages</h3>
</div>

<div style={skill}>⚡ C++</div>
<div style={skill}>☕ Java</div>
<div style={skill}>🐍 Python</div>
<div style={skill}>⚛ JavaScript</div>
<div style={skill}>© C</div>

</div>


{/* Technologies */}

<div style={card}>

<div style={titleRow}>
<div style={iconBox}>📄</div>
<h3>Technologies</h3>
</div>

<div style={skill}>🌐 HTML</div>
<div style={skill}>🎨 CSS</div>
<div style={skill}>📊 SQL</div>

</div>


{/* Tools */}

<div style={card}>

<div style={titleRow}>
<div style={iconBox}>🗄</div>
<h3>Tools</h3>
</div>

<div style={skill}>💾 MySQL</div>
<div style={skill}>📈 Excel</div>
<div style={skill}>📊 Power BI</div>
<div style={skill}>🗃 DBMS</div>

</div>


{/* Soft Skills */}

<div style={card}>

<div style={titleRow}>
<div style={iconBox}>💡</div>
<h3>Soft Skills</h3>
</div>

<div style={skill}>🗣 Communication</div>
<div style={skill}>🤝 Teamwork</div>
<div style={skill}>🧠 Critical Thinking</div>
<div style={skill}>⚡ Problem Solving</div>
<div style={skill}>⏳ Time Management</div>

</div>

</div>

</section>

)

}

export default Skills
