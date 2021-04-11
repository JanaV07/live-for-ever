export default function Header() {
  return (
    <div className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <a href="#top" className="navbar-brand smoothScroll">
           <b> <em>LIVE</em> FOREVER</b>
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#top" className="smoothScroll">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#gallery" className="smoothScroll">
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
