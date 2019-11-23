import React from 'react';

export const CardList = (props) => {
    console.log('props', props);
    return (<div>{props.children}</div>);
}