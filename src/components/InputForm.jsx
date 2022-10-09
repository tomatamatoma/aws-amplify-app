import React, { useState } from 'react';

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("");

const handleSubmit = (e) => {

    e.preventDefault();
    console.log(inputText);
    
}

const handleChange = (e) => {
    setInputText(e.target.value);
    
}

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button>
                    プラス
                </button>
            </form>
        </div>
    )
}
