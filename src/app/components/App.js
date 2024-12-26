import { useState, useEffect } from "react";

const faviconMap = {
  shecodes:
    "https://www.shecodes.io/assets/favicons/favicon-32x32-ef9cc1de3ba7ad6d82e9ad4858c30f59678a695c9c78b52b826bd74f7fc3a02c.png",
  reAct:
    "https://www.reactgroup.org/wp-content/uploads/2020/05/cropped-Favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

export default function App() {
  const [id, setId] = useState("shecodes");

  useEffect(() => {
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = faviconMap[id];
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <button
        title="Favicon'u SheCodes logosuna ayarla"
        className={`link ${id === "shecodes" ? "active" : ""}`}
        onClick={() => setId("shecodes")}
      >
        SheCodes
      </button>
      <button
        title="Favicon'u ReAct logosuna ayarla"
        className={`link ${id === "reAct" ? "active" : ""}`}
        onClick={() => setId("reAct")}
      >
        ReAct
      </button>
      <button
        title="Favicon'u React Newsletter logosuna ayarla"
        className={`link ${id === "react_newsletter" ? "active" : ""}`}
        onClick={() => setId("react_newsletter")}
      >
        React Newsletter
      </button>
    </section>
  );
}
