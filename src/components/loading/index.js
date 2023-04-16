import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Style from "./style"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
export default function Loading(){
    return(
        <Style>
         <FontAwesomeIcon icon={faSpinner} spin spinReverse size="2xl" style={{"color": "#2207ed"}} />
        </Style>
    )
}