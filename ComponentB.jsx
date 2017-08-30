import * as React from "react";

export const ComponentB = ({ children, className, equalWidth }) => {
    return <div className={className}>
        <h1>Hello from ComponentB (JSX)!</h1>
        {children}
    </div>
}
