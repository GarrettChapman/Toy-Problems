function hello(name) {

  if(name == "" || name == undefined || name == null){
    return 'Hello, World!';
  }
  else{
    return  'Hello, ' + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) + '!';
  }
}
