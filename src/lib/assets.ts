const CDN = "https://paintingdemons.com/cdn/shop/t/55/assets/";
export const asset = {
  ig: CDN + "ig.webp?v=174878326183595941691790206086",
  cyberengine: CDN + "cyberengine.webp?v=97205802767963022971790206086",
  cart: CDN + "cart.svg?v=175679798737463365021790206086",
  logo: CDN + "dontpaintdemonslogo.webp?v=59660870887178035561790206086",
  favicon: CDN + "favicon.webp?v=71273948293460000841790206086",
  kryptoidLogo: CDN + "kryptoid-logo.png?v=100518093559378821921790206086",
  sigilsCss: CDN + "veil-sigils.css?v=34699824076739333791790206086",
  sigilsJs: CDN + "veil-sigils.js?v=149943373320801718141790206086",
};
export const money = (amount: string, currency: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(Number(amount));
