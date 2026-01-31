export const feedback = [
  {
    message: "Great service!",
    id: 1,
  },
  {
    message: "Could be improved.",
    id: 2,
  },
  {
    message: "Excellent experience.",
    id: 3,
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Api Worked",
  });
}
