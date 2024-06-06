import { React } from "react";
import "./Input.css";
export function Input({ value, onChange }) {
  return (
    <input className="input" type="text" value={value} onChange={onChange} />
  );
}