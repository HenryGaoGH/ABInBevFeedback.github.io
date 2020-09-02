function checkboxClick() {
    if ($("#input_checkbox").prop("checked") == true) {
       $("#input_email").show();
    } else {
        $("#input_email").hide();
    }
}