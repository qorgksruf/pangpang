package pangpang.model.Dao.car;

import pangpang.model.Dao.Dao;

public class DrivecarDao extends Dao {
	//싱글톤
	private static DrivecarDao dao= new DrivecarDao();
	private DrivecarDao() {}
	public static DrivecarDao getInstance() {
		return dao;
	}	
}
