console.log("drivecar열림");
let bookcar_no=document.querySelector('.bookcar_no').value;
console.log(bookcar_no);
//보고서등록버튼
function report(){
	console.log("report열림")
	
	
	

	let info={
		 reportday :document.querySelector('.reportday').value,	//작성일자
		 drivecar_distance :document.querySelector('.drivecar_distance').value, //행선지
		 purpose :document.querySelector('.purpose').value, //운행목적
		 report_content :document.querySelector('.report_content').value, //보고서내용
		 bookcar_no //배차넘버
	}
	
	$.ajax({
		url:"/pangpang/drivecar",
		method:"post",
		data:info,
/*		//첨부파일
		contentType: false,
		processData: false,*/
		success:(r)=>{
			console.log('통신');
			console.log(r);
			if(r=='true'){
					alert('글쓰기성공');
					//location.href="/jspweb/board/list.jsp?cno="+document.querySelector('.cno').value;
			}else{
				 alert('글쓰기실패');
			}
		}
	})
	
	
}