
$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();

    var form = new Object();
      form.profile=$('input[name="profile"]:checked').val(),
      form.name= $('#name').val(),
      form.gender= $('input[name="gender"]:checked').val(),
      form.department = [],
      $('input[name="department"]:checked').each(function() {
        form.department.push($(this).val());
      });
      form.salary= $('#salary').val(),
      form.Day= $('#day').val(),
      form.Month= $('#month').val(),
      form.Year= $('#year').val(),

  
    $.ajax({
      url: "http://localhost:3000/posts",
      type: "POST",
      data:form,
      success: function () {
        console.log("Data posted successfully.");
      },
      error: function () {
        console.log("Error posting data.");
      },
    });
  });
});
