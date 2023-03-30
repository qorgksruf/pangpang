
// 모달 설정 
function openmodal(){
	document.querySelector('.modal_wrap').style.display='flex';
}
function closemodal(){
	document.querySelector('.modal_wrap').style.display='none';
}

//------------------------------------------------------------------------------------- 회원정보 불러오기
function getMemberInfo(){
	
}



//------------------------------------------------------------------------------------- 받는사람 수정
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
				<select>  
					<option> 문앞 		</option>
					<option> 경비실 		</option>
					<option> 무인택배보관함 </option>
				</select>
			</td>
		 </tr>`
		 
}

function update_recieverinfo_complete(){
	
}
function update_recieverinfo_cancle(){

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

// 배송지 확정
function delivery_address(){
	
	let address_select = document.querySelector('.address_select_input').innerHTML;
	let address_detail = document.querySelector('.address_detail_input').value;
	
	document.querySelector('.delivery_address').innerHTML = address_select+address_detail;
	
	closemodal()

}

