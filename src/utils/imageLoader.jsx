const imageContext = require.context(
  "public/image",
  false,
  /\.(png|jpe?g|svg)$/
);

const images = {};

imageContext.keys().forEach((key) => {
  const imageName = key.replace("./", "").replace(/\.(svg|jpe?g|png)$/, "");
  images[imageName] = imageContext(key).default;
});

console.log(images);
export default images;
