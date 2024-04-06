<?php
session_start();
include('include/config.php');
?>

<!doctype html>
<html class="no-js" lang="en">

<head>
    <title>Tech City</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <meta charset="utf-8">
</head>

<body>
    <div class="header">
        <div class="menu">
            <div class="logo">
                <img onclick="document.location='index.html'" class="img-fluid h-100" src="img/TechTeam.png" alt="">
            </div>
            <a href="member.php">บริการและสินค้า</a>
            <a href="member1.php">สินค้า</a>
            <a href="point.php">คะแนนสะสม</a>
            <a href="register.php">สมัครสมาชิก</a>
            <a href="login.php">เข้าสู่ระบบ</a>
        </div>
    </div>

    <section id="contact" class="contact">
        <div class="container">
            <div class="single-contact-box">
                <form method='post' action='promotion.php'>
                    <h2><b><center>รายชื่อสมาชิกที่จะทำการแลกโปรโมชั่น</center></b></h2>
                    <input class="search-box" type="text" id="searchInput" onkeyup="searchTable()" placeholder="ค้นหารายชื่อสมาชิก">
                    <script src="assets/js/table.js"></script>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>เลือก</th>
                                <th>รหัสลูกค้า</th>
                                <th>ชื่อ-นามสกุล</th>
                                <th>คะแนนสะสม</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php

                            // กำหนดจำนวนข้อมูลต่อหน้า
                            $limit = 10;

                            // หากมีหมายเลขหน้าที่ถูกส่งมาในรีเควสส์
                            $page = isset($_GET['page']) ? $_GET['page'] : 1;

                            // คำนวณ offset ของข้อมูล
                            $offset = ($page - 1) * $limit;

                            // สร้างคำสั่ง SQL พร้อมกับ LIMIT และ OFFSET
                            $sql = "SELECT `Member_Id`, `Member_Name`, `Member_Point` FROM `member` LIMIT $limit OFFSET $offset";
                            $result = $mysqli_p->query($sql);

                            if (!$result) {
                                die("Query failed: " . $mysqli_p->error);
                            }
                            while ($row = $result->fetch_assoc()): ?>
                                <tr>
                                    <td>
                                        <input type='radio' name='selected_member' value="<?php echo $row["Member_Id"]; ?>">
                                    </td>
                                    <td class="Member_Id">
                                        <?php echo $row['Member_Id']; ?>
                                    </td>
                                    <td class="Member_Name">
                                        <?php echo $row['Member_Name']; ?>
                                    </td>
                                    <td class="Member_Tel">
                                        <?php echo $row['Member_Point']; ?>
                                    </td>
                                    </tr>
                            <?php endwhile; ?>
                            <!-- สร้างลิงก์ไปยังหน้าถัดไป -->
                            <a href="?page=<?php echo $page + 1; ?>" class="page-link">หน้าถัดไป</a> 

                            <!-- เพิ่มลำดับเลขหน้า -->
                            <?php
                            // คำนวณหมายเลขหน้าก่อนหน้า
                            $previous_page = ($page - 1 > 0) ? $page - 1 : 1;

                            // แสดงลำดับเลขหน้าปัจจุบันและหน้าก่อนหน้า
                            echo "<span class='page-number'>หน้า $page | </span><a href='?page=$previous_page' class='page-link'>ย้อนกลับ</a>";
                            ?>
                            <!-- ปิดคำสั่งที่ใช้สำหรับการแสดงลิงก์ไปยังหน้าถัดไปและลำดับเลขหน้า -->
                        </tbody>
                    </table><br>
                    <div>
                        <center>
                            <input class="btn" type="button" onclick="document.location='index.html'" value="ย้อนกลับ">
                            <input class="btn" type="button" onclick="document.location='register.php'" value="สมัครสมาชิก">
                            <!-- Use JavaScript to submit the form asynchronously -->
                            <button class="btn" type="submit" name="selectname">ถัดไป</button>
                        </center>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <p class="time" id="real-time"></p>
    <script src="assets/js/script.js"></script>
</body>

</html>

<?php
// Close the database connection
$mysqli_p->close();
?>