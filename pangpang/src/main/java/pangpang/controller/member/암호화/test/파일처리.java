package pangpang.controller.member.암호화.test;

import java.io.FileOutputStream;
import java.io.OutputStream;

public class 파일처리 {
	public static void main(String[] args) {
		try {
		    OutputStream output = new FileOutputStream("c:/java/salt.txt", true);
		    String str ="a9815071d4c7f4bd013a29a823cdad511fa03a30";
		    byte[] by=str.getBytes();
		    output.write(by);
		    output.close();
				
		} catch (Exception e) {
	            e.getStackTrace();
		}
	}
}
