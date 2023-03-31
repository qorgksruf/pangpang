console.log('map.js 시작');
console.log( memberInfo );


let type = 0;

// 1. 로그인된 배송기사의 개인정보출력
memberPrint();
function memberPrint(){
	
	let notihtml = `<h3> 배송지 설정 </h3>
					<div class="notice"> ${ memberInfo.member_name }님, 오늘도 안전운행 하세요! </div>`
	
	document.querySelector('.info_top').innerHTML = notihtml;
	
	let html = `<div> 직책 : ${ memberInfo.member_rank } </div>
				<div> 아이디 : ${ memberInfo.member_id } </div>
				<div> 이름 : ${ memberInfo.member_name } </div>
				<div> 연락처 : ${ memberInfo.member_phone } </div>`;
	
	document.querySelector('.personal_info').innerHTML = html ;
}


// 2. 차량 배차정보
bookcarInfo();
function bookcarInfo(){
	
	$.ajax({
		url : "/pangpang/map",
		method : "get",
		data : { type : 1 },
		success : ( r ) => {
			console.log('bookcarInfo 통신'); console.log( r );
			
			let html = `<div class="img_info_box">
							<img alt="" src="/pangpang/car/img/${ r.carmanage_img == null ? 'default.png' : r.carmanage_img }">
						</div>
						<div class="carmanage_number"> ${ r.carmanage_number } </div>
						<div class="etc_info_box">
							<div> 시작 : ${ r.bookcar_str_date } </div>
							<div> 반납 : ${ r.bookcar_end_date } </div>
							<div> 기타정보 </div>
						</div>`;
			
			document.querySelector('.dispatch_main_box').innerHTML = html;
		}
	})
}


// 3. 현재 배송이 필요한 주문목록 출력
getOrderList();
function getOrderList(){
	
	$.ajax({
		url : "/pangpang/map",
		method : "get",
		data : { type : 2 },
		success : ( r ) => {
			console.log('getOrderList() 통신'); console.log( r );
			
		}
	})
	
}




// 4. 배송목록에서 선택한 아이템 선택테이블로 이동
function delivery_item(){
	
	console.log( '클릭됨' ); 
	
}


/* -------------------------- 지도 -------------------------- */ 
var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
            center: new Tmapv2.LatLng(37.570028, 126.986072),    // 지도의 중심좌표
            width : "100%", // 지도의 넓이
            height : "500px", // 지도의 높이
            zoom : 15, // 지도의 줌레벨
            httpsMode: true,    // https모드 설정
        });