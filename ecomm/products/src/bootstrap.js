import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context #1
// We are running this file in development in isolation
// We are using local index.html file
// Which DEFINITELY has an element with id 'dev-products'
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  //Assuming our container does not have div with id 'dev-products'
  if (el) {
    mount(el);
  }
}

//Context #2
// We are running this file in development or product
// through the container app
// NO GUARANTEE that an element with id 'dev-products' exists
export { mount };
