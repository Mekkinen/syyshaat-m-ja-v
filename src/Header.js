import { nimetImage, pioniImage, vaahteraImage } from "./Images";

export function Header() {
  const leftImage = pioniImage;
  const rightImage = vaahteraImage;

  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '100px',
          borderBottom: '3px solid #000',
          marginTop: '12em',
        }}
      >
        <img src={leftImage} alt="Left" style={{ height: '240px' }} />
        
        <img src={nimetImage} alt="Nimet" style={{ height: '200px' }}/>
        {/* <h1 style={{ margin: '0', textAlign: 'center', flexGrow: 1 }}>
          Mea & Valtteri
        </h1> */}
        
        <img src={rightImage} alt="Right" style={{ height: '200px' }} />

      </header>
      <h2 style={{ margin: '0', paddingTop: '1.5em', textAlign: 'center', flexGrow: 1 }}>
          11.10.2025
        </h2>
        <h2 style={{ margin: '0', textAlign: 'center', flexGrow: 1 }}>
          <i>hääjuhla</i>
      </h2>
    </>
  );
}
