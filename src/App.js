import { Header } from "./Header";

export function App() {
  const appContents = (
    <>
      <Header />
      <div className="surroundBox">
        <div className="infobox boldCenter">
          <p>RSVP</p>
          <p><i>Vastaathan 1.8.2025 mennessä yllä olevan RSVP-linkin kautta</i></p>
        </div>
        <div className="infobox centerPadding">
          <div className="inlineLeft">
            <p>Aikataulu</p>
            <ul>
              <li>14:45 - Paikalle voi saapua, alkumaljat</li>
              <li>15:30 - Vihkiminen</li>
              <li>16:15 - Päivällinen</li>
              <li>18:00 - Jotain</li>
              <li>19:00 - Kakun leikkaus</li>
              <li>20:00 - DJ soittelee, vapaata hengailua</li>
            </ul>
          </div>
        </div>
        <div className="infobox centerPadding">
          <p>Pukukoodi</p>
        </div>
        <div className="infobox centerPadding">
          <p>Häälahjat</p>
        </div>
      </div>
    </>
  )
  return appContents;
}
