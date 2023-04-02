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
	addrConversion();
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



// 차고지 선택
let distribution = document.getElementsByName('distribution')
distribution.forEach( (o) => {
	console.log( o );
})
	


/* -------------------------- 지도 -------------------------- */ 
// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
var coords = [];

function addrConversion() {
	
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
		center: new Tmapv2.LatLng(37.56701114710962, 126.9973611831669),
		width : "100%",
		height : "500px",
		zoom : 15,
		zoomControl : true,
		scrollwheel : true
	});
}

function setAddress(){
	// 시작, 도착 심볼찍기
	// 시작
	marker_s = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.568085523663385, 126.98605733268329),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	// 도착 
	marker_e = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.56445848334345, 127.00973587385866),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.56626352138058, 126.98735015742581),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_1.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.56568310756034, 127.00221495976581),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_2.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.570369, 126.992153),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_3.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.56335290252303, 127.00352387777271),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_4.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.570721714117965, 127.00186090818215),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_5.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
	marker = new Tmapv2.Marker({
		position : new Tmapv2.LatLng(37.56515390827723, 126.99066536776698),
		icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_6.png",
		iconSize : new Tmapv2.Size(24, 38),
		map:map
	});
	
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
				  "startX": "126.98605733268329",
				  "startY": "37.568085523663385",
				  "startTime": "201711121314",
				  "endName": "도착",
				  "endX": "127.00973587385866",
				  "endY": "37.56445848334345",
				  "searchOption" : "0",
				  "viaPoints": [
				    {
				      "viaPointId": "test01",
				      "viaPointName": "test01",
				      "viaX": "126.98735015742581",
				      "viaY": "37.56626352138058",
				    },
				    {
				      "viaPointId": "test02",
				      "viaPointName": "test02",
				      "viaX": "127.00221495976581",
				      "viaY": "37.56568310756034",
				    },
				    {
				      "viaPointId": "test03",
				      "viaPointName": "test03",
				      "viaX": "126.992153",
				      "viaY": "37.570369",
				    },
				    {
				      "viaPointId": "test04",
				      "viaPointName": "test04",
				      "viaX": "127.00352387777271",
				      "viaY": "37.56335290252303",
				    },
				    {
				      "viaPointId": "test05",
				      "viaPointName": "test05",
				      "viaX": "127.00186090818215",
				      "viaY": "37.570721714117965",
				    },
				    {
				      "viaPointId": "test06",
				      "viaPointName": "test06",
				      "viaX": "126.99066536776698", 
				      "viaY": "37.56515390827723",
				    }
				  ]
		}),
		success:function(response){
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






        
        