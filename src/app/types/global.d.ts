declare module "*.module.scss" {
  const classes: Record<string, string>;
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

declare const _IS_DEV_: boolean;
declare const _API_: string;
declare const _PROJECT_: "frontend" | "jest" | "storybook"
