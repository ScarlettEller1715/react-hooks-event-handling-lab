import React, {useState} from "react"

function Keypad() {
    return (<form>
        <input 
        type="password"
        onChange={(e) => console.log("entering password")} />
        </form>)
}

export default Keypad;