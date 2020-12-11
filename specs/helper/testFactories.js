import '../../src/scripts/components/favorite-button';

const createFavoriteButtonElement = async (restaurant) => {
  const node = document.createElement('favorite-button');
  node.restaurant = restaurant;
  document.body.appendChild(node);
  await node.updateComplete;
  return node;
};

export default createFavoriteButtonElement;
