<?php
// Kiểm tra xem yêu cầu là phương thức POST hay GET
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy giá trị từ form
    $username = htmlspecialchars($_POST['username']);
    echo "<h1>Hello, " . $username . "!</h1>";
} else {
    echo "<h1>Welcome to gethint.php</h1>";
}
?>
