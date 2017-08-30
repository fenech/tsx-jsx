import * as React from "react";
import { Component, ReactElement, createFactory } from "react";
import { ComponentB } from "./ComponentB"

export class ComponentA extends Component<{}, {}> {
    render() {
        return <ComponentB equalWidth >
            Hi from ComponentA (TSX)
        </ComponentB>;
    }
}
