const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Importing images for Menu
const menuImages = importAll(require.context('../Data/', true, /\.(jpg|jpeg|png)$/));

// Importing images for Product
const productImages = importAll(require.context('../ProductData/', true, /\.(jpg|jpeg|png)$/));

export { menuImages, productImages };
