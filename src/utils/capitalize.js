export default function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Utils: capitalize(string) expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
