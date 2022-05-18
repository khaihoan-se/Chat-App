import React from "react";
import Header from "@/components/partials/Header";
import ListFreinds from "@/components/partials/ListFreinds";

interface BaseLayoutProps {
   children: any
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
   return (
      <div className="next--app">
         <img className="bg--img max-w-[500px] absolute z-50" src="./docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif" alt="" />
         <Header />
         <ListFreinds />
         <div className="main">{children}</div>
      </div>
   )
}

export default BaseLayout;