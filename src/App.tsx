import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import MobileSpecification from "./components/MobileSpecification";
import FloatingIcon from "./FloatingIcon";

function App() {
  const [query, setQuery] = useState("");
  const [specifications, setSpecifications] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const apiURL = `https://web-scraper-server-express-ts-cheerio.onrender.com/scrape?url=https://www.google.com/search?q=${encodeURIComponent(
      query
    )}+91mobiles.com`;

    axios
      .get(apiURL)
      .then((response) => {
        setSpecifications(response.data.specifications);
        setLoading(false);
        if (!response.data.specifications.general.name) {
          setNoData("No data available");
        } else {
          setNoData(null);
        }
      })
      .catch((error) => {
        setNoData("There was an error fetching the data! " + error);
        setLoading(false);
      });
  };

  const handleClear = () => {
    setQuery("");
    setSpecifications(null);
    setNoData(null);
  };

  return (
    <Container className="my-4">
      <nav className="navbar navbar-light bg-light mb-5">
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand mb-0 h1 text-center">
            Web scraper - Vite + React + TS + Bootstrap CSS + Cheerio (In nodejs)
          </span>
        </div>
      </nav>
      <div className="d-flex justify-content-center mb-4">
        <form onSubmit={handleSubmit} className="d-flex w-50">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Enter your mobile name or model"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary me-1">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
          Clear
        </button>
        </form>
        
      </div>
      {noData && (
        <div className="alert alert-danger w-25" role="alert" style={{ marginLeft: "350px" }}>
          {noData}
        </div>
      )}
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {specifications &&
        specifications.general &&
        specifications.general.name && (
          <MobileSpecification
            specifications={specifications}
          />
        )}
        <FloatingIcon />
    </Container>
  );
}

export default App;
