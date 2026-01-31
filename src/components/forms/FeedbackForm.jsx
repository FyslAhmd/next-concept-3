"use client";
import React from "react";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message == "Feedback received") {
      alert("Feedback added successfully");
      e.target.reset();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10"
      >
        <textarea
          className="w-xl border-2 border-red-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          id=""
          required
          cols={30}
          rows={10}
        ></textarea>
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
