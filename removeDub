// Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
  var decoded = song.split("WUB");
  for(var i=0; i<decoded.length;i++){
    if(decoded[i] === ""){
      decoded.splice(i, 1);
      i-=1;
    }
  }
  var finished = decoded.join(" ");
  return finished;
}

//songDecoder("WUBWUBIWUBAMWUBWUBX")
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
