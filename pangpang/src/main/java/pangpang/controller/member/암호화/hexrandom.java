package pangpang.controller.member.암호화;

import java.util.Random;

public class hexrandom {
	public static void main(String[] args) {
		hexrandom hex = new hexrandom();
		int h0 = Integer.parseInt(hex.getRandomHexString(8),16);
		System.out.printf( "%x ", h0);
		int h1 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h1);
		int h2 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h2);
		int h3 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h3);
		int h4 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h4);
		int h5 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h5);
		int h6 = Integer.parseInt("6a09e667",16);
		System.out.printf( "%x ", h6);
		
		// System.out.println("random_hex : "+ hex.getRandomHexString(8));//0x빼고 8자리 
		
		 byte[] arr = new byte[8];
	     new Random().nextBytes(arr);

	     System.out.println("Bytes to Hex: " + convertBytesToHex(arr));
	//5be6f2d0 6a09e667	
		
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
