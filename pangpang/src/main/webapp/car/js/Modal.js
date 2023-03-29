/*등록모달*/
//모달실행함수
console.log(detailview)

function onpenModal( type , i){
	let html='';
	if(type=2){
		html=`
			<!-- 상세보기모달 -->

				<div class="modal_box">
					<h3 class="modal_title">
						상세정보입니다
					</h3>
					<div class="modal_content">
						<input name="update_number" disabled></input>
						<input name="update_name" disabled></input>
						 <form class="updateForm">	      
							 차량등록일자: ${ detailview[i].carmanage_start } <br>	
				      		 차량폐기일자:    			<br>
						</form> 	
					</div>
					<div class="modal_btns">
						<button onclick="carupdate()" class="modal_check" type="button">확인</button>
						<button onclick="closeModal()" class="modal_cencel" type="button">닫기</button>
					</div>
				</div>

				`
		document.querySelector('.modal_wrap').innerHTML =html;
	}

	document.querySelector('.modal_wrap').style.display ='flex';
}
//모달단기함수
function closeModal(){
	document.querySelector('.modal_wrap').style.display ='none';
}

function onpenModal2(){
	document.querySelector('.modal_wrap2').style.display ='flex';
}
//모달단기함수
function closeModal2(){
	document.querySelector('.modal_wrap2').style.display ='none';
}


