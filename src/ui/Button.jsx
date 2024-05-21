import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "  text-sm inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500  focus:ring-offset-2 active:bg-slate-400  disabled:cursor-not-allowed sm:px-6  sm:py-4";

  const style = {
    primary: base + " px-4 py3 md:px-6 md:py4",
    small: base + " px-4 py-2 md:px-5 md:py2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      " text-sm inline-block rounded-full  border-2 border-stone300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-400 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-500  focus:ring-offset-2 active:bg-slate-400  disabled:cursor-not-allowed sm:px-6  sm:py-4 px-4 py3 md:px-6 md:py4",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={style[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
