package Calculator;

public class Addition {

	public static void main(String[] args) {
		int res = 0;
		System.out.println(args[0] + args[1] + args[2]);
		if (args[2].equalsIgnoreCase("m")) {
			res = Integer.valueOf(args[0]) * Integer.valueOf(args[1]);
		} else if (args[2].equalsIgnoreCase("s")) {
			res = Integer.valueOf(args[0]) - Integer.valueOf(args[1]);
		} else if (args[2].equalsIgnoreCase("d")) {
			res = Integer.valueOf(args[0]) / Integer.valueOf(args[1]);
		} else {
			System.out.println("Operator Un identified ");
		}
		// int result = Integer.valueOf(args[0]) + Integer.valueOf(args[1]);

		// TODO Auto-generated method stub
		System.out.println("The Result of two numbers is " + res);
		// Direct integers
		/*
		 * int r2 = addTwo(2, 3); System.out.println(r2);
		 */

	}

	private static int addTwo(int i, int j) {
		// TODO Auto-generated method stub
		return i + j;
	}

}
