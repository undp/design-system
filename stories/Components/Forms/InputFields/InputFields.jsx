import React, { useEffect, useRef } from "react";
import "./input-fields.scss";
import "../../../assets/scss/_typography.scss";

const cls = (...classes) =>
  classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(" ") : null;

export function Inputcomponent({
  type,
  element,
  placeholder,
  labelText,
  errorText,
  helpText,
  State,
  id,
  locale,
}) {
  const InputTag = `${element}`;
  let state;
  const states = ["Focus", "Error", "Disabled"];
  state = states.includes(State) ? State.toLowerCase() : "";
  const inputElement = useRef(null);
  useEffect(() => {
    if (state == "focus") {
      inputElement.current.focus();
    } else {
      inputElement.current.blur();
    }
    // State initialization when the page is loaded
    updateInputState();

    // Update state when the value changes
    inputElement.current.addEventListener("input", updateInputState);

    // Handle range input progress fill
    if (type === "range") {
      updateRangeProgress();
      inputElement.current.addEventListener("input", updateRangeProgress);
    }

    return () => {
      inputElement.current?.removeEventListener("input", updateInputState);
      if (type === "range") {
        inputElement.current?.removeEventListener("input", updateRangeProgress);
      }
    };
  }, [state]);

  const updateRangeProgress = () => {
    if (type === "range" && inputElement.current) {
      const value = inputElement.current.value;
      const min = inputElement.current.min || 0;
      const max = inputElement.current.max || 100;
      const percentage = ((value - min) / (max - min)) * 100;
      inputElement.current.style.setProperty("--range-progress", `${percentage}%`);
    }
  };

  const updateInputState = () => {
    if (inputElement.current.value) {
      inputElement.current.classList.remove("empty");
      inputElement.current.classList.add("filled");
    } else {
      inputElement.current.classList.remove("filled");
      inputElement.current.classList.add("empty");
    }
  };

  return (
    <>
      {labelText && (
        <label
          className={cls(`${state}` == "disabled" ? `${state}` : "")}
          htmlFor={[`${type}`]}
        >
          {labelText}
        </label>
      )}
      <InputTag
        className={cls(`${state}` !== "focus" ? `${state}` : "")}
        ref={inputElement}
        type={type}
        disabled={State == "Disabled"}
        placeholder={
          type === "tel" && locale === "arabic" ? "٨٧٦٩ - ٧٤٥" : placeholder
        }
        name={type}
        id={id}
        {...(labelText ? "" : { "aria-label": placeholder })}
      />
      {helpText && <p className="help">{helpText}</p>}
      {State == "Error" && <p className="error">{errorText}</p>}
    </>
  );
}
