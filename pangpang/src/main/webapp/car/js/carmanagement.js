carList();
function carList(i){
   console.log("carmanagement.js carList 진입");
   $.ajax({
      url:"/pangpang/carmanage",
      method:"get",
      success:(r)=>{
         console.log('통신');
         console.log(r);
            let html = `<tr>            
                           <th width="10%"> 번호 </th>
                           <th width="10%"> 차량번호 </th>
                           <th width="10%"> 차량이름 </th>
                           <th width="10%"> 차량이미지</th>
                           <th width="10%"> 차량사용여부 </th>
                           <th width="10%"> 비고 </th>
                     </tr>`
            r.forEach((o,i)=>{
               html +=`                  
                  <tr>
                     <td> ${i+1} </td>
                     <td> ${o.carmanage_number} </td>
                     <td> ${o.carmanage_name} </td>
                     <td><img src="/pangpang/car/img/${o.carmanage_img == null ? 'default.png' : o.carmanage_img}" width="20%"> </td>
                     <td> ${o.carmanage_use_yn} </td>
                     <td> <button type="button">수정</button></td>
                     <td> <button type="button">삭제</button></td>
                     <td> <button type="button">상세보기</button></td>
                  </tr>`               
            })         
            document.querySelector('.carmanage').innerHTML = html;   
      }
      
   })//ajax e
}//함수 e



function regi(){
	console.log('regi함수열림');
	
	let car_formdata = document.querySelectorAll('.car_formdata')[0];
	
	let car_formdataData = new FormData(car_formdata);
		console.log("-----------car_formdataData---------");
		console.log(car_formdataData);
		
	
/*	let info={
		 carmanage_number : document.querySelector('.carmanage_number').value,
		 carmanage_name : document.querySelector('.carmanage_name').value,
		 carmanage_img : document.querySelector('.carmanage_img').value,
		 carmanage_use_yn : document.querySelector('.carmanage_use_yn').value	
	}
	console.log(info);*/
	
   $.ajax({
      url:"/pangpang/carmanage",
      method:"post",
      data:car_formdataData,
      contentType : false ,			
	  processData : false ,	
      success:(r)=>{
         console.log(r);
		if(r=='true'){
			console.log('통신성공')
		}else{
			console.log('통신실패')
		}
      }
   })//ajax e	


}
