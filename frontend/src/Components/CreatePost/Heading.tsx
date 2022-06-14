import { 
    ChangeEvent, 
    FC, 
    useCallback, 
    useEffect, 
    useState,
} from "react";
import { InputHeading } from "../../styles/globalStyle";

const Heading: FC = () => {
    const [heading, setHeading] = useState<string>();
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <>
            { visibility === false? 
                <>
                    <InputHeading 
                        type="text" 
                        placeholder="Untitled" 
                        onChange={e => setHeading(e.target.value)}
                    /> 
                    <button onClick={() => setVisibility(true)}>Insert</button>
                </>
                : <h1>{ heading }</h1> }
            
        </>
    )
}   

export default Heading;