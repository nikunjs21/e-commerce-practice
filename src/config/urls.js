const WEB_API_KEY = 'AIzaSyDCcHRerH-sVbc2m_iwDj1hjOvLiQmi_pk';
export const URL_SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + WEB_API_KEY;
export const URL_SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + WEB_API_KEY;

const URL_REALDB = 'https://e-commerce-ea4c8-default-rtdb.firebaseio.com';
export const URL_FIRE_CART = URL_REALDB + '/cart.json';

export const URL_PRODUCTS = 'https://fakestoreapi.com/products';
export const URL_PRODUCT = (id) => 'https://fakestoreapi.com/products/' + id;
export const URL_LIMITED_PRODUCTS = (limit) => 'https://fakestoreapi.com/products?limit=' + limit;
export const URL_PRODUCTS_DESC = 'https://fakestoreapi.com/products?sort=desc';

export const URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';
export const URL_CATEGORY_PRODUCTS = category => 'https://fakestoreapi.com/products/category' + category;

/**
 * @method GET
 */
export const URL_CART = 'https://fakestoreapi.com/carts';
/**
 * @method POST
 */
export const URL_ADD_TO_CART = 'https://fakestoreapi.com/carts';
/**
 * 
 * @param {number} cartId 
 * @returns string
 * @method PUT
 */
export const URL_UPDATE_CART = cartId => 'https://fakestoreapi.com/carts/' + cartId;

/**
 * 
 * @param {number} cartId 
 * @returns string
 * @method DELETE
 */
export const URL_DELETE_CART = cartId => 'https://fakestoreapi.com/carts/' + cartId; // method: DELETE