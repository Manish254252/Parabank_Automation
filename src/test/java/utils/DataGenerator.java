package utils;

import java.util.Random;

public class DataGenerator {
    private static final String[] FIRST_NAMES = {
            "alex", "sam", "jordan", "mike", "sara", "chris", "emma", "nina", "dave", "lucy"
    };

    private static final String[] LAST_NAMES = {
            "smith", "johnson", "lee", "patel", "brown", "taylor", "clark", "wong", "khan", "gupta"
    };

    private static final Random random = new Random();

    public static String generateUsername() {
        String first = FIRST_NAMES[random.nextInt(FIRST_NAMES.length)];
        String last = LAST_NAMES[random.nextInt(LAST_NAMES.length)];
        int number = 100 + random.nextInt(900); // 100–999
        return first + "." + last + number;    // e.g. sara.patel532
    }

    public static String generatePassword() {
        return "Pass@" + (1000 + random.nextInt(9000)); // e.g. Pass@4321
    }
}
