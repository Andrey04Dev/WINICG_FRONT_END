import { Tooltip as BsTooltip } from "bootstrap"
import React, { useEffect, useRef } from "react"

export const Tooltips = ({children, text}) => {
    const childRef = useRef()

    useEffect(() => {
        const t = new BsTooltip(childRef.current, {
            title: text,
            placement: "top",
            trigger: "hover"
        })
        return () => t.hide()
    }, [text])

    return(
      <section ref={childRef}>
        {children}
      </section>
    ) 
}