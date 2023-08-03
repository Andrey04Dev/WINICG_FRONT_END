import React, { useEffect, useRef } from "react";
import { Tooltip } from 'bootstrap';

const Tooltips = ({children, text}) => {
    //Le poasamoa un ref a child para que pase la spropiedades
    const childRef = useRef(undefined)
    useEffect(() => {
        //Propeerties of Tooltip
        const t = new Tooltip(childRef.current, {
            title: text,
            placement: "top",
            trigger: "click hover"
        })
    
      return () => {
        t.dispose();
      }
    }, [text])
  return React.cloneElement(children, { ref: childRef })
};

export default Tooltips;