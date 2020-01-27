	let a = 10;
	let start = true;
	let cor = 255;
	let alfa = 1;

	const canvas = document.querySelector('.myCanvas');
	const width = canvas.width = 600
	const height = canvas.height = 600

	console.log("width = " + width +"; height = "+height);

	const ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, 420, 420);

	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.fillRect(75, 185, 200, 20);

	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.fillRect(275, 175, 50, 50);
	function addQuadrado(){
		console.log(start);
		if(start){
			start = false;
			ctx.fillStyle = 'rgba(0,'+cor+',0,'+ alfa +')';
			ctx.fillRect(a/2, a/2, a,a);

		}
		else{
			ctx.fillStyle = 'rgba(0,'+cor+',0,'+ alfa +')';
			//ctx.fillStyle = 'rgba(255,'+cor+',255,'+ alfa +')';
			ctx.fillRect(a/2, a/2, a,a);
		}
		a += 10;
		if(cor > 0){
			cor -= 5;
		}
		if(alfa > 0.1){
			alfa -= 0.07;
		}
	}
