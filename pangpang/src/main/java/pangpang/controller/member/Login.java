package pangpang.controller.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.member.MemberDao;
import pangpang.model.Dto.member.MemberDto;


/**
 * Servlet implementation class Login
 */
@WebServlet("/member/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 1. 세션[Object]에 담겨진 회원아이디 호출 
		int member_no = MemberDao.getInstance().getMno((String)request.getSession().getAttribute("login"));
		// 2. 로그인한 회원의 정보 호출 [ 비밀번호 빼고 ] 
		MemberDto result =  MemberDao.getInstance().getMember(member_no);
			
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(result);
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print( json );
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. AJAX에게 데이터 요청
		String member_pwd = request.getParameter("member_pwd");
		String member_id = "";
		
			member_id = request.getParameter("member_id");
			// 2. DAO 호출해서 요청데이터를 보내서 결과 얻기 
			String result = MemberDao.getInstance().login( member_id , member_pwd );
			if( result != null ) {
				request.getSession().setAttribute( "login", member_id );
				request.getSession().setAttribute( "rank", result );
				
			}
		System.out.println( request.getSession().getAttribute("login"));
		System.out.println( request.getSession().getAttribute("rank"));
		// 2. DAO 호출해서 요청데이터를 보내서 결과 얻기 
		result = MemberDao.getInstance().login( member_id , member_pwd );
		// 3. Dao 받은 결과를 AJAX에게 전달 
		response.getWriter().print(result);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
