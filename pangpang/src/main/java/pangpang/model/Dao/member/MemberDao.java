package pangpang.model.Dao.member;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.member.MemberDto;

public class MemberDao extends Dao{
	private static MemberDao dao = new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance() { return dao; }
	
	// 1. 회원가입
		public boolean signup( MemberDto dto ) {
			String sql = "insert into member(member_name, member_birth, member_email, member_phone, member_id, member_pwd) values(?,?,?,?,?,?);";
			try {
				ps = con.prepareStatement(sql);
				ps.setString( 1 , dto.getMember_name() );
				ps.setString( 2 , dto.getMember_birth() );
				ps.setString( 3 , dto.getMember_email() );
				ps.setString( 4 , dto.getMember_phone() );
				ps.setString( 5 , dto.getMember_id() );
				ps.setString( 6 , dto.getMember_pwd() );
				int cnt = ps.executeUpdate(); 
				if(cnt == 1) {return true;}
			}catch (Exception e) {System.out.println(e);}
			return false;
		}
		
		// 2. 이메일 중복검사
		public boolean getEmail( String member_email ) {
			String sql = "select * from member where member_email='"+member_email+"';";
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) {
					return true;
				}
			}catch (Exception e) {System.out.println(e);}
			return false;
		}
		
		// 3. 아이디 중복검사
		public boolean getId( String member_id ) {
			String sql = "select * from member where member_id='"+member_id+"';";
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) {
					return true;
				}
			}catch (Exception e) {System.out.println(e);}
			return false;
		}
}
