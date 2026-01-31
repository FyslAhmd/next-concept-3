import { feedback } from "../route";

export async function GET(request) {
  return Response.json({
    feedback,
  });
}

export async function POST(request) {
  const { message } = await request.json();
  if (!message) {
    return Response.json({
      status: 400,
      message: "Message is required",
    });
  }

  const newFeedback = {
    id: feedback.length + 1,
    message,
  };
  feedback.push(newFeedback);

  return Response.json({
    status: 200,
    message: "Feedback received",
  });
}
