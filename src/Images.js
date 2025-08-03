export const pioniImage = new URL('./img/pioni_withoutbg.png', import.meta.url).href;
export const vaahteraImage = new URL('./img/vaahtera5.png', import.meta.url).href;
export const nimetImage = new URL('./img/nimet.png', import.meta.url).href;

export const imgList = [
  <img src={pioniImage} alt="Pioni" key="1" />,
  <img src={vaahteraImage} alt="Vaahtera" key="2" />,
  <img src={nimetImage} alt="Nimet" key="3" />
];
