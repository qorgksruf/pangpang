

//배차관리테이블출력
//console.log(memberInfo.member_no) //로그인한 회원정보 호출
let info={
	type:2,
	login:memberInfo.member_no
}

booklist();
let html='';
function booklist(){
	console.log("booklist진입")
	$.ajax({
		url:"/pangpang/carmanage",
		async:false,
		method:"get",
		data:info,
		success:(r)=>{
			console.log("통신성공");
			console.log(r);
			document.querySelector('.booktable').innerHTML='';
			  let html = `<tr> 
                        <th width="10%"> 번호</th>    
                           <th width="10%"> 사원명 </th>
                           <th width="10%"> 차일련번호 </th>
                           <th width="25%"> 차이미지 </th>
                           <th width="10%"> 배차시작날짜 </th>
                           <th width="10%"> 배차종료날짜 </th>
                           <th width="25%"> 비고 </th>
                     </tr>`
            r.forEach((o, i)=>{
               html +=`                  
                  <tr>
                	 <td> ${i+1} </td> 
                 	 <td> ${o.member_name} </td> 
                     <td> ${o.carmanage_number} </td>   
                     <td> <img src="/pangpang/car/img/${o.carmanage_img == null ? 'default.png' : o.carmanage_img}" width="100%"> </td>
                     <td> ${o.bookcar_str_date} </td>
                     <td> ${o.bookcar_end_date} </td>   
                     <td> <button onclick="bookCar(${o.bookcar_no}, 'Y')" type="button">수락</button>
                         <button onclick="bookCar(${o.bookcar_no}, 'N')" type="button">반려</button> </td>              
                  </tr>`             
         })       
         document.querySelector('.booktable').innerHTML=html;
		}
	})
	
}

let reason='';
function Reason(bookcar_yn){
	
	if(bookcar_yn=="N"){
		 reason = prompt("반려사유를 입력해주세요");
	}


}


// 수락/반려 버튼 이벤트
function bookCar(bookcar_no, bookcar_yn) {
	console.log("bookCar진입")
	
	Reason(bookcar_yn);
	
	let bookCarInfo = {
		bookCar_no: bookcar_no,
		bookCar_yn: bookcar_yn,
		reason:reason
	};
	
	console.log(bookCarInfo.reason);
	$.ajax({
		url:"/pangpang/bookcar",
		method:"post",
		async:false,
		data:bookCarInfo,
		success:(r)=>{
			console.log("-------------")
			console.log(r) //여기확인
			console.log("bookCar 종료");
			
			booklist();
		}
	})
	
}
