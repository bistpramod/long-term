import type { ReactNode } from "react";
// props 
// props are an object data 
// props are readonly data 
interface IH1Props {
  className?: string;
  children: ReactNode;
}



// export const H1 = (props: Readonly<IH1Props>) => {
export const H1 = ({className= 'text-green-900', children}: Readonly<IH1Props>) => {
  // object data type 
  // state -> hook
  // {props.children}
  return <h1 className={`text-6xl font-semibold ${className}`}>
    {children}
  </h1>;
}