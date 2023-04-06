package pangpang.controller.member;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.spi.FileSystemProvider;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.controller.member.암호화.GetSalt;
import pangpang.controller.member.암호화.madesha;
import pangpang.model.Dao.member.MemberDao;
import pangpang.model.Dto.member.MemberDto;
import pangpang.model.Dto.member.SaltDto;


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
		String member_id = request.getParameter("member_id");
		System.out.println(member_pwd);
		// 저장된 솔트 꺼내기
		ArrayList<SaltDto> salts = GetSalt.getSalt();
		
		// 마지막로그인 날짜 가져오기
		String logindate = MemberDao.getInstance().logindate(member_id);
		//System.out.println("logindate : "+logindate);
		
		// 솔트리스트에서 해당하는 솔트 찾기
		int cnt = 0;
		for(int i = 0 ; i<salts.size();i++) {
			System.out.println("날짜비교 : " + salts.get(i).getSdate().compareTo(logindate));
			if(salts.get(i).getSdate().compareTo(logindate)<0) {
				cnt=i;
			}else if(salts.get(i).getSdate().compareTo(logindate)>0){
				cnt=i-1;
				break;
			}else {
				cnt=i;
				break;
			}
		}
		System.out.println("cnt :"+cnt);
		String salt = salts.get(cnt).getSalt();
		System.out.println(salt);
		String sha = madesha.sha(member_pwd, salt);
		System.out.println("sha : "+sha);
		
		// 2. DAO 호출해서 요청데이터를 보내서 결과 얻기 
		int result = MemberDao.getInstance().login( member_id , sha );
		System.out.println("result : "+result);
		if( result != 0 ) {
			request.getSession().setAttribute( "login", member_id );
			request.getSession().setAttribute( "rank", result );
			System.out.println(salts.get(salts.size()-1).getSalt());
			String salt2 = salts.get(salts.size()-1).getSalt();
			String sha2 = madesha.sha(member_pwd, salt2);
			System.out.println(sha2);
			boolean result2 = MemberDao.getInstance().updatepwd(sha2, member_id, sha);
			if(result2) {
				// 3. Dao 받은 결과를 AJAX에게 전달 
				response.getWriter().print(result);
			}
		}
		System.out.println( request.getSession().getAttribute("login"));
		System.out.println( request.getSession().getAttribute("rank"));	
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
