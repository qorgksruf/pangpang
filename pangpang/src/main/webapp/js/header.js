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


let dropYn1 = true;
let dropYn2 = true;
let dropYn3 = true;
let dropYn4 = true;
// 드롭다운 구현
function viewMenu( no ){
	console.log( 'viewMenu 클릭됨' );
	
	if( no == 1 ){
		if( dropYn1 ){
			dropYn1 = false;
			document.querySelector('.main_menu1').style.display = 'block';	
		}else{
			dropYn1 = true;
			document.querySelector('.main_menu1').style.display = 'none';
		}
	}else if( no == 2 ){
		if( dropYn2 ){
			dropYn2 = false;
			document.querySelector('.main_menu2').style.display = 'block';
		}else{
			dropYn2 = true;
			document.querySelector('.main_menu2').style.display = 'none';
		}
	}else if( no == 3 ){
		if( dropYn3 ){
			dropYn3 = false;
			document.querySelector('.main_menu3').style.display = 'block';	
		}else{
			dropYn3 = true;
			document.querySelector('.main_menu3').style.display = 'none';
		}
	}else if( no == 4 ){
		if( dropYn4 ){
			dropYn4 = false;
			document.querySelector('.main_menu4').style.display = 'block';	
		}else{
			dropYn4 = true;
			document.querySelector('.main_menu4').style.display = 'none';
		}
	}
}



let sidebarYn = true;
function sidebar_onoff(){
	console.log( 'sideber 클릭됨' )
	if( sidebarYn ){
		sidebarYn = false;
		chatboxYn = true;
		document.querySelector('.side_bar').style.left = "-300px";
		document.querySelector('.user_profile').style.left = "-300px";
		document.querySelector('.sidebar_onoff').innerHTML = `<i class="fas fa-chevron-right"></i>`
		document.querySelector('.chating_box').style.display = "none";
	}else{
		sidebarYn = true;
		document.querySelector('.side_bar').style.left = "0px";
		document.querySelector('.user_profile').style.left = "0px";
		document.querySelector('.sidebar_onoff').innerHTML = `<i class="fas fa-chevron-left"></i>`
	}
	
}


let loginInfoYn = true;
function login_info_scroll(){
	
	if( loginInfoYn ){
		loginInfoYn = false;
		document.querySelector('.connectlistbox').style.display = "block";
	}else{
		loginInfoYn = true;
		document.querySelector('.connectlistbox').style.display = "none";
	}
	
}


let chatboxYn = true;
function chatbox(){
	console.log('채팅박스 체크')
	if( chatboxYn ){
		chatboxYn = false;
		document.querySelector('.chating_box').style.display = "block";
	}else{
		chatboxYn = true;
		document.querySelector('.chating_box').style.display = "none";
	}
}


