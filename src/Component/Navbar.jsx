import React, { use, useEffect, useState } from "react";
import { Link,useNavigate,useSearchParams } from "react-router-dom";

export default function Navbar() {
  let [search,setSearch]=useState("");
  let[q,setQ]=useState("");
  let [language,setLanguage]=useState("")
  let [searchParams]=useSearchParams()
  let navigate=useNavigate();
  function postSearch(e){
    e.preventDefault();
    navigate(`/?q=${search}&language=${language}`);
  }
  useEffect(()=>{
    setQ(searchParams.get("q")??"All");
    setLanguage(searchParams.get("language")??"hi");
  },[searchParams])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to={`/?language=${language}`}>
            New<span className=""><img src="/public/epaper.png" width={50}/></span>App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to={`/?language=${language}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Politics&language=${language}`}>
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Crime&language=${language}`}>
                  Crime
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Education&language=${language}`}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=science&language=${language}`}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Technology&language=${language}`}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Cricket&language=${language}`}>
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={`/?q=Sport&language=${language}`}>
                  Sport
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/?q=Entertainment&language=${language}`}>
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=Economics&language=${language}`}>
                      Economics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=World&language=${language}`}>
                      World
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=India&language=${language}`}>
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=Jokes&language=${language}`}>
                      Jokes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&language=hi`}>
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&language=en`}>
                      English
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&language=fr`}>
                      French
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&language=ur`}>
                      Urdu
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&language=de`}>
                      German
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search" onSubmit={postSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
