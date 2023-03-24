package pangpang.model.Dao.member;

import pangpang.model.Dao.Dao;

public class MemberDao extends Dao{
	private static MemberDao dao = new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance() { return dao; }
	
	
}
