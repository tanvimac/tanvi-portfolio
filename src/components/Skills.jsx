import { FaCode, FaDatabase, FaTools, FaBrain } from "react-icons/fa";
import { MdBarChart, MdWeb } from "react-icons/md";

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
background:"rgba(30,41,59,0.6)",
padding:"30px",
borderRadius:"20px",
width:"320px",
border:"1px solid rgba(255,255,255,0.08)",
transition:"all 0.35s ease",
backdropFilter:"blur(10px)",
boxShadow:"0 5px 20px rgba(0,0,0,0.4)",
cursor:"pointer"
}

const titleRow={
display:"flex",
alignItems:"center",
gap:"15px",
marginBottom:"25px"
}

const iconBox={
background:"#2a324a",
padding:"14px",
borderRadius:"12px",
fontSize:"22px",
color:"#ff7a18"
}

const skill={
marginBottom:"15px"
}

const skillBarContainer={
background:"#27324a",
borderRadius:"10px",
height:"8px",
marginTop:"6px"
}

const skillBar=(width)=>({
width:width,
height:"100%",
background:"linear-gradient(90deg,#ff7a18,#4da3ff)",
borderRadius:"10px",
transition:"width 1s ease"
})

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

{[
{
title:"Programming Languages",
icon:<FaCode/>,
skills:[
{name:"C",level:"85%"},
{name:"C++",level:"90%"},
{name:"Java",level:"80%"},
{name:"Python",level:"95%"},
{name:"JavaScript",level:"85%"}
]
},
{
title:"Data Science & ML",
icon:<FaBrain/>,
skills:[
{name:"Pandas",level:"95%"},
{name:"NumPy",level:"90%"},
{name:"Scikit-learn",level:"85%"},
{name:"Feature Engineering",level:"80%"},
{name:"Model Building",level:"85%"}
]
},
{
title:"Data Visualization",
icon:<MdBarChart/>,
skills:[
{name:"Matplotlib",level:"90%"},
{name:"Seaborn",level:"85%"},
{name:"Power BI",level:"80%"},
{name:"Excel",level:"90%"}
]
},
{
title:"Web Development",
icon:<MdWeb/>,
skills:[
{name:"HTML",level:"95%"},
{name:"CSS",level:"90%"},
{name:"JavaScript",level:"85%"}
]
},
{
title:"Databases",
icon:<FaDatabase/>,
skills:[
{name:"MySQL",level:"85%"}
]
},
{
title:"Tools",
icon:<FaTools/>,
skills:[
{name:"Git",level:"85%"},
{name:"GitHub",level:"90%"},
{name:"VS Code",level:"95%"},
{name:"Jupyter",level:"90%"}
]
}
].map((item,index)=>(

<div 
key={index}
style={card}

/* 🔥 CLEAN HOVER EFFECT */
onMouseEnter={(e)=>{
e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,122,24,0.35)";
e.currentTarget.style.border = "1px solid rgba(255,122,24,0.5)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform = "translateY(0) scale(1)";
e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
}}
>

<div style={titleRow}>
<div style={iconBox}>{item.icon}</div>
<h3>{item.title}</h3>
</div>

{item.skills.map((s,i)=>(
<div key={i} style={skill}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<span>{s.name}</span>
<span>{s.level}</span>
</div>

<div style={skillBarContainer}>
<div style={skillBar(s.level)}></div>
</div>
</div>
))}

</div>

))}

</div>

</section>

)

}

export default Skills