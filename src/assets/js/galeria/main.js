const fulImgBox=document.getElementById("fulImgBox");
const fulImg=document.getElementById("fulImg");

function openFulImg(reference){
	fulImgBox.style.display="flex";
	fulImg.src=reference;
}

function closeImg(){
	fulImgBox.style.display="none";
}



window.onload = () => {
	setTimeout(() => {
		document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
	}, 3000);
}

function refrescarPagina() {
	location.reload();
}