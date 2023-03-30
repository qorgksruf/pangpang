console.log('map.js 시작');


let type = 0;

// 1. 회원정보 가져오기
getMemberInfo();
function getMemberInfo(){
	
	$.ajax({
		url : "/pangpang/map",
		method : "get",
		data : { "type" : 1 },
		success : ( r ) => {
			console.log('getMemberInfo 통신'); console.log( r );
							
		}
	})
}


// 2. 차량 배차정보 


/* -------------------------- 지도 -------------------------- */ 
var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
            center: new Tmapv2.LatLng(37.570028, 126.986072),    // 지도의 중심좌표
            width : "100%", // 지도의 넓이
            height : "500px", // 지도의 높이
            zoom : 15, // 지도의 줌레벨
            httpsMode: true,    // https모드 설정
        });