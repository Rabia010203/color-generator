import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  
  const [colors, setColors] = useState(new Values("#F64A8A").all(10));
  const addColor = (color) => {
   try{
    const newColors = new Values(color).all(10);
    setColors(newColors);
   }catch(err){
    toast.error(err.message);
   }
  }
  return ( <>
       <Form color={colors} addColor={addColor}/>
      <ColorList colors={colors} setColors={setColors}/>
      <ToastContainer />
  </>
      
  
  )
};
export default App;
