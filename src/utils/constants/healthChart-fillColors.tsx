
export function getFillColorByScore(score: number | undefined): string {
  if (typeof score !== "number" || isNaN(score)) {
    return "#B91C1C";
  }
  if (score >= 90) {
    return "#34D399"; // Excellent
  } else if (score >= 70) {
    return "#059669"; // Good
  } else if (score >= 50) {
    return "#F97316"; // Average
  } else if (score >= 30) {
    return "#EF4444"; // Poor
  } else {
    return "#B91C1C";
  }
}
