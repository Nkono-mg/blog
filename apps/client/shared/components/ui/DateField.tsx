"use client";

import { useState, forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";

import { fr } from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";

import { FaRegCalendarAlt } from "react-icons/fa";

/* Register French locale */
registerLocale("fr", fr);

const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "rgb(255, 255, 255)",
      borderRadius: "8px",
      padding: "8px 12px",
      gap: "8px",
    }}
  >
    <FaRegCalendarAlt />

    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        width: "100%",
      }}
    />
  </div>
));

CustomInput.displayName = "CustomInput";

export default function DateField() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
      placeholderText="Sélectionner une date"
      isClearable
      locale="fr"
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
    />
  );
}
