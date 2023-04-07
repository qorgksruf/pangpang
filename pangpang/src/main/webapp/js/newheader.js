console.log( 'newheader.js 실행');

let memberInfo = null;

// 로그인한 회원정보 호출 
getLogin();
function getLogin(){
	$.ajax({
		url : "/pangpang/member/login" ,
		async : false ,
		method : "get" , 
		success : (r) => {
			memberInfo = r;
			console.log(r)
		}
	})
}


let dropYn = true;
// 드롭다운 구현
function viewMenu(){
	console.log( 'viewMenu 클릭됨' );
	
	if( dropYn ){
		dropYn = false;
		document.querySelector('.main_menu').style.display = 'block';	
	}else{
		dropYn = true;
		document.querySelector('.main_menu').style.display = 'none';
	}
}


let sidebarYn = true;
function sidebar_onoff(){
	console.log( 'sideber 클릭됨' )
	if( sidebarYn ){
		sidebarYn = false;
		document.querySelector('.side_bar').style.left = "-300px";
		document.querySelector('.sidebar_onoff').innerHTML = `<i class="fas fa-chevron-right"></i>`
	}else{
		sidebarYn = true;
		document.querySelector('.side_bar').style.left = "0px";
		document.querySelector('.sidebar_onoff').innerHTML = `<i class="fas fa-chevron-left"></i>`
	}
	
}
