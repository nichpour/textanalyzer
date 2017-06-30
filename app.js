var tester = "adding text now";

function countWords(sentence){
	var sArr = sentence.split(" ");
	return sArr.length;
}

function unique(wordArr){
	wordArr = wordArr.split(" ");
	newArr = [];
	for (var i = 0; i < wordArr.length; i++){
		if (newArr.indexOf(wordArr[i]) === -1){
			newArr.push(wordArr[i]);
		}
	}
	return newArr.length;
}

function averageCount(goodArr){
	goodArr = goodArr.split(" ");
	sumLength = 0; 
	for (var i = 0; i < goodArr.length; i++){
		sumLength = sumLength + goodArr[i].length;
	}
	averageWord = sumLength / goodArr.length;
	return averageWord;
}

function getSubmit(){
	$('.js-text-form').submit(function(event){
		event.preventDefault();
		$(".emptyit").empty();
		var textInside = $(this).find('#user-text').val();
		var count = countWords(textInside);
		var uniqueCount = unique(textInside);
		var averageL = averageCount(textInside);
		$(".js-word-count").append("<p>" + count + "</p>");
		$(".js-unique-word-count").append("<p>" + uniqueCount + "</p>");
		$(".js-average-word-length").append("<p>" + averageL + "</p>");
		$("dl").removeClass("hidden");
		$(".hidden").attr("display", "inline");
	});
}

$(function() {
	getSubmit();
});
