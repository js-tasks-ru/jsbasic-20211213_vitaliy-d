function truncate(str, maxlength) {
  let strTruncate = str.slice(0);
  if (strTruncate.length <= maxlength) {
    return strTruncate;
  } else {
    return strTruncate.slice(0, maxlength - 1) + "…";
  }
}
