import { useState } from "react";

const Form = ({addColor}) => {
    const [color, setColor] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    }
  return (
    <>
    
    <section className="container">
    <h2>Color Generator</h2>
    <form action="" className="color-form" onSubmit={handleSubmit}>
      
      <input type="color" className="" value={color} onChange={(e) => setColor(e.target.value)}/>  
      <input type="text" className="" value={color} placeholder="#e13737" onChange={(e) => setColor(e.target.value)}/>  
      <button className="btn" style={{backgroundColor:color}}>Select</button>

    </form>
    </section>
    </>
  )
}

export default Form
