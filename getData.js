import axios from 'axios';

const getData = async (userId) =>  {
  try {
    const [userResponse, postsResponse] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${Number(userId)}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${Number(userId)}`)
    ]);

    const userData = userResponse.data;
    const userPosts = postsResponse.data;

    return { ...userData, posts: userPosts };
  } catch (error) {
    console.error(error);
  }
}

export default getData;