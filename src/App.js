import { Header } from "./Header";

export function App() {
  const appContents = (
    <>
      <Header />
      <div className="surroundBox">
        <div className="infobox centerPadding">
          <h2>RSVP</h2>
          <p><i>Ilmoitathan tulostasi 15.8.2025 mennessä alla olevan RSVP-linkin kautta.</i></p>
          <p>Samassa lomakkeessa ilmoitathan allergiat ja muut ruokavaliorajoitteet. Ruoka on kokonaan vegaanista, joten kasvisruokavaliota ei tarvitse erikseen ilmoittaa. Tervetuloa!</p>
          <p><a href="">RSVP - vastaa tästä</a></p>
        </div>
        <div className="infobox centerPadding">
          <div className="inlineLeft">
            <div style={{textAlign: "center"}}><h2>Alustava aikataulu</h2></div>
            <table className="schedule-table">
              <tbody>
                <tr>
                  <td className="time-column">14:30</td>
                  <td className="event-column">Paikalle voi saapua, alkumaljat</td>
                </tr>
                <tr>
                  <td className="time-column">15:00</td>
                  <td className="event-column">Vihkiminen</td>
                </tr>
                <tr>
                  <td className="time-column">16:15</td>
                  <td className="event-column">Päivällinen alkaa</td>
                </tr>
                <tr>
                  <td className="time-column">17:15</td>
                  <td className="event-column">Kuvia hääparin kanssa</td>
                </tr>
                <tr>
                  <td className="time-column">18:30</td>
                  <td className="event-column">Kakun leikkaus</td>
                </tr>
                <tr>
                  <td className="time-column">19:30</td>
                  <td className="event-column">DJ soittaa, vapaata hengailua</td>
                </tr>
                <tr>
                  <td className="time-column">21:55</td>
                  <td className="event-column">Loppuseremonia</td>
                </tr>
              </tbody>
            </table>
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
