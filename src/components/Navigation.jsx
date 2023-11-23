function Navigation() {
  function fullDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const fullDate = day + "/" + month + "/" + year;
    return fullDate;
  }

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
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/">comments</a>
                </li>
                <li>
                  <div id="updated-date" />
                  {fullDate()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
