class Method {
    // Overloaded methods
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b, double c) {
        return a + b + c;
    }
}

class Main {
    public static void main(String[] args) {
        Method m = new Method();

        // Testing the overloaded methods
        System.out.println(m.add(1, 4)); // Calls the 2-parameter add method
        System.out.println(m.add(1, 2, 3)); // Calls the 3-parameter add method (int)
        System.out.println(m.add(1.1, 2.2, 3.3)); // Calls the 3-parameter add method (double)
    }
}
