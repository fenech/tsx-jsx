import { ReactNode, StatelessComponent } from "react";

interface ComponentBProps {
    children?: ReactNode
    className?: string;
    equalWidth?: boolean;
}

export const ComponentB: StatelessComponent<ComponentBProps>;
