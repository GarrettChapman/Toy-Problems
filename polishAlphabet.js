function correctPolishLetters (string) {

  return string.replace(/ą/gi, "a").replace(/ć/gi, "c").replace(/ę/gi, "e").replace(/ł/gi, "l").replace(/ń/gi, "n").replace(/ó/gi, "o").replace(/ś/gi, "s").replace(/ź/gi, "z").replace(/ż/gi, "z")
  };
