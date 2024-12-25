"use client";
import React, { useState, useEffect } from "react";

function useFavicon(faviconUrl) {
  useEffect(() => {
    // Find the link element with rel="icon"
    const link = document.querySelector("link[rel='icon']");

    // If it exists, update the href to the new favicon URL
    if (link) {
      link.href = faviconUrl;
    } else {
      // If it doesn't exist, create a new link element for the favicon
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = faviconUrl;
      document.head.appendChild(newLink);
    }
  }, [faviconUrl]); // The effect runs every time the faviconUrl changes
}

const faviconMap = {
  shecodes:
    "https://www.shecodes.io/assets/favicons/favicon-32x32-ef9cc1de3ba7ad6d82e9ad4858c30f59678a695c9c78b52b826bd74f7fc3a02c.png",
  reAct:
    "https://www.reactgroup.org/wp-content/uploads/2020/05/cropped-Favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

export default function App() {
  const [id, setId] = useState("shecodes");

  useFavicon(faviconMap[id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <button
        title="Favicon'u SheCodes logosuna ayarla"
        className={`link ${id === "shecodes" && "active"}`}
        onClick={() => setId("shecodes")}
      >
        SheCodes
      </button>
      <button
        title="Favicon'u ReAct logosuna ayarla"
        className={`link ${id === "reAct" && "active"}`}
        onClick={() => setId("reAct")}
      >
        ReAct
      </button>
      <button
        title="Favicon'u React Newsletter logosuna ayarla"
        className={`link ${id === "react_newsletter" && "active"}`}
        onClick={() => setId("react_newsletter")}
      >
        React Newsletter
      </button>
    </section>
  );
}
