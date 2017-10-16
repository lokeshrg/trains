package com.ooc.two;

import com.ooc.one.LgTV;
import com.ooc.one.LgTvOne;

public class FourInnerClassesEg {

	private static int prInt = 1;
	//private int privateNSInt = 2;

	public static void main(String[] args) {
		//int abc;
		System.out.println("Hello!");

		class InnerLocalClass {
			public void methodInLocalClass() {
				System.out.println("3. Hello from Inner Local class!");
			}
		}

		EgSampleClass eg1 = new EgSampleClass();
		eg1.testOuter();

		FourInnerClassesEg feg = new FourInnerClassesEg();
		NonStaticNestedClass nnc = feg.new NonStaticNestedClass();
		nnc.test();

		InnerLocalClass ilc = new InnerLocalClass();
		ilc.methodInLocalClass();

		// Anonymous class
		abstractLgtv.turnOn();
		lgOne.turnOn();
		//lgOne.testNormalMethod(); // this gives compilation issue 
		//because testNormalMethod is not available in LgTvOne at compile time 
		// but is only available at run time
		// to run a program, compilation is a pre-requisite and hence it will not work
	}

	public static class EgSampleClass {
		static int innerClassInt;

		public void testOuter() {
			System.out.println("1. Hello from nested static class");
			System.out.println("Inside nested static class, accessing private: " + prInt);
		}
	}

	public class NonStaticNestedClass {
		int nlInt;

		private void test() {
			System.out.println("2. Hello from Inner class OR nested non static class!");

		}
	}
	
	static LgTvOne lgOne = new LgTvOne(){
		public void testNormalMethod(){
			System.out.println("Normal method in a normal object!");
		}
		@Override
		public void turnOn() {
			System.out.println("Turned on in TV One in Anonymous class!");
			testNormalMethod();
			
		}
	};
	

	
	static LgTV abstractLgtv = new LgTV() {

		@Override
		public void turnOn() {
			System.out.println("4. Hello from Anonymous class!");
			testInside();

		}
		
		public void testInside(){
			System.out.println("Normal method test inside");
		}
	};
}
