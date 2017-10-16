package com.ooc.two;

import com.ooc.one.LgTvOne;

public class ArraysJava {

	public static void main(String[] args) {

		System.out.println("Hello!");
		int size = 6;
		int[] integerArray = new int[size];
		
		ExceptionExamples exEg = new ExceptionExamples();
		
		// non static
		//ExceptionExamples.EgSampleClass egSample = exEg.new EgSampleClass();
		
		//static defn
		//ExceptionExamples.EgSampleClass egSample = new ExceptionExamples.EgSampleClass();
		
		//egSample.
		//ExceptionExamples.useAccessArray();

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

		com.ooc.one.LgTvOne[] lgTvArray = new com.ooc.one.LgTvOne[3];
		for (int i = 0; i < lgTvArray.length; i++) {
			lgTvArray[i] = new LgTvOne();
			System.out.println(lgTvArray[i]);
		}

		String[] strArray = new String[4];
		System.out.println(strArray[3]);
		System.out.println(strArray[4]);
	}
	
	

}