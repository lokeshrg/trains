package com.hkrank.thirty;

import java.util.Scanner;

public class StrangeCounter {
	public static void main(String[] args) {
		// 3, 6, 12, 24
		// 1, 2, 4, 8
		// 3i.2^j
		// i from 1 to 10, j from 0 to 5
		// given t, find counter
		Scanner s = new Scanner(System.in);
		int t = s.nextInt();
		s.close();
		System.out.println(betterSolution(t));
		/*for (int i = 0, counter = 1; counter <= t; i++) {
			for (long j = (long) (3 * Math.pow(2, i)); j > 0; --j) {
				System.out.print(counter + ":" + j + "; ");
				counter++;	
				if (counter == t) {
					System.out.println("\nCounter for " + t + " is :" + j);
					return;
				}
			}
			System.out.println("");
		}*/
	}
	
	public static long betterSolution(long t){
		long rem = 3;
		while(t < rem){
			t -= rem;
			rem *= 2;
		}
		return rem-t+1;
	}
}
