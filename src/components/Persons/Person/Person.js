import React from "react";

const style = {
    backgroundColor: 'gray',
    padding: '8px',
    border: '1px solid blue',
    cursor:'pointer',
    font:'inherit'
}
const styleDiv = {
    backgroundColor: 'brown',
    padding: '8px',
    border: '1px solid blue',
    cursor:'pointer',
    font:'inherit'
}

const person = (props) =>{
    return(
        <div style={styleDiv}>
            <p style={style} onClick={props.myclick}>大家好，我是{props.name},我应经拥有{props.count}个作品</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} defaultValue={props.name}/>
        </div>
    )
}
export default person;