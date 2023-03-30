package pangpang.controller.member.암호화;

import java.util.Random;

public class hexrandom {
	public static void main(String[] args) {
		
		hexrandom hex = new hexrandom();
		System.out.println("random_hex : "+ hex.getRandomHexString(8));//0x빼고 8자리 
	}
	
	private String getRandomHexString(int numchars){
        Random r = new Random();
        StringBuffer sb = new StringBuffer();
        while(sb.length() < numchars){
            sb.append(Integer.toHexString(r.nextInt()));
        }

        return sb.toString().substring(0, numchars);
    }
	
	
}
