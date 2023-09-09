"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      //resetting the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto bg-black w-full h-full px-10 py-20 ">
      <h1 className="from-yellow-500 via-yellow-100 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent mt-0 md:mt-10 z-10 font-staatliches uppercase text-3xl lg:text-4xl font-bold mb-10 text-center relative">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="md:w-5/6 md:flex mx-auto mb-5">
          <div className="md:w-1/2 w-full flex flex-col">
            <label htmlFor="name" className=" font-bold text-gray-200  mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              minLength={2}
              maxLength={150}
              required
              autoComplete="off"
              className="bg-gray-50 border-gray-100 h-10 border rounded-md p-2"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:ml-10 mt-4 md:mt-0">
            <label htmlFor="email" className="font-bold text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              minLength={5}
              maxLength={150}
              id="email"
              autoComplete="off"
              className="bg-gray-50 border-gray-100 h-10 border rounded-md p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className=" font-bold text-gray-200 mb-5">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            required
            minLength={10}
            maxLength={500}
            placeholder="Write your message here"
            className="bg-gray-50 border-gray-100 w-full  border rounded-md p-2 mt-4"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 mt-4 w-40 bg-gray-700 text-white font-medium disabled:bg-gray-400 disabled:text-gray-100 border rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
