export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  // "BQDnSXIw9hPw43SuKh71v9bHPse0Onqx4k1hOAinS9OhPs7KMO-9i0A0y7tvGSLfi_n9sXpV60d3FUwR8dFdCXUhLG5S-txJQYQl1Q6N9B2a5Rier6Qua0Tflfgw942rr1XU5NqUw2TAKpuUsXNbPR4mSeZwLz6CpdjnZF6t5cssK1F",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
