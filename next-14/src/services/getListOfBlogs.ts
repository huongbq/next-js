export default async function getListOfBlogs() {
  try {
    const response = await fetch("http://localhost:3000/api/get-blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch blog list");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
