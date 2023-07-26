// Function to simulate post creation (returns a Promise)
function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous post creation process
      setTimeout(() => {
        console.log(`Post created: ${post}`);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to update last user activity time (returns a Promise)
  function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      // Simulate updating user's last activity time
      setTimeout(() => {
        const currentTime = new Date().toISOString();
        console.log(`Last activity time updated for user ${user}: ${currentTime}`);
        resolve(currentTime);
      }, 1000);
    });
  }
  
  // Function to delete a post (returns a Promise)
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous post deletion process
      setTimeout(() => {
        console.log(`Post deleted: ${post}`);
        resolve();
      }, 1000);
    });
  }
  
  // Usage example
  async function main() {
    try {
      const posts = [];
  
      // Create some posts (let's assume user "John")
      posts.push(await createPost("Post 1 by John"));
      posts.push(await createPost("Post 2 by John"));
      posts.push(await createPost("Post 3 by John"));
  
      // Update the last user activity time after post creation
      const lastActivityTime = await updateLastUserActivityTime("John");
  
      // Log the posts and last activity time
      console.log("All posts created:", posts);
      console.log("Last activity time of user John:", lastActivityTime);
  
      // Delete the last post
      const lastPostToDelete = posts.pop();
      await deletePost(lastPostToDelete);
  
      // Log the updated set of posts
      console.log("Posts after deletion:", posts);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the main function
  main();
  