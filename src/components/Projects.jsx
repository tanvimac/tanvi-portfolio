import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Projects(){

const [hover,setHover]=useState(null)

const containerStyle={
padding:"80px",
color:"white",
textAlign:"center"
}

const cardsWrapper={
display:"flex",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap"
}

const cardStyle={
background:"#1c2541",
padding:"25px",
borderRadius:"14px",
width:"320px",
textAlign:"left",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)",
transition:"all 0.35s ease",
cursor:"pointer"
}

const tag={
background:"#2c344f",
padding:"6px 12px",
borderRadius:"20px",
fontSize:"12px"
}

const buttonStyle={
background:"#2c344f",
border:"none",
padding:"10px 20px",
borderRadius:"8px",
color:"white",
cursor:"pointer",
transition:"all 0.3s ease"
}

return(

<div id="projects" style={containerStyle}>

<h2 style={{marginBottom:"50px",fontSize:"42px"}}>
<span style={{color:"white"}}>Featured </span>
<span style={{color:"#ff7a18"}}>Projects</span>
</h2>

<div style={cardsWrapper}>

{/* PROJECT 1 */}

<div
style={{...cardStyle,borderTop:"6px solid #ff7a18"}}
onMouseEnter={(e)=>{
setHover(1)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(255,122,24,0.45)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>
 
<h3 style={{color:hover===1 ? "#ff7a18" : "white"}}>
Airport Passenger Traffic Analysis Dashboard
</h3>

<p style={{opacity:"0.8"}}>
Interactive Power BI dashboard analyzing monthly passenger traffic trends.
</p>

<p style={{marginTop:"15px"}}>Tech Stack:</p>

<div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"10px"}}>
<span style={tag}>Power BI</span>
<span style={tag}>Power Query</span>
<span style={tag}>DAX</span>
<span style={tag}>Star Schema</span>
</div>

<div style={{marginTop:"25px"}}>

<a
href="https://github.com/tanvimac/Airport-Passenger-Traffic-Analysis-Using-Power-BI"
target="_blank"
rel="noopener noreferrer"
>

<button style={{
...buttonStyle,
transform:hover===1 ? "translateY(-3px)" : "translateY(0)"
}}>
<FaGithub/> View Code
</button>

</a>

</div>

</div>


{/* PROJECT 2 */}

<div
style={{...cardStyle,borderTop:"6px solid #4da3ff"}}
onMouseEnter={(e)=>{
setHover(2)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(77,163,255,0.45)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>
 
<h3 style={{color:hover===2 ? "#ff7a18" : "white"}}>
Page Replacement Algorithm Simulator
</h3>

<p style={{opacity:"0.8"}}>
Python simulator implementing FIFO, LRU and Optimal algorithms.
</p>

<p style={{marginTop:"15px"}}>Tech Stack:</p>

<div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"10px"}}>
<span style={tag}>Python</span>
<span style={tag}>NumPy</span>
<span style={tag}>Pandas</span>
<span style={tag}>Matplotlib</span>
<span style={tag}>Seaborn</span>
</div>

<div style={{marginTop:"25px"}}>

<a
href="https://github.com/tanvimac/PageReplacementSimulator-1"
target="_blank"
rel="noopener noreferrer"
>

<button style={{
...buttonStyle,
transform:hover===2 ? "translateY(-3px)" : "translateY(0)"
}}>
<FaGithub/> View Code
</button>

</a>

</div>

</div>


{/* PROJECT 3 */}

<div
style={{...cardStyle,borderTop:"6px solid #a855f7"}}
onMouseEnter={(e)=>{
setHover(3)
e.currentTarget.style.transform="translateY(-12px)"
e.currentTarget.style.boxShadow="0 25px 60px rgba(168,85,247,0.45)"
}}
onMouseLeave={(e)=>{
setHover(null)
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.5)"
}}
>
 
<h3 style={{color:hover===3 ? "#ff7a18" : "white"}}>
Anime Recommendation System
</h3>

<p style={{opacity:"0.8"}}>
Machine learning recommendation system built during data science training.
</p>

<p style={{marginTop:"15px"}}>Tech Stack:</p>

<div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"10px"}}>
<span style={tag}>Python</span>
<span style={tag}>Pandas</span>
<span style={tag}>NumPy</span>
<span style={tag}>SQL</span>
<span style={tag}>Scikit-learn</span>
</div>

<div style={{marginTop:"25px"}}>

<a
href="https://github.com/tanvimac/Anime_EDA_and_Recommendation_System"
target="_blank"
rel="noopener noreferrer"
>

<button style={{
...buttonStyle,
transform:hover===3 ? "translateY(-3px)" : "translateY(0)"
}}>
<FaGithub/> View Code
</button>

</a>

</div>

</div>

</div>
</div>

)

}

export default Projects
