import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import restaurants from "./restaurants.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchResult from "./components/SearchResult";
import Container from "react-bootstrap/Container";
import RegionDropdown from "./components/RegionDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from "@material-ui/core/styles";
import CountyCarousel from "./components/CountyCarousel";
import Navbar from "react-bootstrap/Navbar";
import blmLogo from "./components/blmLogo.ico";

const useStyles = makeStyles(theme => ({
  input: {
    height: 3
  },
  root: {
    backgroundColor: "white"
  }
}));

function App() {
  const [posts, setPosts] = useState(0);
  const [county, setCounty] = useState("Atlantic");
  const atlantic = restaurants.filter(restaurant => {
    return restaurant.county === county;
  });
  const [currentList, setList] = useState(atlantic);
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState("");
  const [found, setFound] = useState(false);
  const [region, setRegion] = useState("South");
  const [regionChanged, setRegionChanged] = useState(false);
  const wrapperRef = useRef(null);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setPosts(() => (pageNumber === 1 ? 0 : (pageNumber - 1) * 12));
  };

  const filterCounty = county => {
    const newList = restaurants.filter(restaurant => {
      return restaurant.county === county;
    });
    setList(newList);
    paginate(1);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setFound(false);
    }
  };

  const closeModal = () => {
    setFound(false);
  };

  const classes = useStyles();

  const onRegionChange = region => {
    setRegion(region);
    if (region === "North") {
      setCounty("Bergen");
      filterCounty("Bergen");
      setRegionChanged(true);
    }
    if (region === "Central") {
      setCounty("Middlesex");
      filterCounty("Middlesex");
      setRegionChanged(true);
    }
    if (region === "South") {
      setCounty("Atlantic");
      filterCounty("Atlantic");
      setRegionChanged(true);
    }
  };

  const onCountyChange = county => {
    setCounty(county);
    filterCounty(county);
  };

  const resetRegion = val => {
    setRegionChanged(false);
  };

  return (
    <div className="App">
      <Header />
      <Container id="main-container">
        <div className="center">
          <Container md="auto" className="row-container">
            <Row>
              <Col md="auto" className="left">
                <RegionDropdown changeRegion={onRegionChange} region={region} />
              </Col>
              <Col md="auto" style={{ paddingTop: "9px" }}>
                <div>Or</div>
              </Col>
              <Col>
                <Autocomplete
                  style={{ width: "100%" }}
                  classes={classes}
                  onChange={(event, value) => {
                    const resultOb = restaurants.find(ob => ob.name === value);
                    if (resultOb) {
                      setResult(resultOb);
                      setFound(!found);
                    } else {
                      setFound(false);
                    }
                  }}
                  id="free-solo-demo"
                  freeSolo
                  options={restaurants.map(option => option.name)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Search for a business"
                      margin="none"
                      variant="outlined"
                    />
                  )}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ paddingLeft: "40px" }}>
          <h3>{region + " Jersey"}</h3>
        </div>
        <CountyCarousel
          reset={regionChanged}
          onRegionChange={resetRegion}
          onCountyChange={onCountyChange}
          index={0}
          county={region}
        />
        <div className="center">
          <div className="blm-inform">
            <img src={blmLogo} />* Black-Owned Business
          </div>
        </div>
        {found ? <SearchResult result={result} onClose={closeModal} /> : ""}
        <CardContainer
          currentPage={currentPage}
          paginate={paginate}
          posts={posts}
          restaurants={currentList}
        />
      </Container>
      <Navbar sticky="bottom" id="footer" className="center">
        <Navbar.Text style={{ color: "white", fontSize: "1.5rem" }}>
          Built with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Eddy, Eileen, & Rebecca{" "}
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default App;
