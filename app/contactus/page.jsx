"use client";

import React from "react";

export default function page() {
  return (
    <section className="w-full min-h-screen  text-white relative overflow-hidden fade-in">
      <div className="body_contanier mx-auto px-6 pt-24">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          {/* Form */}
          <form className="w-full lg:w-1/2 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email" />
              <Input label="Phone Number" />
            </div>

            <div>
              <label className="block text-sm  mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-yellow-400 py-3 resize-none"
                rows={1}
              />
            </div>

            <button
              type="submit"
              className="text-yellow-400 flex items-center gap-2 hover:gap-4 transition-all"
            >
              Send Message
              <span>↗</span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="w-full lg:w-[380px] border border-gray-600 rounded-xl p-8">
            <h3 className="text-yellow-400 text-lg font-semibold mb-6">
              Contact Information
            </h3>

            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                📞 <span>+201020828280</span>
              </li>
              <li className="flex items-center gap-3">
                ✉️ <span>hr@maketoagency.com</span>
              </li>
              <li className="flex items-start gap-3">
                📍
                <span>
                  South Lotus, 8th district, <br />
                  1st Settlement, Cairo, Egypt.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="w-full text-center py-20">
        <h1 className="text-[18vw] leading-none font-bebasneue  text-white">
          LET’S TALK
        </h1>
      </div>
    </section>
  );
}

/* Reusable Input */
function Input({ label }) {
  return (
    <div>
      <label className="block text-sm  mb-2">{label}</label>
      <input
        type="text"
        className="w-full bg-transparent border-b border-white focus:outline-none focus:border-yellow-400 py-2"
      />
    </div>
  );
}
