import java.util.Scanner;

public class SumEvenAndOddNumbers {
    public static void main(String[] args) {
        // Get the two numbers from the user
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the first number: ");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter the second number: ");
        int secondNumber = scanner.nextInt();

        // Check if the difference between the two numbers is less than 200
        if (Math.abs(firstNumber - secondNumber) < 200) {
            System.out.println("The difference between the two numbers must be at least 200.");
            return; // exit the program
        }

        // Initialize the three sum variables
        int sumOfEvenAndDivisibleBy4 = 0;
        int sumOfEvenAndDivisibleBy8 = 0;
        int sumOfOddAndNotDivisibleBy5 = 0;

        // Use a switch statement to determine which loop to use based on the first number
        switch (firstNumber % 2) {
            case 0: // first number is even
                for (int i = firstNumber; i <= secondNumber; i += 2) {
                    if (i % 4 == 0) {
                        sumOfEvenAndDivisibleBy4 += i;
                    }
                    if (i % 8 == 0) {
                        sumOfEvenAndDivisibleBy8 += i;
                    }
                }
                for (int i = firstNumber + 1; i <= secondNumber; i += 2) {
                    if (i % 5 != 0) {
                        sumOfOddAndNotDivisibleBy5 += i;
                    }
                }
                break;
            case 1: // first number is odd
                for (int i = firstNumber + 1; i <= secondNumber; i += 2) {
                    if (i % 4 == 0) {
                        sumOfEvenAndDivisibleBy4 += i;
                    }
                    if (i % 8 == 0) {
                        sumOfEvenAndDivisibleBy8 += i;
                    }
                }
                for (int i = firstNumber; i <= secondNumber; i += 2) {
                    if (i % 5 != 0) {
                        sumOfOddAndNotDivisibleBy5 += i;
                    }
                }
                break;
        }

        // Display the results
        System.out.println("The sum of the even numbers that are also divisible by 4 is: " + sumOfEvenAndDivisibleBy4);
        System.out.println("The sum of the even numbers that are also divisible by 8 is: " + sumOfEvenAndDivisibleBy8);
        System.out.println("The sum of the odd numbers that are not divisible by 5 is: " + sumOfOddAndNotDivisibleBy5);
    }
}
