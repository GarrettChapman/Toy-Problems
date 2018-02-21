function getInitials(name) {
  return name.split(" ")
  .map((word) => {
    return word[0];
  })
  .join('');
}

getInitials("John F Kennedy")
