package pangpang.controller.car;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import pangpang.model.Dao.car.DrivecarDao;

/**
 * Servlet implementation class drivecar
 */
@WebServlet("/drivecar")
public class drivecar extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public drivecar() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String reportday=request.getParameter("reportday"); //작성일자
				System.out.println(reportday);	
			String drivecar_distance=request.getParameter("drivecar_distance");
				System.out.println(drivecar_distance); //행선지
			String purpose=request.getParameter("purpose"); 
				System.out.println(purpose);	//운행목적
			String report_content= request.getParameter("report_content");
				System.out.println(report_content); //보고서내용
			int bookcar_no=Integer.parseInt(request.getParameter("bookcar_no"));
				System.out.println(bookcar_no); //배차넘버
			
			boolean result =DrivecarDao.getInstance().drivereport(reportday,drivecar_distance,purpose, report_content,bookcar_no); 
				response.getWriter().print(result);
				
	}

}
