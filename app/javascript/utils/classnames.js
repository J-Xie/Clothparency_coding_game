export const classnames = (...classNames) => {
  let res = "";
  const addClass = className => {
    res += ` ${className}`;
  };

  classNames.forEach(className => {
    if (typeof className === "string") {
      addClass(className);
    } else if (typeof className === "object") {
      Object.keys(className).forEach(key => {
        if (className[key]) {
          addClass(key);
        }
      });
    }
  });
  return res;
};
