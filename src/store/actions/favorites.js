export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

// REQUEST => SAGA => CHAMA API => SUCESS

export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

export const addFavoriteFailure = error => ({
  type: 'ADD_FAVORITE_FAILURE',
  payload: { error },
});
