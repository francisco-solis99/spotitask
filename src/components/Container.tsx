import React from "react";

type ContainerProps = {
  children: React.ReactElement
}

export default function Container(props: ContainerProps) {
  // console.log('render container');
  return (
    <div className="container">
      {props.children}
    </div>
  );
}
