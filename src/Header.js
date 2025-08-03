import { nimetImage, pioniImage, vaahteraImage } from "./Images";

export function Header() {
  const leftImage = pioniImage;
  const rightImage = vaahteraImage;

  return (
    <>
      <header className="header">
        <div className="header-images-row">
          <img src={leftImage} alt="Left" className="header-image left-image" />
          <img src={nimetImage} alt="Nimet" className="header-nimet" />
          <img src={rightImage} alt="Right" className="header-image right-image" />
        </div>
      </header>
      <div className="header-center">
        <h2 className="header-date">hääjuhla ~ la 11.10.2025</h2>
        <h2 className="header-event">
          <i>Ravintola Bruket ~ Kaikukatu 3, Helsinki</i> ~&nbsp; 
          <a href="https://maps.app.goo.gl/YQ7M82YjD8eCALaL9" target="_blank" rel="noopener noreferrer" className="map-link">
            (Google Maps)
            <svg className="map-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </a>
        </h2>
      </div>
    </>
  );
}