import { fetchGamesReducer } from "./fetchGamesReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  fetchGames: fetchGamesReducer,
});
