export default async function fetchUserDetails(currentUserId: any) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (e) {
    throw new Error("Failed to fetch user details");
  }
}
