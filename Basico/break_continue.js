for (let i = 0; i < 3; i += 1) {
  //com o continue o numero 2 não aparece
  if (i == 2) {
    continue;
  }else{
      //Se o número é 1 ele para tudo e sai do laço.. break;
      if(i == 1){
          break;
      }
  }
  console.log(i);
}
