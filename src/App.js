import { Header } from "./Header";

export function App() {
  const appContents = (
    <>
      <Header />
      <div>
        <h2 style={{ margin: '0', textAlign: 'center', flexGrow: 1 }}>
          <i>11.10.2025</i>
        </h2>
        <h2 style={{ margin: '0', textAlign: 'center', flexGrow: 1 }}>
          <i>hääjuhla</i>
        </h2>
        <div style={{ fontWeight: 'bolder', textAlign: 'center', paddingTop: '4em', flexGrow: 1 }}>
          <p>RSVP</p>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '4em', flexGrow: 1 }}>
          <p>Aikataulu</p>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '4em', flexGrow: 1 }}>
          <p>Pukukoodi</p>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '4em', flexGrow: 1 }}>
          <p>Häälahjat</p>
        </div>
      </div>
    </>
  )
  return appContents;
}
