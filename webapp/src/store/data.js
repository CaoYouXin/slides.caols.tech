export const data = (state = { key: '', offsetX: 0, offsetY: 0 }, action) => {
  switch (action.type) {
    case 'MOVE':
      return action.data;
    case 'NOREPRESENTING':
      return { key: '', offsetX: 0, offsetY: 0 };
    default:
      return state;
  }
}