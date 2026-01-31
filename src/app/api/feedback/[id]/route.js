import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;
  const singleFeedback = feedback.find((f) => f.id == id) || {
    message: "Feedback not found",
  };
  return Response.json({
    status: 200,
    singleFeedback,
  });
}
