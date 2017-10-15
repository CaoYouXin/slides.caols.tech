export const thumb = (state = { no: -1, slides: [], height: 0 }, action) => {
  switch (action.type) {
    case "SHOW_THUMBS":
      return {
        no: -1,
        slides: action.slides,
        height: action.height
      };
    case "THUMB_SELECT":
      return {
        slides: [],
        height: 0,
        no: action.no
      };
    default:
      return state;
  }
}