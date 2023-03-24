package pangpang.model.Dao.car;

import pangpang.model.Dao.Dao;

public class BookcarDao extends Dao{
		//싱글톤
		private static BookcarDao dao= new BookcarDao();
		private BookcarDao() {}
		public static BookcarDao getInstance() {
			return dao;
		}		
	 
}
