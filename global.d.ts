 declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.mp4' {
  const src: string;
  export default src;
}
