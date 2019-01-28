import React from 'react';

const Button =({btnName,onBtnClick,className})=>(
    <button className={className} name={btnName} onClick={onBtnClick}>
        {btnName}
    </button>
    )

export default Button;