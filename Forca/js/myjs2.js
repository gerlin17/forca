		var i, j = 0;
		var palavra1 = new Array('B', 'R', 'A', 'S', 'I', 'L');
		var escolha;
		var escolhacerta = new Array();
		var opcao;
		var escolhaerrada = new Array();
		var condicaoderrota = 0;
		condicaovitoria = 0;
		var Boneco = new Array('O');
		var Boneco0 = new Array('O-');
		var Boneco1 = new Array('O-<');
		var Boneco2 = new Array('O-<-');
		var Boneco3 = new Array('O-<-<');
		var Boneco4 = new Array('O?<-<');
		

	function game(escolhapc) {
		var condicao=0;

		if(escolhapc==0){
			escolha='A'
		}
		if(escolhapc==1){
			escolha='B'
		}
		if(escolhapc==2){
			escolha='C'
		}
		if(escolhapc==3){
			escolha='D'
		}
		if(escolhapc==4){
			escolha='E'
		}
		if(escolhapc==5){
			escolha='F'
		}
		if(escolhapc==6){
			escolha='G'
		}
		if(escolhapc==7){
			escolha='H'
		}
		if(escolhapc==8){
			escolha='I'
		}
		if(escolhapc==9){
			escolha='J'
		}
		if(escolhapc==10){
			escolha='K'
		}
		if(escolhapc==11){
			escolha='L'
		}
		if(escolhapc==12){
			escolha='M'
		}
		if(escolhapc==13){
			escolha='N'
		}
		if(escolhapc==14){
			escolha='O'
		}
		if(escolhapc==15){
			escolha='P'
		}
		if(escolhapc==16){
			escolha='Q'
		}
		if(escolhapc==17){
			escolha='R'
		}
		if(escolhapc==18){
			escolha='S'
		}
		if(escolhapc==19){
			escolha='T'
		}
		if(escolhapc==20){
			escolha='U'
		}
		if(escolhapc==21){
			escolha='V'
		}
		if(escolhapc==22){
			escolha='W'
		}
		if(escolhapc==23){
			escolha='X'
		}
		if(escolhapc==24){
			escolha='Y'
		}
		if(escolhapc==25){
			escolha='Z'
		}

		if((escolha===palavra1[0])&&(escolha!=escolhacerta[0])){
			escolhacerta[0]=escolha;
			condicao++;
		}
		if((escolha===palavra1[1])&&(escolha!=escolhacerta[1])){
			escolhacerta[1]=escolha;
			condicao++;
		}
		if((escolha===palavra1[2])&&(escolha!=escolhacerta[2])){
			escolhacerta[2]=escolha;
			condicao++;
		}
		if((escolha===palavra1[3])&&(escolha!=escolhacerta[3])){
			escolhacerta[3]=escolha;
			condicao++;			
		}
		if((escolha===palavra1[4])&&(escolha!=escolhacerta[4])){
			escolhacerta[4]=escolha;
			condicao++;
		}
		if((escolha===palavra1[5])&&(escolha!=escolhacerta[5])){
			escolhacerta[5]=escolha;
			condicao++;			
		}		
		if(condicao==0){
			escolhaerrada.push(escolha);
			condicaoderrota++
		}
		else{
			condicaovitoria++
		}
		if(condicaovitoria==6){
			alert('Voce acertou a palavra');
      		window.location.reload();
		}
		switch(condicaoderrota){
			case 1:
      			$('#boneco').val(Boneco);
      		break;

      		case 2:
      			$('#boneco').val(Boneco0);
      		break;

      		case 3:
      			$('#boneco').val(Boneco1);
      		break;

      		case 4:
      			$('#boneco').val(Boneco2);
      		break;

      		case 5:
      			$('#boneco').val(Boneco3);
     		 break;

      		case 6:
      			$('#boneco').val(Boneco4);
      			alert('Voce nao acertou a Palavra');
      			window.location.reload();
      		break;
		}

		$('#esc0').val(escolhacerta[0]);
		$('#esc1').val(escolhacerta[1]);
		$('#esc2').val(escolhacerta[2]);
		$('#esc3').val(escolhacerta[3]);
		$('#esc4').val(escolhacerta[4]);
		$('#esc5').val(escolhacerta[5]);
		$('#er01').val(escolhaerrada);		
	}
