import React from 'react';

// import {withRouter} from 'react-router-dom'

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// export default pwithRouterost(post); // this will let you access routing-related props 
// which might be needed in pushing the history of prop. This requires to make this a component (return JSX)
// lecture : 222
export default post