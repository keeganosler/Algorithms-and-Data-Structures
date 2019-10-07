using System;
					
public class Program
{
	public static void Main()
	{
		Console.WriteLine(sums(3,5));
		Console.WriteLine(sums(3,3));
	}
	
	public static int sums(int n1, int n2)
	{
		if(n1 == n2) {
			return 3*(n1+n2);
		} else {
			return n1+n2;
		}
	}
}
