function Navbar(){

const navStyle = {
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 60px",
position:"fixed",
top:"0",
left:"0",
width:"100%",
background:"#07122a",
zIndex:"1000"
}

const linkStyle={
color:"#4da3ff",
margin:"0 15px",
textDecoration:"none",
fontWeight:"500",
fontSize:"15px"
}

return(

<div style={navStyle}>

<h2 style={{color:"#ff7a18"}}>TS</h2>

<div>

<a href="#about" style={linkStyle}>About</a>

<a href="#education" style={linkStyle}>Education</a>

<a href="#skills" style={linkStyle}>Skills</a>

<a href="#projects" style={linkStyle}>Projects</a>

<a href="#achievements" style={linkStyle}>Achievements</a>

<a href="#certificates" style={linkStyle}>Certificates</a>

<a href="#contact" style={linkStyle}>Contact</a>

</div>

</div>

)

}

export default Navbar