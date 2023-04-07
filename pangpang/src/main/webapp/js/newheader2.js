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

//---------------------------------------------------------------------------------------------------------------
let clientsocket = null;

// 1. 클라이언트소켓 객체 생성과 동시에 서버소켓과 연결 [@OnOpen]
	clientsocket = new WebSocket("ws://192.168.17.31:8080/jspweb/chatting/"+memberInfo.member_id);
	clientsocket.onopen    = function(e){소켓연결(e);}
	clientsocket.onmessage = function(e){수신(e)}
	clientsocket.onclose   = function(e){연결해제(e)}
	clientsocket.onerror   = function(e){ alert('문제발생:관리자에게문의'+e) }
	console.log(clientsocket)


let contentbox = document.querySelector('.contentbox')

// 2. 클라이언트소켓 접속시 이벤트 정의 
function 소켓연결(e){
	
	sendemo(memberInfo.member_id+"님이 채팅방에 입장하셨습니다.","alarm")
	
}

// 4. 클라이언트 소켓이 메세지 받기 
function 수신(e){ // e.data <--- e --- session.getBasicRemote().sendText(msg);
	console.log(e)
	console.log(e.data)
	console.log(JSON.parse(e.data)) 
	
	// json형태의 문자열로 온 데이터를 객체로 강제 형변환
	let data = JSON.parse(e.data);
	console.log(data)
	
	// 명단 vs 메시지정보
	if(Array.isArray(data)){
		
		let html = '';
		
		data.forEach((o)=>{
			html += `<div class="connectbox">
						<div><img src="/jspweb/member/pimg/default.webp" class="hpimg" width="50px" height="50px"> </div>
						<div class="name">  ${o.frommid}		</div>
					</div>`
		})
		document.querySelector('.connectlistbox').innerHTML = html;		
	}
}

// 5. 서버와 연결이 종료되었을때 = 클라이언트 객체 초기화
function 연결해제(e){
	console.log('연결 해제');
}

function enterkey(){
	console.log( window.event.keycode )
	if( window.event.keyCode == 13){전송();}
}

// 로그인 정보
function logininfo(){
	
}