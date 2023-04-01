package pangpang.model.Dao.car;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.car.BookcarDto;

public class BookcarDao extends Dao{
		//싱글톤
		private static BookcarDao dao= new BookcarDao();
		private BookcarDao() {}
		public static BookcarDao getInstance() {
			return dao;
		}		
	 
		   //배차 출력	
		  public ArrayList<BookcarDto>bookcarlist(){
		      ArrayList<BookcarDto>list = new ArrayList<>();
		      String sql="select * from bookcar;";
		      try {
		         ps=con.prepareStatement(sql);
		         rs=ps.executeQuery();
		         while(rs.next()) {
		        	 BookcarDto dto = new BookcarDto(
		        			 rs.getInt(1), 
		        			 rs.getString(2),
		        			 rs.getString(3),
		        			 rs.getString(4),
		        			 rs.getInt(5), 
		        			 rs.getInt(6));
		        	 list.add(dto);
		         }
		         
		         System.out.println("bookcarlist list ::: " + list);
		      }catch (Exception e) {
		            System.out.println("BookcarDao의 전체출력"+e);
		      }
		      return list;
		   }
		
		
		
}
