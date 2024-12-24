export async function getDistanceBetweenUsers(
  user: number,
  target: number,
): Promise<number> {
  try {
    return -1;
  } catch (err) {
    console.error("Error calculating distance:", err);
    throw err;
  }
}
