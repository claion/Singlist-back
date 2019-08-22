// Global

const LOGIN = "/login";
const LOGOUT = "/logout";
const EVENTS = "/events";

// Popular
const POPULAR = "/popular";
const POPULAR_CHART = "/chart";
const POPULAR_ARTIST = "/artist";

// Recommend

const RECOMMEND = "/recommend";
const RECOMMEND_DETAIL = "/:id";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";

// Songs

const SONGS = "/songs";
const SEARCH_SONG = "/search";
const DELETE_SONG = "/:id/delete";

const routes = {
  login: LOGIN,
  logout: LOGOUT,
  popular: POPULAR,
  popular_chart: POPULAR_CHART,
  popular_artist: POPULAR_ARTIST,
  recommend: RECOMMEND,
  recommend_detail: RECOMMEND_DETAIL,
  events: EVENTS,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  songs: SONGS,
  searchSong: SEARCH_SONG,
  deleteSong: DELETE_SONG
};

export default routes;
