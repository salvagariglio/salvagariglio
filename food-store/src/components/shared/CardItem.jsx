import React from "react";

const CardItem = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div className=" bg-slate-900 p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
    </div>
  );
};

export default CardItem