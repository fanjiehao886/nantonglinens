"use client";

export default function ContactForm() {
  return (
    <form
      action="#"
      onSubmit={(e) => e.preventDefault()}
      className="mt-6 space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Subject
        </label>
        <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none">
          <option>General Inquiry</option>
          <option>Product Question</option>
          <option>Sample Request</option>
          <option>Order Status</option>
          <option>Become a Distributor</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message *
        </label>
        <textarea
          rows={5}
          required
          placeholder="Tell us what you need..."
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
