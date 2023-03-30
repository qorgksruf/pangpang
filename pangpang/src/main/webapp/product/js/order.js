console.log('order js')
console.log(memberInfo)
// 모달 설정 
function openmodal(){
	document.querySelector('.modal_wrap').style.display='flex';
}
function closemodal(){
	document.querySelector('.modal_wrap').style.display='none';
}

getMemberInfo()
//------------------------------------------------------------------------------------- 회원정보 불러오기
function getMemberInfo(){

	document.querySelector('.member_name').innerHTML  		= memberInfo.member_name;
	document.querySelector('.member_email').innerHTML 		= memberInfo.member_email;
	document.querySelector('.member_phone').innerHTML 		= memberInfo.member_phone;
	
	document.querySelector('.receiver_name').innerHTML 		= memberInfo.member_name;
	document.querySelector('.receiver_phone').innerHTML   	= memberInfo.member_phone;
	document.querySelector('.receiver_address').innerHTML 	= memberInfo.member_address;

}

//------------------------------------------------------------------------------------- 받는사람 수정
// 수정 선택시 수정 입력란 오픈
function update_recieverinfo(){	
	
	document.querySelector('.receiver_info').innerHTML = 
	
		`<tr>
			<th width="10%"> 이름	  </th> 
			<td> <input class="receiver_name"  type="text" ></td>
		 </tr>
		 <tr>
			<th  width="10%">휴대폰 번호 </th> 
			<td> <input class="receiver_phone" type="text" ></td>
		 </tr>						
		 <tr>
			<th width="10%"> 배송주소 </th> 
			<td><span class="delivery_address"></span> <button  type="button" onclick="openmodal()"> 주소 찾기 </button> </td>
		 </tr>
		 <tr>
			<th width="10%"> 배송요청사항  </th> 
			<td> 
				<select class="delivery_option">  
					<option value="1"> 문앞 		  </option>
					<option value="2"> 경비실 	  </option>
					<option value="3"> 무인택배보관함 </option>
				</select>
			</td>
		 </tr>`
	
	// 버튼 변경 [수정] => [완료]/[취소]	 
	document.querySelector('.Rinfo').innerHTML 
	= `	<button class="updatebtn" onclick="update_recieverinfo_complete()" type="button"> 완료 </button>
		<button class="updatebtn" onclick="update_recieverinfo_cancle()"   type="button"> 취소 </button>` 
		
	document.querySelector('.receiver_name').value 			= memberInfo.member_name;
	document.querySelector('.receiver_phone').value   		= memberInfo.member_phone;
	document.querySelector('.delivery_address').innerHTML 	= memberInfo.member_address;
	
}
// 수정 완료시 입력한 회원 정보 출력
function update_recieverinfo_complete(){
	
	let receiver_name 		= document.querySelector('.receiver_name').value;
	let receiver_phone 		= document.querySelector('.receiver_phone').value;
	let delivery_address 	= document.querySelector('.delivery_address').innerHTML;
	let delivery_option		= document.querySelector('.delivery_option').value;
	
	document.querySelector('.receiver_info').innerHTML = 		
			`<tr>
				<th width="10%"> 이름	  </th> 
				<td class="receiver_name">${receiver_name} <span>기본배송지</span></td>
			</tr>
			<tr>
				<th  width="10%">휴대폰 번호 </th> 
				<td  class="receiver_phone">${receiver_phone}  </td>
			</tr>						
			<tr>
				<th width="10%"> 배송주소 </th> 
				<td class="receiver_address">${delivery_address}   </td>
			</tr>
			<tr>
				<th width="10%"> 배송요청사항  </th> 
				<td class="delivery_option"> ${delivery_option==1?'기본: 문앞':delivery_option==2?'경비실':'무인택배보관함'} </td>
			</tr>`
	document.querySelector('.Rinfo').innerHTML 
		= `<button class="updatebtn" onclick="update_recieverinfo()" type="button"> 수정 </button>` 			
}
// 수정 취소시 기존 로그인 회원 정보 재호출
function update_recieverinfo_cancle(){
	
	document.querySelector('.receiver_info').innerHTML = 		
			`<tr>
				<th width="10%"> 이름	  </th> 
				<td class="receiver_name"> <span>기본배송지</span></td>
			</tr>
			<tr>
				<th  width="10%">휴대폰 번호 </th> 
				<td  class="receiver_phone"> </td>
			</tr>						
			<tr>
				<th width="10%"> 배송주소 </th> 
				<td class="receiver_address">  </td>
			</tr>
			<tr>
				<th width="10%"> 배송요청사항  </th> 
				<td> 일반 : 문앞 </td>
			</tr>`
			
	document.querySelector('.Rinfo').innerHTML 
		= `<button class="updatebtn" onclick="update_recieverinfo()" type="button"> 수정 </button>` 
		
	getMemberInfo()
}

//------------------------------------------------------------------------------------- 주소검색
// 주소검색 API
function getAddress(){
	
	let keyword = document.querySelector('.keyword').value;
	console.log(keyword)
	
	// api 호출 전에 검색어 체크 	
	if (!checkSearchedWord(keyword)) {return ;}
	
	let info = {
		currentPage : 1,
		countPerPage: 10,
		keyword		: keyword,
		confmKey	: 'devU01TX0FVVEgyMDIzMDMyOTE1MjMzNjExMzY0MDI=',
		resultType	: 'json'
	}
	
	$.ajax({
		url 		: "https://business.juso.go.kr/addrlink/addrLinkApi.do",
		method 		: "post",		
		data 		: info,
		crossDomain	: true,
		success 	: (jsonStr)=>{
			console.log(jsonStr)
			if(jsonStr != null){makeListJson(jsonStr);}
		}// success e
	})	// ajax e
}

let jusoList = [];
 
// 검색된 주소 데이터 테이블 형식으로 변환 => 출력
function makeListJson(jsonStr){
	console.log(jsonStr.result)
	console.log(jsonStr.juso)

	let index = 0;
	let htmlStr = "";
	htmlStr += `<table>`;
	$(jsonStr.results.juso).each(function(){
	
		htmlStr +=`<tr>
					<td class="address_select${index}" onclick="address_select(${index})">${this.roadAddr}</td>
				   </tr>`
		index++;
		
	});
	htmlStr += `</table>`;
	document.querySelector('.resultbox').innerHTML = htmlStr;
	console.log(jusoList)
}

// 주소검색시 특수문자, 특정문자열 제거
function checkSearchedWord(keyword){
	if(keyword.length >0){
		
		//특수문자 제거
		var expText = /[%=><]/ ;
		if(expText.test(keyword) == true){
			alert("특수문자를 입력 할수 없습니다.") ;
			return false;
			
		}
		
		//특정문자열(sql예약어의 앞뒤공백포함) 제거
		var sqlArray = new Array(
			//sql 예약어
			"OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC",
             		 "UNION",  "FETCH", "DECLARE", "TRUNCATE" 
		);		
		var regex;
		for(var i=0; i<sqlArray.length; i++){
			regex = new RegExp( sqlArray[i] ,"gi") ;
			
			if (regex.test(keyword) ) {
			    alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
				keyword = keyword.replace(regex, "");
				return false;
			}
		}
	}
	return true ;
}

// 엔터 클릭시 검색 실행
function enterkey(){
	console.log( window.event.keycode )
	if( window.event.keyCode == 13){getAddress();}
}

// 선택한 주소 출력 => 상세주소 div 오픈
function address_select(i){
	
	let selected = 'address_select'+i;
	document.querySelector('.address_select_input').innerHTML = document.querySelector(`.${selected}`).innerHTML;
	document.querySelector('.address_select').style.display='flex';
	document.querySelector('.address_detail').style.display='flex';

}

// 주소 확정
function delivery_address(){
	
	let address_select = document.querySelector('.address_select_input').innerHTML;
	let address_detail = document.querySelector('.address_detail_input').value;
	
	document.querySelector('.delivery_address').innerHTML = address_select+address_detail;
	
	closemodal()

}
//------------------------------------------------------------------------------------- 결제
document.querySelector('.pay').addEventListener('click',BootPay.request)
BootPay.request({
        price: 3000, // 결제할 금액
        application_id: '',
        name: '(판매할 아이템이름)', // 아이템 이름,
        phone: '(구매자 전화번호 ex) 01000000000)',
        order_id: '(이 결제를 식별할 수 있는 고유 주문 번호)',
        pg: '(결제창을 띄우려는 PG 회사명 ex) kcp, danal)',
        method: '(결제수단 정보 ex) card, phone, vbank, bank)',
        show_agree_window: 0, // 결제 동의창 띄우기 여부 1 - 띄움, 0 - 띄우지 않음
        items: [ // 결제하려는 모든 아이템 정보 ( 통계 데이터로 쓰이므로 입력해주시면 좋습니다. 입력하지 않아도 결제는 가능합니다.)
            {
                item_name: '(판매된 아이템 명)',
                qty: 1, // 판매한 아이템의 수량
                unique: '(아이템을 식별할 수 있는 unique key)', 
                price: 3000 // 아이템 하나의 단가
            }
        ],
        user_info: { // 구매한 고객정보 ( 통계 혹은 PG사에서 요구하는 고객 정보 )
            email: '(이메일)',
            phone: '(고객의 휴대폰 정보)',                        
            username: '구매자성함',
            addr: '(고객의 거주지역)'
        }
    }).error(function (data) { 
        // 결제가 실패했을 때 호출되는 함수입니다.
        var msg = "결제 에러입니다.: " + JSON.stringify(data);
        alert(msg);
        console.log(data);
    }).cancel(function (data) {
        // 결제창에서 결제 진행을 하다가 취소버튼을 눌렀을때 호출되는 함수입니다.
        var msg = "결제 취소입니다.: " + JSON.stringify(data);
        alert(msg);
        console.log(data);
    }).confirm(function (data) {
        // 결제가 진행되고 나서 승인 이전에 호출되는 함수입니다.
        // 일부 결제는 이 함수가 호출되지 않을 수 있습니다. ex) 가상계좌 및 카드 수기결제는 호출되지 않습니다.        
        // 만약 이 함수를 정의하지 않으면 바로 결제 승인이 일어납니다.
        if (confirm('결제를 정말 승인할까요?')) {
            console.log("do confirm data: " + JSON.stringify(data));
            // 이 함수를 반드시 실행해야 결제가 완전히 끝납니다.
            // 부트페이로 서버로 결제를 승인함을 보내는 함수입니다.
            this.transactionConfirm(data);
        } else {
            var msg = "결제가 승인거절되었습니다.: " + JSON.stringify(data);
            alert(msg);
            console.log(data);
        }
    }).done(function (data) {
        // 결제가 모두 완료되었을 때 호출되는 함수입니다.
        alert("결제가 완료되었습니다.");
        console.log(data);
    }).ready(function (data) {
        // 가상계좌 번호가 체번(발급) 되었을 때 호출되는 함수입니다.
        console.log(data);
    });	
