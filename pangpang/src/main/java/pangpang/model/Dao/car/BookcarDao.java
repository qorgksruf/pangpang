package pangpang.model.Dao.car;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.car.BookcarDto;
import pangpang.model.Dto.car.CarmanagementDto;

public class BookcarDao extends Dao{
		//싱글톤
		private static BookcarDao dao= new BookcarDao();
		private BookcarDao() {}
		public static BookcarDao getInstance() {
			return dao;
		}		
	 
		  
		   //배차관리에서 선택을위한 차량 출력 즉 첫화면 프론트용
		  public ArrayList<CarmanagementDto>carListy(){
		      ArrayList<CarmanagementDto>list = new ArrayList<>();
		      String sql="select*from carmanage where carmanage_use_yn=\"y\";";
		      try {
		         ps=con.prepareStatement(sql);
		         rs=ps.executeQuery();
		         
		         while(rs.next()) {
		      
		            CarmanagementDto dto = new CarmanagementDto(
		                  rs.getInt(1),
		                  rs.getString(2),
		                  rs.getString(3),
		                  rs.getString(4),
		                  rs.getString(5),
		                  rs.getString(6),
		                  rs.getString(7),
		                  rs.getInt(8));
		            list.add(dto);
		         }
		         
		         System.out.println("carList list ::: " + list);
		      }catch (Exception e) {
		            System.out.println("carmanagementDao의 전체출력"+e);
		      }
		      return list;
		   }	  
		  		
		// 배차예약정보를 최고권위자한테 줘야함
		public boolean book(String mid, String bookcar_destination, String bookcar_str_date, String bookcar_end_date) {
			String sql="";
			try {
				return true;
			}catch (Exception e) {
				System.out.println(e);
			}
			
			return false;
		}
		
		
		   //배차테이블 전체출력 한번 만들어보기만 함 (테스트용임)
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
