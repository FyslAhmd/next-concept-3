import React from "react";
import ReviewsPage from "./ReviewsPage";
import { Anek_Bangla } from "next/font/google";

const anek = Anek_Bangla({
  weight: ["400", "700"],
  subsets: ["bengali"],
});

export const metadata = {
  title: "Yantun Khaijan | Reviews",
  description: "Best Fastfood in Dhaka",
};

const AllReviews = () => {
  return (
    <div className={`${anek.className}`}>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;
<ReviewsPage></ReviewsPage>;
