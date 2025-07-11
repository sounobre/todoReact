import { cx } from "class-variance-authority";
import React from "react";

type MainContentProps = React.ComponentProps<"main">

// comentei por estar dando erro mas a do professor estava assim interface MainContentProps extends React.ComponentProps<"main"> {}

export default function MainContet({children, className, ...props}: MainContentProps){
  return <main className={cx("mt-4 md:mt-8", className)}  {...props}> {children}</main>
}