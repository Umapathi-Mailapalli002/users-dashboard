export async function fetchUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error("Failed to fetch users");
      return await res.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  
  export async function fetchUserPosts(userId) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch posts");
      return await res.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }
  