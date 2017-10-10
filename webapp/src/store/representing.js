export const representing = (state = false, action) => {
  switch (action.type) {
    case 'REPRESENTING':
      return true;
    case 'NOREPRESENTING':
      return false;
    default:
      return state;
  }
}