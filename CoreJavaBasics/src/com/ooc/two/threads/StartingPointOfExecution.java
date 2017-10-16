package com.ooc.two.threads;

public class StartingPointOfExecution {
	public static void main(String[] args) {
		System.out.println("All threads begin here!");
		PerformSomeThreadActions psa = new PerformSomeThreadActions();
		Thread t1 = new Thread(){
			@Override
			public void run() {
				// TODO Auto-generated method stub
				super.run();
				try {
					psa.testOnOff();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				psa.getActionCount();
			}
		};
		t1.start();
		GreedyThread gt = new GreedyThread();
		gt.start();
		
		
	}
}
