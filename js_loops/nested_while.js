// nested while loop

num = 0;
while (num <= 100) {
  document.write(num);
  document.write('<br>');
  num += 5;
  if (num === 95){
    break;
  }
}