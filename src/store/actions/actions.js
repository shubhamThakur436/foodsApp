import { ADD_ITEM, FETCH_PRICES, LOGIN, LOGOUT, REMOVE_ITEM } from "./actionTypes";

export const addItem = (name) => {
      return {
            type: ADD_ITEM,
            name
      }
}

export const removeItem = (name) => {
      return {
            type: REMOVE_ITEM,
            name
      }
}

export const fetchPrices = () => {
      return (dispatch) => {
            fetch("/assets/data/feeds.json")
                  .then(response => response.json())
                  .then(data => {
                        let items = {

                        }
                        data.feeds.forEach(i => {
                              items[i.name] = {
                                    price: i.price,
                                    image: i.image,
                                    count: 0
                              };
                        })
                        let actionObject = {
                                    data: items,
                                    type: FETCH_PRICES
                              }
                        dispatch(actionObject);
                        }
                  );
      }
}

export const login = () => {
      return {
            type: LOGIN
      }
}

export const logout = () => {
      return {
            type: LOGOUT
      }
}