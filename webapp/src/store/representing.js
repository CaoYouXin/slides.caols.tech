export const representing = (state = "", action) => {
  switch (action.type) {
    case 'REPRESENTING':
      return action.name;
    case 'NOREPRESENTING':
      return "";
    default:
      return state;
  }
}