export const home_view = (state = { width: window.innerWidth / 3, height: window.innerHeight / 3 }, action) => {
  switch (action.type) {
    case 'REPRESENTING':
      return { width: window.innerWidth, height: window.innerHeight };
    case 'NOREPRESENTING':
      return { width: window.innerWidth / 3, height: window.innerHeight / 3 };
    default:
      return state;
  }
}