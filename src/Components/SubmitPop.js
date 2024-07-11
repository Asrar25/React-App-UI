import React from "react";

export default function SubmitPop({ visible, handleOnClose }) {
  if (!visible) return null;

  return <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center gap-2 items-center">
    <div className="bg-white flex rounded-md ">
    <p className="p-4 mt-1 block text-gray-700 text-sm font-bold">Form Submitted Successfully</p>
    <button className="mb-5 px-1" onClick={handleOnClose} >X</button>
    </div>
  </div>
}