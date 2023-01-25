import { useRef } from "react"
import { EmojinPicker } from "./emojinPicker"

export default function EmojinPickerInput () {
    const inputRef = useRef(null);
    return (
      <div >
        <input ref={inputRef} />
        <EmojinPicker ref={inputRef} />
      </div>
    );
  }

  export { EmojinPickerInput  };