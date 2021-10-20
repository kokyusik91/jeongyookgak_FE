import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// action type
const SET_CART = 'SET_CART';
const ADD_CART = 'ADD_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART = 'DELETE_CART';
const UPDATE_PRICE = 'UPDATE_PRICE';
const PLUS_PRICE = 'PLUS_PRICE';
const MINUS_PRICE = 'MINUS_PRICE';

// action Creator
const setCart = createAction(SET_CART, () => ({}));
const addCart = createAction(ADD_CART, (carts) => ({ carts }));
const updateCart = createAction(UPDATE_CART, (user) => ({ user }));
const deleteCart = createAction(DELETE_CART, (productId) => ({ productId }));
// const updateTotal_price = createAction(UPDATE_PRICE, (price) => ({ price }));
const plusPrice = createAction(PLUS_PRICE, (amount) => ({ amount }));
const minusPrice = createAction(MINUS_PRICE, () => ({}));

const initialState = {
  carts_list: [],
  total_Price: 0,
};

// middleware
const updateTotal_priceFB = (price) => {
  return async function (dispatch, getState) {
    console.log(price);
    // const price = cart.map((el) => {
    //   return el.total_Price;
    // });
    // const result = price.reduce(function add(sum, currValue) {
    //   return sum + currValue;
    // }, 0);
    // dispatch(updateTotal_price(result));
  };
};

//Reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        // console.log('리듀서로 들어온', action.payload.carts);
        draft.carts_list = draft.carts_list;
      }),
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        let index = state.carts_list.findIndex((el) => {
          return el.id === action.payload.carts.id;
        });
        if (index >= 0) {
          draft.carts_list[index].count =
            draft.carts_list[index].count + action.payload.carts.count;
        } else {
          draft.carts_list.push(action.payload.carts);
        }
        // console.log(draft.carts_list);
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log('리듀서로 넘어온 productID', action.payload.productId);
        let newArray = state.carts_list.filter((el) => {
          return el.id !== action.payload.productId;
        });
        draft.carts_list = newArray;
      }),
    [PLUS_PRICE]: (state, action) =>
      produce(state, (draft) => {
        // draft.total_Price =
      }),
    [MINUS_PRICE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setCart,
  addCart,
  deleteCart,
  plusPrice,
  minusPrice,
};

export { actionCreators };
