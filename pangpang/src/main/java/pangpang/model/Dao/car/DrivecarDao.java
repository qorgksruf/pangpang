package pangpang.model.Dao.car;

import pangpang.model.Dao.Dao;

public class DrivecarDao extends Dao {
	//싱글톤
	private static DrivecarDao dao= new DrivecarDao();
	private DrivecarDao() {}
	public static DrivecarDao getInstance() {
		return dao;
	}	
	
	public boolean drivereport(String reportday,String drivecar_distance,String purpose, String report_content, int bookcar_no) {
		String sql="insert into drivecar ( drivecar_str_date , drivecar_end_date , drivecar_distance , drivecar_parking , bookcar_no, report_content)\r\n"
				+ "values ( \r\n"
				+ "         (select bookcar_str_date from bookcar where bookcar_no = ? ) ,\r\n"
				+ "		 	(select bookcar_end_date from bookcar where bookcar_no = ? ) ,\r\n"
				+ "            ?,\r\n"
				+ "            ?,\r\n"
				+ "            ?,\r\n"
				+ "            ?\r\n"				
				+ "      );";
			
		try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, bookcar_no);
			ps.setInt(2, bookcar_no);
			ps.setString(3, drivecar_distance);
			ps.setString(4, purpose);
			ps.setInt(5, bookcar_no);
			ps.setString(6,report_content );
			ps.executeUpdate();
			
			return true;
			
		}catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}
}
