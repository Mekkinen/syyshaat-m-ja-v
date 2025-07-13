export const pioniImage = new URL('./img/pioni_withoutbg.png', import.meta.url).href;
export const vaahteraImage = new URL('./img/vaahtera.png', import.meta.url).href;

export const imgList = [
  <img src={pioniImage} alt="Pioni" width="200" key="1" />,
  <img src={vaahteraImage} alt="Vaahtera" width="200" key="2" />
];
