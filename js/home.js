$.ajax({
  url: "http://localhost:3000/posts",
  dataType: "json",
  success: function (data) {
    for (var i = 0; i < data.length; i++) {
      var row = $(
        "<tr><td>" +
          `<img  src='${data[i].profile}'/>` +
          "</td><td>" +
          data[i].name +
          "</td><td>" +
          data[i].gender +
          "</td><td>" +
          data[i].department +
          "</td><td>" +
          data[i].salary +
          "</td><td>" +
          data[i].Day +
          " " +
          data[i].Month +
          " " +
          data[i].Year +
          "</td><td>" +
          `<button><img id="1" src="../assets/icon/delete-black-18dp.svg"  class="delete-btn" alt="delete"></button>` +
          `<button><img id="1" src="../assets/icon/create-black-18dp.svg" class="edit-btn" alt="edit"></button>` +
          "</td></tr>"
      );
      $("#table-diplay").append(row);
    }
  },
  error: function (jqXHR, textStatus, errorThrown) {
    alert("Error: " + textStatus + " - " + errorThrown);
  },
});

$(document).on('click', '.delete-btn', function() {
  var row = $(this).closest('tr');
  var id = row.data('id');
  $.ajax({
    url: 'http://localhost:3000/posts',
    method: 'DELETE',
    data: { id: id },
    success: function(response) {
      if (response.status === 'success') {
        row.remove();
      } else {
        alert('Failed to delete record');
      }
    },
    error: function() {
      alert('An error occurred while deleting the record');
    }
  });
});


