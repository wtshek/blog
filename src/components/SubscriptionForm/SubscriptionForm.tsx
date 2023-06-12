"use client";

import clsx from "clsx";
import { useState } from "react";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    undefined | "loading" | "error" | "success"
  >();

  const onClick = async () => {
    setStatus("loading");

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({ email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setStatus(res.status === 201 ? "success" : "error");
  };

  return (
    <div className="mt-4 mb-16">
      <input
        placeholder="Email"
        className="border-2 border-secondary py-2 px-5"
        id="mce-EMAIL"
        required
        name="EMAIL"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        className={clsx("bg-secondary py-2 px-5 border-2 border-secondary", {
          "opacity-50": status === "loading",
        })}
        disabled={status === "loading"}
        onClick={onClick}
      >
        Submit
      </button>
      {status === "error" && (
        <div className="text-p-sm text-red-600">
          An error occur. Please try again later
        </div>
      )}
      {status === "success" && (
        <div className="text-p-sm text-green-500">Success!</div>
      )}
    </div>
  );
};
