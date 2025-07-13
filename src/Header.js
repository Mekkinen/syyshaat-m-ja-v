import { pioniImage, vaahteraImage } from "./Images";

export function Header() {
  const leftImage = pioniImage;
  const rightImage = vaahteraImage;

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        height: '60px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <img src={leftImage} alt="Left" style={{ height: '200px' }} />
      
      <h1 style={{ margin: '0', textAlign: 'center', flexGrow: 1 }}>
        Mea & Valtteri
      </h1>
      
      <img src={rightImage} alt="Right" style={{ height: '180px' }} />
      
    </header>
  );
}
