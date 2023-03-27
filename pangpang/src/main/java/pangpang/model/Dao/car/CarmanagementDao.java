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
	  
	  public boolean regi(CarmanagementDto dto) {
		  String sql ="insert into carmanage(carmanage_number,carmanage_name,carmanage_img,carmanage_use_yn,carmanage_start,carmanage_finish)values(?,?,?,?,?,?)";
		  try {
			  ps= con.prepareStatement(sql);
			  ps.setString(1, dto.getCarmanage_number());
			  ps.setString(2, dto.getCarmanage_name());
			  ps.setString(3, dto.getCarmanage_img());
			  ps.setString(4, dto.getCarmanage_use_yn());
			  ps.setString(5, dto.getCarmanage_start());
			  ps.setString(6, dto.getCarmanage_finish());
			  ps.executeUpdate();
			  return true;
		  }catch (Exception e) {
			System.out.println(e);
		}
		  return false;
	  }
	
}
