var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
            center: new Tmapv2.LatLng(37.570028, 126.986072),    // 지도의 중심좌표
            width : "750px", // 지도의 넓이
            height : "750px", // 지도의 높이
            zoom : 15, // 지도의 줌레벨
            httpsMode: true,    // https모드 설정
        });