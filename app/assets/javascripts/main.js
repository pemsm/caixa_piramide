// SORT TABLE
function sortTable(n) {
  var table, rows, switching, i, prev, next, shouldSwitch, direction, switchcount = 0, prevToFloat, nextToFloat;
  table = document.getElementById('tabela-caixa');
  switching = true;
  direction = 'asc';
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName('tr');
    for (i = 1; i < (rows.length - 2); i++) {
      shouldSwitch = false;
      prev = rows[i].getElementsByTagName('td')[n];
      next = rows[i + 1].getElementsByTagName('td')[n];
      prevToFloat = parseFloat(prev.innerHTML.toLowerCase());
      nextToFloat = parseFloat(next.innerHTML.toLowerCase());
      if (direction == 'asc') {
        if (prevToFloat > nextToFloat) {
          shouldSwitch= true;
          break;
        }
      } else if (direction == 'desc') {
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
      if (switchcount == 0 && direction == 'asc') {
        direction = 'desc';
        switching = true;
      }
    }
  }
}
// SORT DATE
function convertDate(date) {
  var splitDate = date.split('/');
  return (splitDate[2]+splitDate[1]+splitDate[0]);
}

function sortDateAsc() {
  var tbody = document.querySelector('#tabela-caixa tbody');
  var rows = [].slice.call(tbody.querySelectorAll('tr'));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
  rows.forEach(function(element) {
    tbody.appendChild(element);
  });
}

function sortDateDesc() {
  var tbody = document.querySelector('#tabela-caixa tbody');
  var rows = [].slice.call(tbody.querySelectorAll('tr'));
  
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

// TAB

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}

// SEARCH

function searchDate() {
  var input, filter, table, tr, td, i;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('tabela-caixa');
  tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    } 
  }
}

window.onload = function () {
  if (window.location.href.match('clone-caixa-rhenanalves.c9users.io/caixas') != null) {
    sortTable(1);
    sortTable(1);
    document.querySelector('#tabela-caixa th').click();
   }
}