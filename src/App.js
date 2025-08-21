import { Header } from "./Header";

export function App() {
  const appContents = (
    <>
      <Header />
      <div className="surroundBox">
        <div className="infobox centerPadding">
          <h2 className="mid-header">RSVP</h2>
          <p><i>Ilmoitathan tulostasi ja avecistasi alla olevan RSVP-linkin kautta.</i></p>
          <p>Lapset ovat myös tervetulleita! Samassa lomakkeessa ilmoitathan allergiat ja muut ruokavaliorajoitteet. Ruoka on kokonaan vegaanista, joten kasvisruokavaliota ei tarvitse erikseen ilmoittaa. Tervetuloa!</p>
          <div className="button-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfx87T5RfoRb0i_4ChPofpWA17jNnU98dcAgU5m0dmLsf-Mnw/viewform?usp=header" className="styled-button">RSVP - vastaa tästä</a>
          </div>
        </div>
        <div className="infobox centerPadding">
          <div className="inlineLeft">
            <div className="mid-header" style={{textAlign: "center"}}><h2>Alustava aikataulu</h2></div>
            <table className="schedule-table">
              <tbody>
                <tr>
                  <td className="time-column">14:30</td>
                  <td className="event-column">Paikalle saapuminen, alkumaljat</td>
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
                  <td className="time-column">21:25</td>
                  <td className="event-column">Loppuseremonia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="infobox centerPadding">
          <h2 className="mid-header">Pukukoodi</h2>
          <p>Pukukoodina on juhlapukeutuminen, mutta älä turhaan ota stressiä siitä, oletko tarpeeksi juhlava tai ylipukeutunut.</p>
        </div>
        <div className="infobox centerPadding">
          <h2 className="mid-header">Häälahjat</h2>
          <p>Mikäli haluat lahjoa meitä ja taloudellinen tilanteesi sen sallii, toivomme lahjoitusta häämatkakassaan!</p>
          
          <div className="copy-field-container">
            <div className="copy-field">
              <span>Tilinumero</span>
              <input 
                type="text" 
                value="FI18 3636 3010 4953 98" 
                id="accountNumber" 
                readOnly
                onClick={(e) => e.target.select()}
              />
              <button 
                onClick={() => {
                  const accountNumber = document.getElementById('accountNumber');
                  accountNumber.select();
                  document.execCommand('copy');
                  const button = document.getElementById('copyButton');
                  button.textContent = 'Kopioitu!';
                  setTimeout(() => {
                    button.textContent = 'Kopioi';
                  }, 2000);
                }}
                id="copyButton"
              >
                Kopioi
              </button>
            </div>
            <div className="copy-field">
              <span>Saaja</span>
              <input 
                type="text" 
                value="Mea Ekroos" 
                id="recipientName" 
                readOnly
                onClick={(e) => e.target.select()}
              />
              <button 
                onClick={() => {
                  const recipientName = document.getElementById('recipientName');
                  recipientName.select();
                  document.execCommand('copy');
                  const button = document.getElementById('copyNameButton');
                  button.textContent = 'Kopioitu!';
                  setTimeout(() => {
                    button.textContent = 'Kopioi';
                  }, 2000);
                }}
                id="copyNameButton"
              >
                Kopioi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return appContents;
}
