import React from "react";

function Card({ title, price, details: { description, manufacturer } }) {
  return (
    <>
      {/* <img src="https://picsum.photos/500/200?grayscale" alt="" />
      <h1 classNameName="p-3 bg-green-400 text-3xl">its cards buttom</h1>
      <p >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quo!
      </p> */}
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="data:image/png;base64,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"
          alt=""
          width="384"
          height="512"
        />
        <div classNameName="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {description}
              <br></br>
              {manufacturer}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{title}</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer,${price}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;
