import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export default function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");

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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(Event) => setAnimal(Event.target.value)}
            onBlur={(Event) => setAnimal(Event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
