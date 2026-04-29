"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      issue: (form.elements.namedItem("issue") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#22C55E]/10 border border-[#22C55E] rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-[#0A1628] mb-2">Got it — thanks!</h3>
        <p className="text-[#374151]">
          Kyle will call you back shortly. For emergencies, call directly:{" "}
          <a href="tel:+19105421263" className="text-[#E8651A] font-semibold">910-542-1263</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#374151] mb-1">
          Name <span className="text-[#E8651A]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8651A] focus:border-transparent"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#374151] mb-1">
          Phone <span className="text-[#E8651A]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8651A] focus:border-transparent"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-[#374151] mb-1">
          Address <span className="text-[#E8651A]">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8651A] focus:border-transparent"
          placeholder="Service address"
        />
      </div>
      <div>
        <label htmlFor="issue" className="block text-sm font-semibold text-[#374151] mb-1">
          What&apos;s going on? <span className="text-[#E8651A]">*</span>
        </label>
        <textarea
          id="issue"
          name="issue"
          required
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8651A] focus:border-transparent resize-none"
          placeholder="Describe the issue (clogged drain, no hot water, leak, etc.)"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please call us directly:{" "}
          <a href="tel:+19105421263" className="font-semibold">910-542-1263</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#E8651A] hover:bg-[#F97316] disabled:opacity-50 text-white font-bold py-4 rounded-lg text-lg transition-colors"
      >
        {status === "loading" ? "Sending…" : "Request Service"}
      </button>
    </form>
  );
}
