import { 
    FC, 
    useState,
} from "react";

const StrongText: FC = () => {
    const [strongText, setStrongText] = useState<string>();
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <>
            {visibility === false? 
                <>
                    <input 
                        type="text" 
                        placeholder="Strong Text" 
                        onChange={e => setStrongText(e.target.value)}
                    />
                    <button onClick={() => setVisibility(true)}>Insert</button>
                </>
                : <strong>{ strongText }</strong>
            }
        </>
    )
}   

export default StrongText;