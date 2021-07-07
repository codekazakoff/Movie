import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ isLike, onClick }) => {
  const Icon = isLike ? AiFillHeart : AiOutlineHeart;
  return (
    <Icon size="2rem" color="#ff5252" className="mx-2 like" onClick={onClick} />
  );
};

export default Like;
