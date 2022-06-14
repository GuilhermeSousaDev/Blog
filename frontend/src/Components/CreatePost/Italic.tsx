import { 
    FC, 
    useState,
} from "react";

const Italic: FC = () => {
    const [italicText, setItalicText] = useState<string>();
    const [visibility, setVisibility] = useState<boolean>();

    return (
        <>
            { visibility === false ?
                <>
                    <input 
                        type="text" 
                        placeholder="Italic Text" 
                        onChange={e => setItalicText(e.target.value)}
                    />
                    <button onClick={() => setVisibility(true)}>Insert</button>
                </> 
                : <i>{ italicText }</i>
            }
        </>
    )
}   

export default Italic;