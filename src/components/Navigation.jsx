function Navigation() {
  return (
    <>
      <nav>
        <div id="header-bar">
          <div id="nav-area">
            <div id="logo-area">
              <img
                src="https://news.ycombinator.com/y18.svg"
                alt="logo"
                width="40px"
                height="40px"
              />
              <p>HackerNews</p>
            </div>
            <div className="navi-bar">
              <ul className="first-bar">
                <li>
                  <a href="#">new</a>
                </li>
                <li>
                  <a href="#">past</a>
                </li>
                <li>
                  <a href="#">comments</a>
                </li>
                <li>
                  <a href="#">ask</a>
                </li>
                <li>
                  <a href="#">show</a>
                </li>
                <li>
                  <a href="#">jobs</a>
                </li>
                <li>
                  <a href="#">submit</a>
                </li>
                <li>
                  <div id="updated-date" />
                  DATE
                </li>
              </ul>
            </div>
          </div>
          <div id="login-area">
            <a href="#">login</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
