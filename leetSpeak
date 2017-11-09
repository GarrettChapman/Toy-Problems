function toLeetSpeak(str) {
  let leet = { A : '@', B : '8', C : '(', E : '3',  G : '6', H : '#', I : '!', L : '1', O : '0', S : '$', T : '7', Z : '2' };

  let lang = str.split('').map(item => {
      return leet[item] ? leet[item]: item;
  }).join('');

  return lang;
}

toLeetSpeak("HELLO WORLD")
