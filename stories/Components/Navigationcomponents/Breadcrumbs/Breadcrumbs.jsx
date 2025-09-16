import React from "react";
import "./breadcrumbs.scss";
import isChromatic from "chromatic/isChromatic";

export function Breadcrumbcomponent({ data, colorTheme, rlt_offset, ...args }) {
  const lastIndex = data.length - 1;

  let color = "";
  if (colorTheme == "dark") {
    color = "white";
  }

  let moreClasses = args.Cls || "";

  return (
    <nav
      aria-label="breadcrumbs"
      data-viewport={isChromatic() ? '' : 'true'}
      className={["breadcrumb", `${color}`, moreClasses, isChromatic() ? 'inviewport' : ''].join(" ")}
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
