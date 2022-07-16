import GoogleBookCatalogue from "../components/GoogleBookCatalogue";
import NavbarTwo from "../components/NavbarTwo";
import { useState } from "react";
import React from "react";

function AddBook() {
  const [googleApiResult, setGoogleApiResult] = useState("");

  return (
    <div>
      <NavbarTwo setData={setGoogleApiResult} data={googleApiResult} />
      <GoogleBookCatalogue data={googleApiResult} />
    </div>
  );
}

export default AddBook;
