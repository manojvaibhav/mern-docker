import React from 'react';
import { Route } from 'react-router-dom';

function privateRoute({component: Component, ...rest}) {

    return(
        <Route {...rest} render={(props)=>{
            <Component {...props}/>
        }}/>
    );

}

export default privateRoute;