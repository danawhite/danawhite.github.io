import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  backgroundColor: '#fff'
};

const BrightIdeasApp = () => {
    return (
        <div>
            <div style={style.backgroundColor}></div>
        </div>
    )
};

const render = () => {
    return (
        <BrightIdeasApp/>, document.getElementById('root');
    )
}