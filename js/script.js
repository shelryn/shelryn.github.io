$(function() {
	function changeFontColor() {
		function addSecond() {
			$('header').addClass("backgroundTwo")
		}
		function addThird() {
			$('header').removeClass("backgroundTwo")
			$("header").addClass('backgroundThree')
		}
		function addFourth() {
			$('header').removeClass("backgroundThree")
			$("header").addClass('backgroundFour')
		}
		function addFifth() {
			$('header').removeClass("backgroundFour")
			$("header").addClass('backgroundFive')
		}
		function returnFirst() {
			$('header').removeClass("backgroundFive")
			$("header").addClass('backgroundOne')

		}
			setTimeout(addSecond, 1500);
			setTimeout(addThird, 3000);
			setTimeout(addFourth, 4500);
			setTimeout(addFifth, 6000)
			setTimeout(returnFirst, 7500)
	}
	setTimeout(changeFontColor, 0)
	setInterval(changeFontColor, 7500);
});
