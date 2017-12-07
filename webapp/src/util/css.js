const group = (decision, addition) => {
  let remains = null;

  if (!decision) {
    remains = [];
  } else {
    remains = Object.keys(decision).filter(k => decision[k]);
  }

  if (!addition) {
    return remains.join(' ');
  }

  let all = remains.concat(addition);
  return all.join(' ');
}

const select = (one, candidates) => {
  let candidate = candidates[one];
  candidate = !candidate ? {} : candidate;

  if (typeof candidate === 'function') {
    // candidate = candidate.bind(candidates);
    // candidate = candidate.call(candidates);
    candidate = candidate();
  }

  return candidate;
}

const random = () => {
  let number = ~~(Math.random() * (1 << 24));
  let s = number.toString(16);
  return '#' + '000000'.substring(s.length) + s;
}

export { group, select, random };