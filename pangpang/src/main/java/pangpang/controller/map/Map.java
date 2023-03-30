package pangpang.controller.map;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.map.MapDao;
import pangpang.model.Dto.car.BookcarDto;
import pangpang.model.Dto.member.MemberDto;

@WebServlet("/map")
public class Map extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public Map() { super(); }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int type = Integer.parseInt( request.getParameter("type") );
		int mno = 0;
		
		if( type == 1 ) {
			
			ArrayList<MemberDto> result = MapDao.getInstance().getMifo();
			
			ObjectMapper mapper = new ObjectMapper();
			String jsonArray = mapper.writeValueAsString( result );
			
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			response.getWriter().print( jsonArray );
		
			
		}else if( type == 2 ) {
			
			BookcarDto dto = MapDao.getInstance().getBCarinfo( 5 );
			
			response.setCharacterEncoding("UTF-8");
			response.getWriter().print( dto );
		}
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
