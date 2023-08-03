import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({icon, transform, className,spin,size, dur, onClick}) => {
    return (
      <FontAwesomeIcon icon={icon} className={className} transform={transform} spinPulse ={spin} size={size} dur={dur} onClick={onClick}/>
    )
  }
  
  export default Icon