import { Dict } from "../types";

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */
const filterProduct = (filters: Dict) => (product: Dict): boolean => {
  // todo: implement filter by `price` and `quantity`
  // todo: make filter by `name` a case-insensitive
  return !filters.name || product.name.includes(filters.name);
};

export default filterProduct;
