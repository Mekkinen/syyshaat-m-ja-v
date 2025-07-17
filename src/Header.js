import { nimetImage, pioniImage, vaahteraImage } from "./Images";

export function Header() {
  const leftImage = pioniImage;
  const rightImage = vaahteraImage;

  return (
    <>
      <header className="header">
        <img src={leftImage} alt="Left" className="header-image left-image" />
        <div className="header-center">
          <img src={nimetImage} alt="Nimet" className="header-nimet" />
          <h2 className="header-date">11.10.2025</h2>
          <h2 className="header-event"><i>hääjuhla</i></h2>
        </div>
        <img src={rightImage} alt="Right" className="header-image right-image" />
      </header>
    </>
  );
}