import React from "react";

function Category({ finalCategory,setCatname }) {
  let cat = finalCategory.map((v, i) => {
    return (
      <li
      onClick={()=>setCatname(v.name)}
        key={i}
        className="bg-gray-300 p-3 cursor-pointer rounded-md hover:bg-gray-400 transition mb-2"
      >
        {v.name}
      </li>
    );
  });

  return (
    <div>
      <h3 className="text-[25px] font-medium">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
}

export { Category };
