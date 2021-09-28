$(function() {
    
    
    let articles = [];
 
    $.getJSON('articles.json', function(data) {
        $.each(data.articles, function(i, f) {
            const articles = "<article>" + "<h2>" + f.title + "</h2>" + "<p>" + f.text + "</p>" + "<article>"
            $(articles).appendTo("#articleDataVertical tbody");
      });
 
    });
 
 });

     $(function() {
 
 
    let articles = [];
 
    $.getJSON('articles.json', function(data) {
        $.each(data.articles, function(i, f) {
            const articles = "<td>" + "<article>" + "<h2>" + f.title + "</h2>" + "<p>" + f.text + "</p>" + "</article>" + "</td>"
            $(articles).appendTo("#articleDataHorizontal tbody");
      });
 
    });
 
 });

