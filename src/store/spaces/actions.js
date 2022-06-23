import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import { spaceDetailsFetched, fetchSpacesSuccess } from "./slice";
export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";
export const SPACE_DETAILS_FETCHED = "SPACE_DETAILS_FETCHED";

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const spacesCount = state.spaces.allSpaces.length;
      const response = await axios.get(
        `${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`
      );

      console.log("spaces fetching in response", response.data);
      // datayi kontrol et.
      dispatch(fetchSpacesSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log("Details page response", response);
      dispatch(spaceDetailsFetched(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
