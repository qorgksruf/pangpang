//배차페이지 차량선택출력
view="";
carchoice();
function carchoice(){

   console.log("carmanagement.js carList 진입");
   $.ajax({
      url:"/pangpang/carmanage",
      data:{type:3},
      method:"get",
      async:false,
      success:(r)=>{
         console.log('통신');
         console.log(r);
         view=r
            let html = `<tr>            
                           <th width="10%"> 번호 </th>
                           <th width="10%"> 차량번호 </th>
                           <th width="10%"> 차량이름 </th>
                           <th width="10%"> 차량이미지</th>>
                           <th width="10%"> 비고 </th>
                     </tr>`
            r.forEach((o,i)=>{
               html +=`                  
                  <tr>
                     <td> ${i+1} </td>
                     <td style="display: none;"> ${o.carmanage_no} </td>
                     <td> ${o.carmanage_number} </td>
                     <td> ${o.carmanage_name} </td>
                     <td><img src="/pangpang/car/img/${o.carmanage_img == null ? 'default.png' : o.carmanage_img}" width="100%"> </td>
                     <td> <button onclick="choice(${o.carmanage_no})" type="button">선택하기</button></td>          	
                  </tr>`               
            })         
            document.querySelector('.carchoice').innerHTML = html;   
      }
      
   })//ajax e
}//함수 e


//선택하기함수
function choice(carmanage_no){
	console.log(carmanage_no);
		onpenModal(4);
};


console.log(memberInfo);
console.log(memberInfo.member_id);

let login=memberInfo;

//배차예약정보 전송버튼
function confirm(){
	let book={
		bookcar_destination : document.querySelector('.bookcar_destination').value,
		bookcar_str_date : document.querySelector('.bookcar_str_date').value,
		bookcar_end_date : document.querySelector('.bookcar_end_date').value,	
		login
	}
	
	console.log(book);
	
	$.ajax({
		url:"/pangpang/bookcar",
		method:"get",
		data:book,
		success:(r)=>{
			console.log("통신성공");
			console.log(r);
		}
	})
	 	 	
}



//배차관리테이블출력
//console.log(memberInfo.member_no) //로그인한 회원정보 호출

let info={
	type:2,
	login:memberInfo.member_no
}


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