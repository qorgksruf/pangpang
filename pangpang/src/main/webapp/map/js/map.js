console.log('map.js 시작');
console.log( memberInfo );


// --------------------------------- 전역변수 --------------------------------- //
 
// order 정렬 오름차순/내림차순 스위치 전역변수
let orderTrueFalse = true;

// type 전역변수
let type = 0;

// 배송정보를 저장할 변수
let d_info;

// --------------------------------- ----- --------------------------------- // 

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
getOrderList(2);
function getOrderList( order ){
	
	let html = `<tr>
					<th width="10%"> 주문번호 
						<button type="button" onclick="d_info_orderBy()"> 
							<span class="orderbtn"> ${ orderTrueFalse ? '<i class="fa-solid fa-angle-down"></i>' : '<i class="fa-solid fa-angle-up"></i>' } </span> 
						</button> 
					</th>
					<th width="25%"> 주문일자 </th>
					<th width="15%"> 상태  </th>
					<th width="40%"> 주소  </th>
					<th width="10%"> 전체선택 <input type="checkbox" value="selectall" onclick="selectAll(this)"> </th> 
				</tr>`;
	
	$.ajax({
		url : "/pangpang/map",
		method : "get",
		data : { "type" : 2 , "order" : order },
		async : false,
		success : ( r ) => {
			console.log('getOrderList() 통신'); console.log( r );
			
			d_info = r ;
			
			r.forEach( (o) => {
				
				html += `<tr>
						<td> ${ o.ordermanagement_no } </td> <td> ${ o.ordermanagement_date } </td> 
						<td> ${ o.ordermanagement_state } </td> <td> ${ o.ordermanagement_address } </td> 
						<td> <input type="checkbox" value="${ o.ordermanagement_no }"></td>
					</tr>`
				
			})
			
			document.querySelector('.d_info_table').innerHTML = html ;	
		}
	})
}




// 4. 배송정보 정렬 함수
function d_info_orderBy(){
	
	if( orderTrueFalse ){
		orderTrueFalse = false ;
		getOrderList(1);
	}else{
		orderTrueFalse = true ;
		getOrderList(2);
	}
	console.log( orderTrueFalse );
	
}



// 5. 체크박스 전체선택 전체해제
function selectAll( selectAll ){
	
	let checkboxes = document.querySelectorAll('.info_table_box input[type="checkbox"]');
	
	checkboxes.forEach( (o) => {
		o.checked = selectAll.checked
	});
}


// 선택한 배송지를 담을 배열
let selectAddr = [];

// 6. 배송지 선택 후 완료버튼을 눌렀을때 >> 선택한 배송지 정보값 가져오기
function addrSelect() {
	console.log('클릭됨');
	console.log( d_info );
	
	// check 된 값 가져오기
	let checkConfirm = document.querySelectorAll('.info_table_box input[type="checkbox"]:checked');
	
	// 체크박스에서 선택한 배송목록의 pk 값을 담을 배열
	let select_no = [];
	
	// 가져온 DOM 객체에서 value 값만 추출하여 배열에 담기
	checkConfirm.forEach( ( o , i) => {
		console.log( o.value );
		select_no[i] = o.value ;
	})
	
	
	// for 반복문을 돌려 ajax 로 가지고온 모든 배송정보와 DOM 객체에서 가져온 체크 value 를 비교여 일치하는것만 배열에 담기
		// >> 선택한 값만 담기
	for( let i=0; i<d_info.length; i++ ){
		for( j=0; j<select_no.length; j++ ){
			
			if( d_info[i].ordermanagement_no == select_no[j] ){
				selectAddr.push( d_info[i] );
				console.log( d_info[i] );
			}
			
		}
	}
	console.log( selectAddr );
	
	// 체크한 배송목록 HTML 렌더링
	selectAddrPrint();
	
	// 선택한 체크값 모두 비활성회
	checkConfirm.forEach( (o) => {
		o.checked = false;
	})
	
	
}

function selectAddrPrint(){
	
	let html = `<tr>
					<th> 경유지 </th> <th></th> <th> 삭제 </th>
				</tr>`;
	
	selectAddr.forEach( (o) => {
		
		html += `<tr>
					 <td></td>
					 <td> ${ o.ordermanagement_address } </td> 
					 <td> 
						 <button type="button" onclick="addrDelete(${ o.ordermanagement_no })" class="delbtn"> 
						 	<i class="fa-solid fa-minus"></i> 
						 </button>  
					 </td>
				</tr>`
		
	})
	
	document.querySelector('.select_table').innerHTML = html ;
	
}



// 선택된 배송지 제거하기
function addrDelete( no ){
	console.log( no + " 클릭됨" )
	
	selectAddr.forEach( (o,i) => {
		
		if( o.ordermanagement_no == no ){
			selectAddr.splice( i , 1 );
			selectAddrPrint();
		}
	})
}



/* -------------------------- 지도 -------------------------- */ 
var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
            center: new Tmapv2.LatLng(37.570028, 126.986072),    // 지도의 중심좌표
            width : "100%", // 지도의 넓이
            height : "500px", // 지도의 높이
            zoom : 15, // 지도의 줌레벨
            httpsMode: true,    // https모드 설정
        });