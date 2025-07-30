import { Header } from "./Header";

export function App() {
  const appContents = (
    <>
      <Header />
      <div className="surroundBox">
        <div className="infobox centerPadding">
          <h2>RSVP</h2>
          <p><i>Ilmoitathan tulostasi 10.8.2025 mennessä alla olevan RSVP-linkin kautta</i></p>
          <p>Samassa lomakkeessa ilmoitathan allergiat ja muut ruokavaliorajoitteet. Ruoka on kokonaan vegaanista, joten kasvisruokavaliota ei tarvitse erikseen ilmoittaa. Tervetuloa!</p>
          <p><a href="">RSVP - vastaa tästä</a></p>
        </div>
        <div className="infobox centerPadding">
          <div className="inlineLeft">
            <div style={{textAlign: "center"}}><h2>Aikataulu</h2></div>
            <ul>
              <li>14:45 - Paikalle voi saapua, alkumaljat</li>
              <li>15:30 - Vihkiminen</li>
              <li>16:15 - Päivällinen alkaa</li>
              <li>17:10 - Kuvia hääparin kanssa</li>
              <li>19:00 - Kakun leikkaus</li>
              <li>20:00 - DJ soittaa, vapaata hengailua</li>
              <li>21:55 - Loppuseremonia</li>
            </ul>
          </div>
        </div>
        <div className="infobox centerPadding">
          <h2>Pukukoodi</h2>
          <p>Pukukoodina on juhlapukeutuminen, mutta älä turhaan ota stressiä siitä, oletko tarpeeksi juhlava tai ylipukeutunut.</p>
        </div>
        <div className="infobox centerPadding">
          <h2>Häälahjat</h2>
          <p>Mikäli haluat lahjoa meitä ja taloudellinen tilanteesi sen sallii, toivomme lahjoitusta häämatkakassaan! Tilinumeromme on <i>FI18 3636 3010 4953 98</i>, saaja <i>Mea Ekroos</i>.</p>
        </div>
      </div>
    </>
  )
  return appContents;
}
