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
        <h2 className="header-date">hääjuhla ~ 11.10.2025</h2>
        <h2 className="header-event"><i>Ravintola Bruket - Kaikukatu 3, Helsinki</i></h2>
      </div>
    </>
  );
}