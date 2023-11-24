import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import { format } from "date-fns";
import Navigation from "./components/Navigation";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("football");
  const [text, setText] = useState("");
  const [largeTitle, setLargeTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    const fetchArticles = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      setItems(data.hits);
      setLargeTitle(data.hits[0]);
    };
    fetchArticles();
    setIsLoading(false);
  }, [query]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Type your input");
    } else {
      setQuery(text);
      setText("");
    }
  };
  return (
    <>
      <Navigation />
      <div className="section">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="section-search"
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search your topic"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Search</button>
        </form>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <article className="title">
              <h1>{largeTitle.title}</h1>
              <a href="">Read Full Article</a>
            </article>
            <p className="category">
              Category: <span>{query}</span>
            </p>

            <div className="cards">
              {items.map(({ author, created_at, title, url, objectId }) => (
                <div key={objectId} className="cards-details">
                  <h2>{title}</h2>
                  <div>
                    <div>
                      <p>By {author}</p>
                      <p>{format(new Date(created_at), "dd MMMM yyyy")}</p>
                    </div>
                    <div id="read-full">
                      <a href={largeTitle.url} target="blank" rel="noreferrer">
                        Read Full article{" "}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <footer>
        <div>
          <ul className="footer-menu">
            <li>
              <a href="#">Guidelines</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Lists</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Secruity</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Apply to YC</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
