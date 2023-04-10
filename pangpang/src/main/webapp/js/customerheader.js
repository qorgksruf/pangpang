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

if( memberInfo.member_id != null ){
	
	let html = `
				<a href="/pangpang/member/logout.jsp"><span class="signup_btn_box"> 로그아웃 </span></a>
				<a href="#"><span class="cust_center"> 고객센터 </span></a>
				`
	document.querySelector('.cust_loginbox').innerHTML = html;
	
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



