function getGrade (s1, s2, s3) {
  var total = s1 + s2 + s3;
  var avg = total / 3 ;

  if (avg <= 100 && avg >= 90) {
    return 'A';
  } else if (avg < 90 && avg >= 80) {
    return 'B';
  } else if (avg < 80 && avg >= 70) {
    return 'C';
  } else if (avg < 70 && avg >= 60) {
    return 'D';
  } else if (avg < 60 && avg >= 0) {
    return 'F';
  }
}
