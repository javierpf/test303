import React from 'react';
import {Img} from 'glamorous';

const ImagePresenter = props => (
    <Img 
        borderRadius="15px"
        width="100%"
        height="100%"
        src={props.imageSource}
        alt=""
    />
);

export default ImagePresenter;