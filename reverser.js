function reverser(sentence) {


	return sentence.split("").reverse().join("").split(" ").reverse().join(" ")
}


reverser("Hi mom")
reverser("this is now backwards")
reverser("each Word is Now Reversed")
