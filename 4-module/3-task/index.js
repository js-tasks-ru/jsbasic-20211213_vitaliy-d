function highlight(table) {
  let tableClass = table.tBodies[0].rows;
  for(let tr of tableClass){
    let elem = tr.querySelector('[data-available]');
    if(elem !== null) {
      let trueFalse = elem.getAttribute('data-available');
      if (trueFalse === "true"){
        tr.classList.add("available");
      } else {
        tr.classList.add("unavailable");
      }
    } else {
      tr.setAttribute('hidden', '');
    }
    if (tr.cells[2].textContent === "m") {
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }
    if (tr.cells[1].textContent < 18) {
      tr.style = "text-decoration: line-through";
      console.log("TEST")
    }
  }
}


