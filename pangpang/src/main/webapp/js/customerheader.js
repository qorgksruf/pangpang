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

let cartYn = true;
function cart_drop_down(){
	console.log('cart_drop_down 클릭')
	
	if( cartYn ){
		cartYn = false;
		document.querySelector('.cart_item').style.display = 'block';
	}else{
		cartYn = true;
		document.querySelector('.cart_item').style.display = 'none';
	}
	

}



