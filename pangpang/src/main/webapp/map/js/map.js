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
	
	let notihtml = `<h3 class="set_title"> 배송지 설정 </h3>
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
let addrSelectTF = false;
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
	
	addrSelectTF = true;
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
	addrConversion();
}

// 선택된 배송지 제거하기
function addrDelete( no ){
	console.log( no + " 클릭됨" )
	
	selectAddr.forEach( (o,i) => {
		
		if( o.ordermanagement_no == no ){
			selectAddr.splice( i , 1 );
			selectAddrPrint();
			addrConversion();
		}
	})
	
	if( selectAddr == null ){
		addrSelectTF = false;
	}
}



// 차고지 선택이벤트
let count = 0;
let dist_center = [];

$(document).ready(function() {
    $('input[type=checkbox][name=distribution]').change(function() {
        if ($(this).is(':checked')) {
			
            dist_center.push( this.value );
            count++;
            
            if( count == 2 ){
				console.log( this.value );
				openModal( dist_center );
			}
			if( count > 2 ){
				count = 2;
				alert('새게 이상의 차고지를 선택할 수 없습니다.')
				$(this).prop("checked" , false );
				dist_center.splice( this.value , 1 );
				return;
			}
        }
        else {
            console.log(`${this.value} is unchecked`);
            count--;
        }
    });
});


let centerAddrTF = false;	// 물류센터[ 출발지 / 도착지 ] 설정여부 확인 boolean 값
var startAddress = 0;		// 출발지 주소담을 변수
var endAddress = 0;			// 목적지 주소담을 변수

// 모달창에서 출발지/목적지 선택 후 확인버튼을 눌렀을대 동작함수 [ html 에 출발지 목적지 설정정보 구성 및 지도표시 ]
function centerAddr(){
	console.log( selectCenterInfo )
	
	// 출발지 / 목적지 가져오기[ select value 값 ]
	let start = document.querySelector('.start_point').value
	let end = document.querySelector('.end_point').value
	
	// 가져온 value 값으로 비교하여 주소값 대입하기
	if( start == '서울 팡팡물류센터' ){
		startAddress = '서울특별시 송파구 송파대로 55'
	}else if( start == '안산 팡팡물류센터' ){
		startAddress = '경기도 안산시 시화호수로 835'
	}else if( start == '부천 팡팡물류센터' ){
		startAddress = '경기도 부천시 신흥로511번길 112'
	}else if( start == '시흥 팡팡물류센터' ){
		startAddress = '경기도 시흥시 만해로 43'
	}
	
	if( end == '서울 팡팡물류센터' ){
		endAddress = '서울특별시 송파구 송파대로 55'
	}else if( end == '안산 팡팡물류센터' ){
		endAddress = '경기도 안산시 시화호수로 835'
	}else if( end == '부천 팡팡물류센터' ){
		endAddress = '경기도 부천시 신흥로511번길 112'
	}else if( end == '시흥 팡팡물류센터' ){
		endAddress = '경기도 시흥시 만해로 43'
	}

	console.log( start + " " +end )
	console.log( startAddress + " " +endAddress )
	
	let html = `<tr>
					<th> 출발지 </th> <th> 도착지 </th>
				</tr>
				<tr>
					<td> ${start} </td> <td> ${end} </td>
				</tr>`;
	document.querySelector('.s_e_table').innerHTML = html ;
	
	// 출발지/목적지 설정 후 true 값으로 변환
	centerAddrTF = true;
	addrConversion();
	closeModal();
}
	


/* -------------------------- 지도 -------------------------- */ 
// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
var coords = [];

var startAddress_coord = ""; // 주소 -> 좌표값 변환된것 담을 변수
var endAddress_coord = "";

function addrConversion() {
	
	// 출발지 좌표변환
	geocoder.addressSearch( startAddress, function(result, status) {
		
		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		
		        startAddress_coord =  new kakao.maps.LatLng(result[0].y, result[0].x) ;
		        console.log( "start : " + startAddress_coord );
		        console.log( startAddress_coord.Ma );
		        console.log( startAddress_coord.La );
		     
		    } 
		    
	});
	
	// 도착지 좌표변환
	geocoder.addressSearch( endAddress, function(result, status) {
		
		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		
		        endAddress_coord =  new kakao.maps.LatLng(result[0].y, result[0].x); 
		        console.log( "end : " + endAddress_coord );
		    } 
	});
	
	for( let i=0; i<selectAddr.length; i++ ){
	// 주소로 좌표를 검색합니다
		geocoder.addressSearch( selectAddr[i].ordermanagement_address , function(result, status) {
		
		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		
		        coords.push( new kakao.maps.LatLng(result[0].y, result[0].x) );
		        console.log( coords[i] );
		    } 
		});
	}	
}

var map;
var marker_s, marekr_e;

//경로그림정보
var drawInfoArr = [];

initTmap();
function initTmap(){
	// 1. 지도 띄우기
	map = new Tmapv2.Map("map_div", {
		center: new Tmapv2.LatLng(37.3218778, 126.8308848),
		width : "100%",
		height : "500px",
		zoom : 15,
		zoomControl : true,
		scrollwheel : true
	});
}

function setAddress(){
	
	// 차고지 / 경유지 미선택 유효성검사
	if( !centerAddrTF ){
		alert('출발/도착 차고지 선택 후 실행해주세요')
		return;
	}
	if( !addrSelectTF ){
		alert('경유지 선택 후 실행해주세요')
		return;
	}
	
	// 시작, 도착 심볼찍기
	// 시작
	marker_s = new Tmapv2.Marker({
		position : new Tmapv2.LatLng( startAddress_coord.Ma , startAddress_coord.La ),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	// 도착 
	marker_e = new Tmapv2.Marker({
		position : new Tmapv2.LatLng( endAddress_coord.Ma , endAddress_coord.La ),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	for( let i=0; i<coords.length; i++ ){
		
		marker = new Tmapv2.Marker({
			position : new Tmapv2.LatLng( coords[i].Ma , coords[i].La ),
			icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_1.png",
			iconSize : new Tmapv2.Size(24, 38),
			map:map
		});
		
	}
	
	var waypoint = []
	
	for( let i=0; i<coords.length; i++ ){
		waypoint.push({
				"viaPointId": 'test'+i,
		      	"viaPointName": "test"+i,
		      	"viaX": `${coords[i].La}`,
		      	"viaY": `${coords[i].Ma}`
			}
		)
	}
	
	console.log( waypoint );
	console.log( JSON.stringify( waypoint ));
	
	
	var headers = {}; 
	headers["appKey"]="FTgL4h9DokizpClCioLn7EvI4rM9aVhU0GIvct20";
	
	$.ajax({
		type:"POST",
		headers : headers,
		url:"https://apis.openapi.sk.com/tmap/routes/routeOptimization10?version=1&format=json",//
		async:false,
		contentType: "application/json",
		data: JSON.stringify({
				  "reqCoordType": "WGS84GEO",
				  "resCoordType" : "EPSG3857",
				  "startName": "출발",
				  "startX": `${startAddress_coord.La}`,
				  "startY": `${startAddress_coord.Ma}`,
				  "startTime": "201711121314",
				  "endName": "도착",
				  "endX": `${endAddress_coord.La}`,
				  "endY": `${endAddress_coord.Ma}`,
				  "searchOption" : "0",
				  "viaPoints": waypoint
		}),
		success:function( response ){
			var resultData = response.properties;
			var resultFeatures = response.features;
			
			// 결과 출력
			var tDistance = "총 거리 : " + (resultData.totalDistance/1000).toFixed(1) + "km,  ";
			var tTime = "총 시간 : " + (resultData.totalTime/60).toFixed(0) + "분,  ";
			var tFare = "총 요금 : " + resultData.totalFare + "원";
			
			$("#result").text(tDistance+tTime+tFare);
			
			for(var i in resultFeatures) {
				var geometry = resultFeatures[i].geometry;
				var properties = resultFeatures[i].properties;
				var polyline_;
				
				drawInfoArr = [];
				
				if(geometry.type == "LineString") {
					for(var j in geometry.coordinates){
						// 경로들의 결과값(구간)들을 포인트 객체로 변환 
						var latlng = new Tmapv2.Point(geometry.coordinates[j][0], geometry.coordinates[j][1]);
						// 포인트 객체를 받아 좌표값으로 변환
						var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
						// 포인트객체의 정보로 좌표값 변환 객체로 저장
						var convertChange = new Tmapv2.LatLng(convertPoint._lat, convertPoint._lng);
						
						drawInfoArr.push(convertChange);
					}

					polyline_ = new Tmapv2.Polyline({
						path : drawInfoArr,
						strokeColor : "#FF0000",
						strokeWeight: 6,
						map : map
					});
				}
			}
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
}	






        
        