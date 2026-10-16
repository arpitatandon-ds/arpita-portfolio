import {motion} from "framer-motion";


const Particles =()=>{

const particles = Array.from({length:40});


return (

<div className="
absolute
inset-0
overflow-hidden
pointer-events-none
">


{
particles.map((_,i)=>(

<motion.span

key={i}

initial={{
opacity:0
}}

animate={{

opacity:[0,1,0],

y:[0,-100]

}}

transition={{

duration:5+Math.random()*5,

repeat:Infinity,

delay:i*0.2

}}

className="
absolute
w-1
h-1
bg-[#00F5D4]
rounded-full
"

style={{

left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`

}}

/>

))

}


</div>

)

}


export default Particles;