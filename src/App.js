import React from "react";

export default function LakePlaceVibesHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-blue-800">Lake Place Vibes</h1>
        <p className="mt-4 text-lg text-blue-600">
          Family, Fishing, and Life on the Water
        </p>
      </header>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg">
          We’re a small family brand inspired by dockside coffee, sunset cruises, fishing poles,
          and floating the day away. We design laid-back apparel that celebrates everything we love:
          boating, fishing, pontoon life, and making memories with the people who matter most.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Shop Our Vibes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-xl rounded-2xl p-4">
            <img src="/dock-days-shirt.png" alt="Dock Days Shirt" className="w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-bold mt-2">Dock Days Tee</h3>
            <p className="text-blue-600">$24.99</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-4">
            <img src="/pontoon-happy-hour.png" alt="Pontoon Shirt" className="w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-bold mt-2">Happy Hour Pontoon Tee</h3>
            <p className="text-blue-600">$24.99</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-4">
            <img src="/lake-place-vibes-fishing.png" alt="Fishing Shirt" className="w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-bold mt-2">Lake Place Fishing Tee</h3>
            <p className="text-blue-600">$24.99</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-10 mt-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Join the Crew</h2>
          <p className="text-gray-700 mb-6">
            Stay updated with new designs, lake memes, and special offers.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-xl border w-2/3 max-w-md"
          />
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </section>

      <footer className="text-center text-blue-500 py-6 text-sm">
        © 2025 Lake Place Vibes. All rights reserved.
      </footer>
    </div>
  );
}
