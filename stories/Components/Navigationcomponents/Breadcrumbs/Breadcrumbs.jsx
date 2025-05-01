import React from "react";
import "./breadcrumbs.scss";

export function Breadcrumbcomponent({ data, Color, rlt_offset, ...args }) {
  const lastIndex = data.length - 1;

  let color = "";
  if (Color == "White") {
    color = "white";
  }

  let moreClasses = args.Cls || "";

  return (
    <nav
      aria-label="breadcrumbs"
      data-viewport="true"
      className={["breadcrumb", `${color}`, moreClasses].join(" ")}
    >
      <ul>
        {data.map((item, i) => {
          if (i === lastIndex) {
            return (
              <li key={i} aria-current={item.text}>
                {item.text}
              </li>
            );
          }

          return (
            <li key={i}>
              <a href="#" aria-label={item.text}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
