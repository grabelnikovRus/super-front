declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import React = require("react");
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}
  
declare module "*.png" {
    const content: string;
    export default content;
}