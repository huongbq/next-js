export default async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result?.users;
  } catch (error) {
    throw new Error();
  }
}
