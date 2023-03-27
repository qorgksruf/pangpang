package pangpang.model.Dao.car;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.car.CarmanagementDto;

public class CarmanagementDao extends Dao{
	//싱글톤
	private static CarmanagementDao dao= new CarmanagementDao();
	private CarmanagementDao() {}
	public static CarmanagementDao getInstance() {
		return dao;
	}	

	   
	   //전체차량 출력
	  public ArrayList<CarmanagementDto>carList(){
	      ArrayList<CarmanagementDto>list = new ArrayList<>();
	      String sql="select * from carmanage";
	      try {
	         ps=con.prepareStatement(sql);
	         rs=ps.executeQuery();
	         
	         while(rs.next()) {
	            System.out.println("rs 반복");
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
	
}
