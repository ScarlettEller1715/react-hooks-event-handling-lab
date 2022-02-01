import React, { useState } from "react";

function EyesOnMe() {
    return (
        <button 
        onFocus={() => console.log('Good!')}
        onBlur={() => console.log('All eyes on me!')}>
            All eyes on me!
        </button>
    )
}

export default EyesOnMe;