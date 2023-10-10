#1 Using LINQ
    static void Main()
    {
        int[] arrayOf95Numbers = GetArrayOf95RandomNumbers();

        var allNumbers = Enumerable.Range(1, 100);

        var missingNumbers = allNumbers.Except(arrayOf95Numbers).Take(5);

        Console.WriteLine("5 numbers not in the array:");
        foreach (var number in missingNumbers)
        {
            Console.Write(number + " ");
        }
    }

    static int[] GetArrayOf95RandomNumbers()
    {
        return new int[] {};
    }



#2 Using Loop
    static void Main()
    {
        int[] arrayOf95Numbers = GetArrayOf95RandomNumbers();

        int[] missingNumbers = new int[5];
        int missingCount = 0;

        for (int i = 1; i <= 100; i++)
        {
            if (!Array.Exists(arrayOf95Numbers, num => num == i))
            {
                missingNumbers[missingCount] = i;
                missingCount++;
                if (missingCount == 5)
                    break;
            }
        }

        Console.WriteLine("5 numbers not in the array:");
        foreach (var number in missingNumbers)
        {
            Console.Write(number + " ");
        }
    }

    static int[] GetArrayOf95RandomNumbers()
    {
        return new int[] {};
    }