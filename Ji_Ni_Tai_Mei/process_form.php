<?php
// 获取表单提交的数据
$studyEffort = $_POST['study-effort'];
$studyRating = intval($_POST['study-rating']);
$studyComment = $_POST['study-comment'];
$currentTimes = date('Y-m-d');

// 数据库连接信息
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "form_data";

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
}

// 准备 SQL 语句并执行插入操作
$sql = "INSERT INTO form_study (study_effort, study_rating, study_comment,current_times) VALUES ('$studyEffort', '$studyRating', '$studyComment','$currentTimes')";

if ($conn->query($sql) === TRUE) {
    echo "数据成功存入数据库";
} else {
    echo "数据存入数据库时出现错误: " . $conn->error;
}

// 关闭数据库连接
$conn->close();

// 回到原页面
header("Location: index.html");
?>
