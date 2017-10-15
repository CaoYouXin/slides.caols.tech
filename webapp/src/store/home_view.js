export const home_view = (state = { width: window.innerWidth / 3, height: window.innerHeight / 2 }, action) => {
  switch (action.type) {
    case 'REPRESENTING':
      return { width: window.innerWidth, height: window.innerHeight };
    case 'NOREPRESENTING':
      return { width: window.innerWidth / 3, height: window.innerHeight / 2 };
    default:
      return state;
  }
}