function century(year) {
  return (year + 99) / 100 | 0;
}


century(1705), 18, //'Testing for year 1705'
century(1900), 19, //'Testing for year 1900'
century(1601), 17, //'Testing for year 1601'
century(2000), 20, //'Testing for year 2000'
century(89), 1, //'Testing for year 89'
