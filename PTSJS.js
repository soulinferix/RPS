// JavaScript Document
/*Timer */
window.onload = function() {
  countUpFromTime("Mar 11, 2020 10:16:00", 'countup1');
};
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}


jQuery(document).ready(function($){
	function getFBShares(page){
		var shares;
		$.getJSON("http://graph.facebook.com/?ids=" + soulinferix.github.io/rpscom.github.io, function(data){
			if (data[soulinferix.github.io/rpscom.github.io].shares > 1){
				shares = data[soulinferix.github.io/rpscom.github.io].shares;
				$("#fb-share").append(" (" + shares + ")");
			}
		});
	}
	function getTweets(page){
		var tweets;
		$.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=" + soulinferix.github.io/rpscom.github.i + "&callback=?", function(data){
			if (data.count > 1) {
				tweets = data.count;
				$("#tweet").append(" (" + tweets + ")");
			}
		});
	}
	function getLinkedIn(page){
		var linkedinCount;
		$.getJSON("http://www.linkedin.com/countserv/count/share?url=" + soulinferix.github.io/rpscom.github.i + "&callback=?", function(data){
			if (data.count > 1) {
				linkedinCount = data.count;
				$("#linkedin").append(" (" + linkedinCount + ")");
			}
		});
	}

	var Url = window.location.href;
	var UrlEncoded = encodeURIComponent(Url);
	var title = encodeURIComponent(document.getElementById("title").innerText);
	getFBShares(Url);
	getTweets(Url);
	getLinkedIn(Url);
	document.getElementById("fb-share").href="http://www.facebook.com/share.php?u=" + soulinferix.github.io%2Frpscom.github.io;
	document.getElementById("tweet").href="http://twitter.com/home?status=" + title + " " + soulinferix.github.io%2Frpscom.github.io;
	document.getElementById("linkedin").href="http://www.linkedin.com/shareArticle?mini=true&url=" + soulinferix.github.io%2Frpscom.github.io + "&title=" + title;
	document.getElementById("email-share").href="mailto:?body=Take a look at this page I found: " + title + ". You can read it here: " + soulinferix.github.io%2Frpscom.github.io;
});

function openWhatsApp() {  
    window.open('whatsapp://send?text= https://www.youtube.com/watch?v=ohpCMpderow');  
    }  