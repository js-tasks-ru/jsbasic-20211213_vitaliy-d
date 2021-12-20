function ucFirst(str) {
  if (str) {
    let strUp = str[0].toUpperCase() + str.slice(1);
    return strUp;
  } else {
    return "";
  }

}
