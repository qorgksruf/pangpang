package pangpang.controller.car;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import pangpang.model.Dao.car.CarmanagementDao;
import pangpang.model.Dto.car.CarmanagementDto;

/**
 * Servlet implementation class carupdate
 */
@WebServlet("/carupdate")
public class carupdate extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public carupdate() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//현재 서버의 배포된 프로잭트내 폴도 경로 찾기
		String uploadpath = request.getSession().getServletContext().getRealPath("/car/img");
		System.out.println("-------uploadpath-------");
		System.out.println(uploadpath);
		
		System.out.println("doPut request updateFormData " + request.getParameter("updateFormData"));
		
		//업로드
		MultipartRequest multi = new MultipartRequest(
				request, 						//1.요청방식
				uploadpath, 					//2.첨부파일 가져와서 저장할 서버내 폴더
				1024*1024*10 ,					//3.첨부파일 허용 범위 용량 [바이트단위]//얘는 10메가임
				"UTF-8",						//4.첨부파일 한글 인코딩 
				new DefaultFileRenamePolicy()	//5.동일한 첨부파일명이 존재하면 뒤에 숫자 붙여짐 그래서 판별함
		);
		
		int carmanage_no = Integer.parseInt(request.getParameter("carmanage_no"));
		String carmanage_img = multi.getFilesystemName("carmanage_img");
		String carmanage_use_yn =multi.getParameter("carmanage_use_yn");
		String carmanage_finish =multi.getParameter("carmanage_finish");	
		
		CarmanagementDto dto = new CarmanagementDto(carmanage_no, carmanage_img, carmanage_use_yn, carmanage_finish);
				
		System.out.println("CarmanagementDto dto:"+dto);
		/* boolean result = CarmanagementDao.getInstance().carupdate(dto); */
		/* response.getWriter().print(result); */
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
