export const removeFirstPathSegment = (path) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\/[^\/]+/;
  return path.replace(regex, "");
};
export default removeFirstPathSegment;
