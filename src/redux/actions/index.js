export const saveEmail = (data) => ({
  type: 'SAVE_EMAIL',
  payload: data,
});

export const deleteExchan = (id, value, ask) => ({
  type: 'HANDLE_DELETE',
  payload: {
    id,
    value,
    ask,
  },
});

export const endEdit = (edited, total) => ({
  type: 'END_EDIT',
  edited,
  total,
});

export const startEdit = (id) => ({
  type: 'START_EDIT',
  payload: id,
});

export const saveData = (data, value) => ({
  type: 'SAVE_EXPENSE',
  payload: {
    data,
    value,
  },
});

export const apiRequested = () => ({
  type: 'REQUEST_STARTED',
});

export const fetchEnded = () => ({
  type: 'REQUEST_ENDED',
});

export const successApiReq = (data) => ({
  type: 'REQUEST_SUCCEED',
  payload: data,
});

export function fetchUrl() {
  return async (dispatch) => {
    dispatch(apiRequested());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((resp) => {
        const currenciesArr = Object.keys(resp);
        const currenciesFiltered = currenciesArr.filter((key) => key !== 'USDT');
        dispatch(successApiReq(currenciesFiltered));
        dispatch(fetchEnded());
      });
  };
}
