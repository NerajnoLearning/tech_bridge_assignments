Assignment # 1

1. Create a loop that will display a string 99 times.

Solution
<!-- package test;
public class DisplayString99Times {
    public static void main(String[] args) {
        String stringToDisplay = "Study Java they said, its easy they said. Yup, I am a jackass, but a learning jackass.";
        // Display the string 99 times
        for (int i = 0; i < 99; i++) {
            System.out.println(stringToDisplay);
        }
    }
} -->

2. Create a loop that will display every odd number from 0 to 99.

Solution
<!-- package test;
public class DisplayOddNumbers {
    public static void main(String[] args) {
        // Display every odd number from 0 to 99
        for (int i = 1; i <= 99; i += 2) {
            System.out.println(i);
        }
    }
}  -->

3. Create a loop that will display every even number from 0 to 99.

Solution
<!-- package test;
public class DisplayEvenNumbers {
    public static void main(String[] args) {
        // Display every even number from 0 to 99
        for (int i = 0; i <= 99; i += 2) {
            System.out.println(i);
        }
    }
} -->

4. Create an alternative version of #3.

Solution

<!-- package test;
public class DisplayEvenNumbersUsingIfElse {
    public static void main(String[] args) {
        // Display every even number from 0 to 99
        for (int i = 0; i <= 99; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
} -->

5. Create a loop that will sum up the odd numbers from 0 to 99 and print it at the end.

Solution
<!-- package test;
public class SumOddNumbers {
    public static void main(String[] args) {
        int sum = 0;

        // Sum up the odd numbers from 0 to 99
        for (int i = 1; i <= 99; i += 2) {
            sum += i;
        }

        // Print the sum at the end
        System.out.println("The sum of the odd numbers from 0 to 99 is: " + sum);
    }
} -->

6. A loop that will sum up the even numbers from 0 to 99 and print it at the end.

Solution
<!-- package test;
public class SumEvenNumbers {
    public static void main(String[] args) {
        int sum = 0;

        // Sum up the even numbers from 0 to 99
        for (int i = 0; i <= 99; i += 2) {
            sum += i;
        }

        // Print the sum at the end
        System.out.println("The sum of the even numbers from 0 to 99 is: " + sum);
    }
} -->

7. Create a loop that finds the sum of the numbers between two numbers that are given by the user, inclusive,

Solution

<!--
import java.util.Scanner;
public class SumOfNumbersBetweenTwoNumbers {
    public static void main(String[] args) {
        // Get the two numbers from the user
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the first number: ");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter the second number: ");
        int secondNumber = scanner.nextInt();

        // Calculate the sum of the numbers between the two numbers, inclusive
        int sum = 0;
        for (int i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }

        // Print the sum to the console
        System.out.println("The sum of the numbers between " + firstNumber + " and " + secondNumber + ", inclusive, is: " + sum);
    }
} -->

