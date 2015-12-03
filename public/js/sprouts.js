$(".more-sprouts").on("click", function(event) {
  event.preventDefault();

var pageNumber = $('.more-sprouts').attr("href").match(/\d+/)[0];

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json",
    data: {page: pageNumber}
  });

  request.done(function(moreTweets){
    moreTweets.forEach(function(eachTweet){
      $('.tweets').append('<li class="tweet"><div class="body">' + eachTweet['text']  + '</div><div class="user">' + eachTweet['username'] + '</div></li>');
    })
    pageNumber++;
    var string = "/tweets?page=" + pageNumber;
    $('.more-sprouts').attr("href", string);
  })
});

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() == $(document).height()){

var pageNumber = $('.more-sprouts').attr("href").match(/\d+/)[0];

    var request = $.ajax({
      method: "GET",
      url: "/tweets.json",
      data: {page: pageNumber}
    });

    request.done(function(moreTweets){
      moreTweets.forEach(function(eachTweet){
        $('.tweets').append('<li class="tweet"><div class="body">' + eachTweet['text']  + '</div><div class="user">' + eachTweet['username'] + '</div></li>');
      })
      pageNumber++;
      var string = "/tweets?page=" + pageNumber;
      $('.more-sprouts').attr("href", string);
    })
  };
})
