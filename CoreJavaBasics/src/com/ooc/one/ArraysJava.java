package com.ooc.one;

public class ArraysJava {

	public static void main(String[] args) {

		System.out.println("Hello!");
		int size = 6;
		int[] integerArray = new int[size];

		float[] fArr = new float[size];
		// fArr.

		int[] hugeArr = { 1, 2, 3, 5 };

		integerArray[5] = 37;
		System.out.println(integerArray[3]);
		System.out.println("in Huge array 3rd element:" + hugeArr[3]);

		for (int i = 0; i < integerArray.length; i++) {
			// integerArray[i] = i;
			System.out.println(integerArray[i]);
		}

		LgTvOne[] lgTvArray = new LgTvOne[3];
		for (int i = 0; i < lgTvArray.length; i++) {
			lgTvArray[i] = new LgTvOne();
			System.out.println(lgTvArray[i]);
		}

		String[] strArray = new String[4];
		System.out.println(strArray[3]);
		//System.out.println(strArray[4]);
	}

}