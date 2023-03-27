carList();
function carList(){
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
                     <td> ${o.carmanage_no} </td>
                     <td> ${o.carmanage_number} </td>
                     <td> ${o.carmanage_name} </td>
                     <td><img src="/jspweb/member/pimg/${o.mimg == null ? 'default.webp' : o.mimg}" width="100%"> </td>
                     <td> ${o.carmanage_use_yn} </td>
                     <td> 비고 </td>
                  </tr>`               
            })         
            document.querySelector('.carmanage').innerHTML = html;   
      }
      
   })
}
