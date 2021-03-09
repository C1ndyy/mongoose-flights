document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  const Calender = document.querySelector('.datepicker');
  M.Datepicker.init(Calender,{});



