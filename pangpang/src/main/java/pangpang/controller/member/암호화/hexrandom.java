package pangpang.controller.member.암호화;

import java.util.Arrays;
import java.util.Random;

public class hexrandom {
	public static void main(String[] args) {
		hexrandom hex = new hexrandom();
		long h0 = Long.parseLong(hex.getRandomHexString(8),16);
		System.out.printf( "%x ", h0);
		
		// System.out.println("random_hex : "+ hex.getRandomHexString(8));//0x빼고 8자리 
		
		 byte[] arr = new byte[8];
	     new Random().nextBytes(arr);

	     System.out.println("Bytes to Hex: " + convertBytesToHex(arr));
	//5be6f2d0 6a09e667	
		 
	     
	     // 선생님이 만들어주신 것
	      int[] haxarray = new int[6];
	         String[] haxarray2 = new String[6];
	          
	      for( int i = 0 ; i<=5 ; i++ ) {
	         
	         Random r = new Random();
	           int n = r.nextInt();
	           
	           haxarray[i]=n;
	           
	           String Hexadecimal = Integer.toHexString(n);
	           
	           haxarray2[i]=Hexadecimal;
	      }
	      
	      
	      System.out.println( Arrays.toString(haxarray));
	      System.out.println( Arrays.toString(haxarray2));
	      
	      System.out.printf( "%x \n" , haxarray[0]  );
	      System.out.println( Integer.toHexString(haxarray[0])  );
	     
	     
	}

    private static String convertBytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte temp : bytes) {
            result.append(String.format("%02x", temp));
        }
        return result.toString();
    }
	
	
	
	private String getRandomHexString(int numchars){
        Random r = new Random();
        StringBuffer sb = new StringBuffer();
        while(sb.length() < numchars){
            sb.append(String.format("%02x",r.nextInt()));
        }

        return sb.toString().substring(0, numchars);
    }
	
	private static int hash[] = new int[7];
}
