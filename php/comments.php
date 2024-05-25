<?php
include('database.php');

$response = ["status" => "error", "message" => "Invalid request"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $stmt = $conn->prepare("INSERT INTO comments (email, comment) VALUES (?, ?)");
        $stmt->bind_param("ss", $email, $comment);
        if ($stmt->execute()) {
            $response = ["status" => "success", "message" => "Comment added successfully!"];
        } else {
            $response["message"] = "Error adding comment: " . $stmt->error;
        }
        $stmt->close();
    } else {
        $response["message"] = "Invalid email format!";
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM comments");
    $comments = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        $response = ["status" => "success", "comments" => $comments];
    } else {
        $response = ["status" => "success", "message" => "No comments found!"];
    }
}

echo json_encode($response);
$conn->close();
?>
