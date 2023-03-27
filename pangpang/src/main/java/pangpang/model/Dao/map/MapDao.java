package pangpang.model.Dao.map;


public class MapDao {
	//싱글톤
		private static MapDao dao= new MapDao();
		private MapDao() {}
		public static MapDao getInstance() {
			return dao;
		}
}
