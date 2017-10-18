export const thumb = (state = { no: -1, slides: [], height: 0, width: 0 }, action) => {
  switch (action.type) {
    case "SHOW_THUMBS":
      return {
        no: -1,
        slides: action.slides,
        height: action.height,
        width: action.width
      };
    case "THUMB_SELECT":
      return {
        slides: [],
        height: 0,
        width: 0,
        no: action.no
      };
    default:
      return state;
  }
}