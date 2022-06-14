import { FC, useState } from "react";
import { InputHeading } from "../../styles/globalStyle";

const H4: FC = () => {
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
                : <h4>{ heading }</h4> 
            }
        </>
    )
}   

export default H4;