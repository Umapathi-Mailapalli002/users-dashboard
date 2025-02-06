import axios from "axios";

export async function fetchUsers() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res)
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
export async function fetchUser(id) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
      console.log(res)
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  
  export async function fetchUserPosts(userId) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }
  