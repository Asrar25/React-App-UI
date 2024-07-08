import React from "react";

export default function SubmitPop({visible,onClose}){
    if(!visible)return null;

  return <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center gap-2 items-center">
        <p>Form Submitted Successfully</p>
        <button className="bg-white p-2 rounded " onClick={onClose}>X</button>
  </div>
}