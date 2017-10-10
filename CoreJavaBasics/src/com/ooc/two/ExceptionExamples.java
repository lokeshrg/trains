package com.ooc.two;

import java.util.prefs.BackingStoreException;

import com.ooc.one.LgTV;

public class ExceptionExamples {
	public static void main(String[] args) {
		useAccessArray();
	}
	public static void accessArray(LgTV[] iArr) throws Exception{
		//throw new Exception();
		System.out.println(iArr[0]);
	}
	
	public static void backupDB() throws BackingStoreException{
		throw new BackingStoreException("tesError");
		//System.out.println("DB successylly backed up");
	}
	
	public static void useAccessArray(){
		//accessArray(new LgTV[8]);
		try {
			System.out.println("Before exception");
			accessArray(new LgTV[6]);
			backupDB();
			System.out.println("After exception");
		} catch (BackingStoreException bkse) {
			// TODO Auto-generated catch block
			bkse.printStackTrace();
			
			System.out.println("Error occured");
		} catch( Exception e2 ){
			//
		} finally{
			//
			System.out.println("Finally this code!");
		}
	}
}
