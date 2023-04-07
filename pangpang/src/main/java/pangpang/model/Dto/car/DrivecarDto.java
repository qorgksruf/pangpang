package pangpang.model.Dto.car;

public class DrivecarDto {
	private int drivecar_no;
	private String drivecar_str_date;
	private String drivecar_end_date;
	private String drivecar_distance;
	private String drivecar_parking;
	private int bookcar_no;
	private String report_content;
	
	
	//빈생성자
	public DrivecarDto() {
		super();
	}
	
	//풀생성자
	public DrivecarDto(int drivecar_no, String drivecar_str_date, String drivecar_end_date, String drivecar_distance,
			String drivecar_parking, int bookcar_no) {
		super();
		this.drivecar_no = drivecar_no;
		this.drivecar_str_date = drivecar_str_date;
		this.drivecar_end_date = drivecar_end_date;
		this.drivecar_distance = drivecar_distance;
		this.drivecar_parking = drivecar_parking;
		this.bookcar_no = bookcar_no;
	}

	
	public DrivecarDto(int drivecar_no, String drivecar_str_date, String drivecar_end_date, String drivecar_distance,
			String drivecar_parking, int bookcar_no, String report_content) {
		super();
		this.drivecar_no = drivecar_no;
		this.drivecar_str_date = drivecar_str_date;
		this.drivecar_end_date = drivecar_end_date;
		this.drivecar_distance = drivecar_distance;
		this.drivecar_parking = drivecar_parking;
		this.bookcar_no = bookcar_no;
		this.report_content = report_content;
	}

	public int getDrivecar_no() {
		return drivecar_no;
	}

	public void setDrivecar_no(int drivecar_no) {
		this.drivecar_no = drivecar_no;
	}

	public String getDrivecar_str_date() {
		return drivecar_str_date;
	}

	public void setDrivecar_str_date(String drivecar_str_date) {
		this.drivecar_str_date = drivecar_str_date;
	}

	public String getDrivecar_end_date() {
		return drivecar_end_date;
	}

	public void setDrivecar_end_date(String drivecar_end_date) {
		this.drivecar_end_date = drivecar_end_date;
	}

	public String getDrivecar_distance() {
		return drivecar_distance;
	}

	public void setDrivecar_distance(String drivecar_distance) {
		this.drivecar_distance = drivecar_distance;
	}

	public String getDrivecar_parking() {
		return drivecar_parking;
	}

	public void setDrivecar_parking(String drivecar_parking) {
		this.drivecar_parking = drivecar_parking;
	}

	public int getBookcar_no() {
		return bookcar_no;
	}

	public void setBookcar_no(int bookcar_no) {
		this.bookcar_no = bookcar_no;
	}

	@Override
	public String toString() {
		return "DrivecarDto [drivecar_no=" + drivecar_no + ", drivecar_str_date=" + drivecar_str_date
				+ ", drivecar_end_date=" + drivecar_end_date + ", drivecar_distance=" + drivecar_distance
				+ ", drivecar_parking=" + drivecar_parking + ", bookcar_no=" + bookcar_no + "]";
	}
	
	
}
