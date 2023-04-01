
console.log(memberInfo.member_no) //로그인한 회원정보 호출

let info={
	type:2,
	login:memberInfo.member_no
}


//전체출력

booklist();
let html='';
function booklist(){
	console.log("booklist진입")
	$.ajax({
		url:"/pangpang/carmanage",
		method:"get",
		data:info,
		success:(r)=>{
			console.log("통신성공");
			console.log(r);
            let html = `<tr> 
            			   <th width="30%"> 회원번호pk </th>    
                           <th width="30%"> 차량일련번호pk </th>
                           <th width="30%"> 배차pk </th>
                           <th width="30%"> 배차시작시간 </th>
                           <th width="30%"> 배차끝시간 </th>
                           <th width="30%"> 배차승인여부 </th>
                     </tr>`
            r.forEach((o)=>{
               html +=`                  
                  <tr>
                  	<td> ${o.member_no} </td>   
                  	<td> ${o.carmanage_no} </td>
                     <td> ${o.bookcar_no} </td>
                     <td> ${o.bookcar_str_date} </td>
                     <td> ${o.bookcar_end_date} </td>
                   	 <td> ${o.bookcar_yn} </td>
                     <td> <button onclick="bookcarmemo()" type="button">메모보기</button>
                   		<button onclick="application()" type="button">신청하기</button> </td>           	
                  </tr>` 				
			})       
			document.querySelector('.booktable').innerHTML=html;
		}
	})
	
}