import { Tooltip as BsTooltip } from "bootstrap"
import React, { useEffect, useRef } from "react"

export const Tooltips = ({children, text, position}) => {
    const childRef = useRef()

    useEffect(() => {
        const t = new BsTooltip(childRef.current, {
            title: text,
            placement: position,
            trigger: "hover"
        })
        return () => t.hide()
    }, [text, position])

    return(
      <section ref={childRef}>
        {children}
      </section>
    ) 
}