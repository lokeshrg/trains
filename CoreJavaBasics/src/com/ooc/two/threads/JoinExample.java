package com.ooc.two.threads;

/**
 * https://howtodoinjava.com/core-java/multi-threading/difference-between-yield-and-join-in-threads-in-java/
 * */
public class JoinExample {
	public static void main(String[] args) throws InterruptedException {
		Thread t = new Thread(new Runnable() {
			public void run() {
				System.out.println("First task started");
				System.out.println("Sleeping for 2 seconds");
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				System.out.println("First task completed");
			}
		});
		Thread t1 = new Thread(new Runnable() {
			public void run() {
				System.out.println("Second task completed");
			}
		});
		t.start(); // Line 15
		/*
		 * Giving a timeout within join()[like join(200)], will make the join() effect to be nullified after the specific timeout.
		 * When the timeout is reached, the main thread and taskThread are equally probable candidates to execute. 
		 * However, as with sleep, join is dependent on the OS for timing, 
		 * so you should not assume that join will wait exactly as long as you specify.
		 * */
		t.join(); // Line 16
		t1.start();
	}
}
