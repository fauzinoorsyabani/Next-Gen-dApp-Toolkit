// Waitlist.js
"use client";
import React, { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    // mock submit for now
    setOk(true);
    setEmail("");
    setTimeout(() => setOk(null), 2500);
  };

  return (
    <form onSubmit={submit} className="relative rounded-lg bg-white/5 p-4">
      <label htmlFor="email" className="sr-only">Email</label>
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 rounded-md border border-border/40 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/50">
          Join
        </button>
      </div>

      {ok === true && <div role="status" className="mt-3 text-sm text-green-400">Thanks — we’ll email you!</div>}
      {ok === false && <div role="alert" className="mt-3 text-sm text-red-400">Something went wrong.</div>}
    </form>
  );
}
