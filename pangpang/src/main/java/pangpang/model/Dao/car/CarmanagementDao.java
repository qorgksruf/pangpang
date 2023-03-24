package pangpang.model.Dao.car;

import pangpang.model.Dao.Dao;

public class CarmanagementDao extends Dao{
	//싱글톤
	private static CarmanagementDao dao= new CarmanagementDao();
	private CarmanagementDao() {}
	public static CarmanagementDao getInstance() {
		return dao;
	}	
}
