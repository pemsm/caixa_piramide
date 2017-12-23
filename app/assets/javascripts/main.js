function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
  table = document.getElementById("tabela-caixa");
  switching = true;
  direction = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 2); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      
      var prevToFloat = parseFloat(x.innerHTML.toLowerCase());
      var nextToFloat = parseFloat(y.innerHTML.toLowerCase());
      
      if (direction == "asc") {
        if (prevToFloat > nextToFloat) {
          shouldSwitch= true;
          break;
        }
      } else if (direction == "desc") {
        if (prevToFloat < nextToFloat) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
}
// SORT DATE: BEGINNING
function convertDate(date) {
  var splitDate = date.split("/");
  return (splitDate[2]+splitDate[1]+splitDate[0]);
}

function sortDateAsc() {
  var tbody = document.querySelector("#tabela-caixa tbody");
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
  rows.forEach(function(element) {
    tbody.appendChild(element);
  });
}

function sortDateDesc() {
  var tbody = document.querySelector("#tabela-caixa tbody");
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(b.cells[0].innerHTML) - convertDate(a.cells[0].innerHTML);
  });
  rows.forEach(function(element) {
    tbody.appendChild(element);
  });
}

var counter = 1;

function sortTableByDate() {
  if(counter == 0 || counter%2 == 0) {
    sortDateAsc();
  } else {
    sortDateDesc();
  }
  return counter += 1;
}

window.onload = function () {
  sortTable(1);
  sortTable(1);
  document.querySelector("#tabela-caixa th").click();
}

// SORT DATE: END

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
