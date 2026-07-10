"use client";

import Window from "../os/Window";

export default function CaptureApp() {
  return (
    <Window app="capture" title="Quick Capture">
      <div className="w-[500px] p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Quick Capture
        </h2>

        <div className="space-y-4">
          <input
            placeholder="Title"
            className="w-full rounded-xl border p-3"
          />

          <textarea
            placeholder="What clicked?"
            className="h-24 w-full rounded-xl border p-3"
          />

          <textarea
            placeholder="What confused me?"
            className="h-24 w-full rounded-xl border p-3"
          />

          <input
            placeholder="Command used"
            className="w-full rounded-xl border p-3"
          />

          <button
            className="rounded-xl bg-pink-500 px-4 py-2 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </Window>
  );
}