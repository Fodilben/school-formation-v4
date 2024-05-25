document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");

  // Event listener for the comment form submission
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const commentInput = document.getElementById("comment").value;

    if (emailInput && commentInput) {
      fetch("http://localhost/school-formation-v1/php/comments.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(
          emailInput
        )}&comment=${encodeURIComponent(commentInput)}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            console.log(data.message);
            window.location.reload();
            // Any additional actions after submitting the comment can be added here
          } else {
            console.error(data.message);
          }
        })
        .catch((error) => {
          console.error("Error submitting comment:", error);
        });
    }
  });
});
