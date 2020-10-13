$(document).ready(function() {
    $("#btn_add").click(function() {
        $(".myform").fadeToggle("fast");
    });

    $("#btn_submit").submit(function() {

        $("#library").append(append_book());
    });

});

function append_book() {
    let title = $("#title").val();
    title = $("<td></td>").text(title);

    let author = $("#author").val();
    author = $("<td></td>").text(author);

    let page = $("#page").val();
    page = $("<td></td>").text(page);

    let read = $("#read").val();
    read = $("<td></td>").text(read);

    let line = $("<tr></tr>").append(title, author, page, read);

    return line;
}