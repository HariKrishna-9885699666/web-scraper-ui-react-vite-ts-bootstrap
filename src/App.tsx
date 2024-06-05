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
    <Container fluid className="my-4">
      <header
        className="d-flex justify-content-center align-items-center mb-5"
        style={{ backgroundColor: "#f0f0f0", padding: "2rem" }}
      >
        <h3 className="text-center text-dark">
          Web scraper - Vite + React + TS + Bootstrap CSS + Cheerio (In nodejs)
        </h3>
      </header>

      <div className="d-flex justify-content-center mb-4">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-sm-row w-100 w-sm-50"
        >
          <input
            type="text"
            className="form-control mr-2 mb-2 mb-sm-0"
            placeholder="Enter your mobile name or model"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <div className="d-flex">
            <button type="submit" className="btn btn-primary me-1">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      {noData && (
        <div className="alert alert-danger w-100 w-sm-25 mx-auto" role="alert">
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
          <MobileSpecification specifications={specifications} />
        )}

      <FloatingIcon />
    </Container>
  );
}

export default App;
