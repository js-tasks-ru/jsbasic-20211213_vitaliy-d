function checkSpam(str) {
  let strSpam = str.toLowerCase();
  if (strSpam.includes('1xbet') || strSpam.includes('xxx')) {
    return true
  } else {
    return false
  }
}
