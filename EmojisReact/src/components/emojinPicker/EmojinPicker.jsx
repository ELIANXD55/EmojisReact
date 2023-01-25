import { forwardRef } from "react";
import { useState } from "react";
import {Data as emojilist} from "./Data"
import EmojinSearch from "./emojinSearch";


export const EmojinPicker = (props, inputRef) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const [emojis, setEmojis] = useState(emojilist);
    
    function handleClickOpen(){
        setIsOpen(!isOpen);
    }
    
    const handleSearch = (e) => {
        const q = e.target.value.toLowerCase();
        if (!!q){
            const search = emojilist.filter(emoji =>{ return emoji.name.toLowerCase().includes(q)
            
            || emoji.keywords.toLowerCase().includes(q)
            
            })
            
            setEmojis(search);
        }
        else {
            setEmojis(emojilist);
        }
}
    
    
    function EmojinPickerContainer (){
        return (
            <div>
                <EmojinSearch onSearch={handleSearch}/>
                <div>
                    {
                        emojilist.map(emoji => <div key={emoji.symbol}> {emoji.name} {emoji.symbol}</div>)
                    }
                </div>
            </div>
        )
    }



    return(
        <div>
            <button onClick={handleClickOpen}>
                🥶
            </button>
            {isOpen ?             
            <div>
                <EmojinSearch onSearch={handleSearch}/>
                <div>
                    {
                        emojilist.map(emoji => <div key={emoji.symbol}> {emoji.symbol}</div>)
                    }
                </div>
            </div> : ""}
        </div>
    )
}


export default forwardRef(EmojinPicker)