export const fetchGamesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return state + 1;
    default:
      return state;
  }
};
