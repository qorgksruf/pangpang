//memberno로 배차기록 조회화기
console.log(memberInfo.member_id)

let login=memberInfo.member_id;

record();
function record(){
	console.log("record열림");
	
   $.ajax({
      url:"/pangpang/view",
      data:{"login":login},
      method:"get",
      success:(r)=>{
         console.log('통신');
         console.log(r);
         	let html=`<tr>
                           <th width="10%"> 번호 </th>
                           <th width="10%"> 운행시작일자 </th>
                           <th width="10%"> 운행종료일자 </th>
                           <th width="10%"> 운행허가상태</th>>
                           <th width="10%"> 비고 </th>						
						</tr>`
			r.forEach((o,i)=>{
               html +=`                  
                  <tr>
                     <td> ${i+1}</td>
                     <td> ${o.bookcar_str_date} </td>
                     <td> ${o.bookcar_end_date} </td>
                     <td> ${o.bookcar_yn} </td>
					 <td> ${o.reason} </td>
                  </tr>`  
						
			})
			document.querySelector('.myrecord').innerHTML=html;
      }//success e
      
   })//ajax e	
}//함수 e