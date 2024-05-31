// Get the container element where comments will be displayed
const commentsSection = document.getElementById("comments-area");

// Function to load comments from the server
async function fetchComments() {
  try {
    // Fetch comments from the specified URL
    const response = await fetch(
      "http://localhost/school-formation-v1/php/comments.php"
    );
    const data = await response.json(); // Parse the response as JSON

    if (data.status === "success") {
      // Check if the response status is "success"
      const commentList = data.comments; // Get the comments from the response
      console.log(commentList); // Log comments to the console for debugging
      commentsSection.innerHTML = ""; // Clear the comments container

      if (Array.isArray(commentList) && commentList.length) {
        // Check if comments is an array and has elements
        let commentsHTML = "<h2>Commentaires</h2>"; // Initialize HTML string with a header

        // Loop through each comment and build the HTML
        commentList.reverse().forEach((comment) => {
          commentsHTML += `
          <div class="comment">
              <div class="image">
                <img src="./imgs/profile-icon-comments.png" alt="" />
              </div>
              <h5>${comment.email}</h5>
              <p>${comment.COMMENT}</p>
            </div>`;
        });

        // Set the built HTML to the comments container
        commentsSection.innerHTML = commentsHTML;
      } else {
        // If no comments are available, display a placeholder message
        commentsSection.innerHTML = "<p>Aucun commentaire pour le moment.</p>";
      }
    }
  } catch (error) {
    console.error("Error loading comments:", error); // Log any errors that occur during fetch
  }
}

// Call the fetchComments function when the page loads
window.addEventListener("load", fetchComments);
