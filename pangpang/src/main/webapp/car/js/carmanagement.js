//숨겨진 no 너 왜 계속 null이니
/*let cno= document.querySelector('.carmanage_no').value ;*/

carList();

//전체출력
let detailview='';

function carList(){

   console.log("carmanagement.js carList 진입");
   $.ajax({
      url:"/pangpang/carmanage",
      method:"get",
      success:(r)=>{
         console.log('통신');
         console.log(r);
         detailview=r;
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
                     <td><img src="/pangpang/car/img/${o.carmanage_img == null ? 'default.png' : o.carmanage_img}" width="100%"> </td>
                     <td> ${o.carmanage_use_yn} </td>
                     <td> <button onclick="carupdate(${o.carmanage_no})" type="button">수정</button></td>
                     <td> <button onclick="cardelete(${o.carmanage_no})" type="button">삭제</button></td>
                     <td> <button onclick="view(${o.carmanage_no})" type="button">상세보기</button></td>
                 	<td><div class="detailview" style="background-color: pink; width: 200px;  height: 100px" > </div></td>
                  </tr>`               
            })         
            document.querySelector('.carmanage').innerHTML = html;   
      }
      
   })//ajax e
}//함수 e


//등록함수
function regi(){
   console.log('regi함수열림');
   
   let car_formdata = document.querySelectorAll('.car_formdata')[0];
   
   let car_formdataData = new FormData(car_formdata);
      console.log("-----------car_formdataData---------");
      console.log(car_formdataData);

   
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
         carList();
      }else{
         console.log('통신실패')
      }
      }
   })//ajax e   

}


//삭제버튼구현
function cardelete(carmanage_no){
	console.log(carmanage_no)
   $.ajax({
      url:"/pangpang/carmanage",
      method:"delete",
     data:{"carmanage_no":carmanage_no },
      success:(r)=>{
         console.log('통신');
         console.log(r);
         if(r=='true'){
            alert('삭제성공')
            carList();
         }else{
            alert('삭제실패')
         }
         
      }
   })      
}



//수정버튼구현
function carupdate(carmanage_no){
	console.log('수정버튼클릭')
	let updateForm = document.querySelector('.updateForm')[0];
	
	let updateFormData = new FormData(updateForm);
	updateFormData.set('carmanage_no',carmanage_no)
   $.ajax({
      url:"/pangpang/carmanage",
      method:"put",
      data:{"updateFormData":updateFormData },
      success:(r)=>{
         console.log('통신');
         console.log(r);
         if(r=='true'){
            alert('수정성공')
         }else{
            alert('수정실패')
         }
         
      }
   })      
}



//상세보기버튼구현
function view(carmanage_no){
	console.log('상세보기버튼')
	
	detailview.forEach((o)=>{
		if(o.carmanage_no ==carmanage_no ){
		console.log("-----------------");
		console.log(o.carmanage_start);
		console.log(o.carmanage_finish);
		
		document.querySelector('.detailview').innerHTML = o.carmanage_start +"<br>"+ o.carmanage_finish;
		
		}
	})
}