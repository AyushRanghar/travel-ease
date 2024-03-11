"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

function SearchBar() {
  const [showList, setShowList] = useState(false);

  function onClickHandler() {
    console.log(showList);
    setShowList(!showList);
  }
  return (
    <div className="p-5 m-5 bg-pink-800">
      <input
        type="text"
        placeholder="Going to"
        className="rounded-2xl p-2 pt-1 text-blue-900"
        onClick={onClickHandler}
      ></input>
      {showList ? <List></List> : null}
    </div>
  );
}

function List() {
  return (
    <div className="bg-slate-500 size-max rounded-t-md rounded-tr-md">
      <input
        type="text"
        placeholder="Going to"
        className="p-3 text-2xl rounded-t-md rounded-tr-md text-black"
      />
      <p className="p-2 font-bold">Popular Destinations</p>
      <Places city="Amritsar" state="Punjab" country="India" />
      <Places city="Amritsar" state="Punjab" country="India" />
      <Places city="Amritsar" state="Punjab" country="India" />
      <Places city="Amritsar" state="Punjab" country="India" />
      <Places city="Amritsar" state="Punjab" country="India" />
      <Places city="Amritsar" state="Punjab" country="India" />
    </div>
  );
}

function Places({
  city = "Dehradun",
  state = "Uttrakhand",
  country = "India",
}) {
  return (
    <div className="flex gap-2 items-center p-2 hover:bg-slate-700">
      <span>
        <FaLocationDot size={20} />
      </span>
      <span>
        <p>{city}</p>
        <p>
          {state}, {country}
        </p>
      </span>
    </div>
  );
}

export default SearchBar;
