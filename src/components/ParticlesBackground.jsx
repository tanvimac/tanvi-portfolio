import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground(){

const particlesInit = async (main)=>{
  await loadFull(main)
}

return(

<div style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
zIndex:-1
}}>

<Particles
id="tsparticles"
init={particlesInit}
options={{
background:{color:"transparent"},
particles:{
number:{value:70},
color:{value:"#ff7a18"},
links:{
enable:true,
distance:150,
color:"#ff7a18",
opacity:0.3,
width:1
},
move:{
enable:true,
speed:1
},
size:{value:2},
opacity:{value:0.5}
},
interactivity:{
events:{
onHover:{
enable:true,
mode:"repulse"
}
},
modes:{
repulse:{distance:100}
}
}
}}
/>

</div>

)

}

export default ParticlesBackground