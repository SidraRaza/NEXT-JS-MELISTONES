import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import React from "react";

export default async function Index() {
  return (
    <>
     <Navbar />
     <div className="min-h-screen bg-gray-100">
      <TodoList/>
    </div>
   
    </>
  );
}