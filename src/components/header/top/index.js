import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styled from "./style";

export default function TopHeader(){
    return(
        <Styled>
            <p>
                <img src="https://coincap.io/static/logos/ss-mark-white.svg" />
                Buy,sell,&amp; swap your favorite assets. No KYC. No added fees. Decentralized.
                <FontAwesomeIcon icon={faArrowRight} />
            </p>
        </Styled>
    )
}