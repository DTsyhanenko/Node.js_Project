"use strict";

jQuery(documnent).ready(function($) {

    let form = $(".new-entry");

    $(form).submit(function(event) {
        event.preventDefault();

        let title = $("#title").val();
        let content = $("#content").val();

        $.ajax({
            url: "/guestbook/new",
            method: "POST",
            data: {
                "title": title,
                "content": content
            }
        })
        alert(title);
        alert(content);
    });
});