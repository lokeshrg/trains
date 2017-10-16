package com.ooc.two;

import com.ooc.one.LgTV;

public class FourInnerClassesEg {

	private static int prInt = 1;
	//private int privateNSInt = 2;

	public static void main(String[] args) {
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

		abstractLgtv.turnOn();
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

	static LgTV abstractLgtv = new LgTV() {

		@Override
		public void turnOn() {
			System.out.println("4. Hello from Anonymous class!");

		}
	};
}
