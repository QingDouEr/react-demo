import React from 'react';

const MyHeader = (props) => {

    const style = {
        backgroundColor: 'red',
        padding: '8px',
        border: '1px solid blue',
        cursor: 'pointer',
        font: 'inherit'
    }

    return (
        <div>
            <h1>HelloWorld</h1>
            <button style={style} onClick={() => props.clicked()}>内容切换</button>
        </div>
    );

}

export default MyHeader;