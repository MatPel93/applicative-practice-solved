/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = {};
  let mostFrequentYear;
  let maxCount = 0;

  for (const obj of data.asteroids) {
    const year = obj.discoveryYear;
    yearCounts[year] = (yearCounts[year] || 0) + 1;

    if (yearCounts[year] > maxCount) {
      maxCount = yearCounts[year];
      mostFrequentYear = year;
    }
  }
  return mostFrequentYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
