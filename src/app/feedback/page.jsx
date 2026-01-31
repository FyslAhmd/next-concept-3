import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

const getFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
};

export const metadata = {
  title: "Feedbacks - Yantun Khaijan",
  description: "Customer feedbacks for Yantun Khaijan",
};

const FeedbackPage = async () => {
  const { result: feedback } = await getFeedbacks();
  console.log(feedback);
  return (
    <div>
      <h2 className="py-4 text-2xl font-bold">
        Total Feedback {feedback.length}
      </h2>
      <div className="pb-4">
        <Link href={"/feedback/add"} className="btn">
          Add Feedback
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
