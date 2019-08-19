export default function camelToNormal(str) {
  return str.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
}
