import React, { useState } from "react";

export default function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Loaction
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(Event) => setLocation(Event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
