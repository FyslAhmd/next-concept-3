"use client"

export default function FeedbackCard({ feedback, onUpdate, onDelete }) {
  const { message, date } = feedback

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      {/* Message */}
      <p className="text-gray-800 text-base mb-3">
        {message}
      </p>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">
        {new Date(date).toLocaleString()}
      </p>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onUpdate}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
          onClick={onDelete}
          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
