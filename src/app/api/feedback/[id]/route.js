import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  return Response.json({
    status: 200,
    result,
  });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  if (!message) {
    return Response.json({
      status: 400,
      message: "Message is required",
    });
  }
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message,
      date: new Date().toISOString(),
    },
  };
  const result = await feedbackCollection.updateOne(query, newData);
  return Response.json({
    status: 200,
    result,
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);
  return Response.json({
    status: 200,
    result,
  });
}
