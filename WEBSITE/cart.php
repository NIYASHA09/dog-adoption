<?php

require_once 'connection.php';

$sql_cart = "SELECT * FROM cart";
$all_cart = $conn->query($sql_cart);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="font/css/all.min.css">
    <link rel="stylesheet" href="cart.css">
    <title>In cart products</title>
</head>
<body>
<header>
    <div class="overlay"></div>
    <nav>
        <h2>ADOPT</h2>
        <ul>
            <li><a href="website.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li class="cart">
                <a href="cart.html">
                    <ion-icon name="basket"></ion-icon>Cart
                </a>
            </li>
        </ul>
    </nav>
 </header>

    <main>
        <h1><?php echo mysqli_num_rows($all_cart); ?> Items</h1>
        <hr>
        <?php
          while($row_cart = mysqli_fetch_assoc($all_cart)){
              $sql = "SELECT * FROM product WHERE product_id=".$row_cart["product_id"];
              $all_product = $conn->query($sql);
              while($row = mysqli_fetch_assoc($all_product)){
        ?>
        <div class="card">
            <div class="images">
                <img src="<?php echo $row["product_image"]; ?>" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ-uPZBDDl6y3vk_jnGDod1GyLEPRzU39SA&usqp=CAU">
            </div>

            <div class="dog-listing">
                <ul class="specs">
                <li><strong>Breed:</strong> Pugs </li>
              </ul>
                <p class="product_name"><?php echo $row["product_name"]; ?></p>
                <p class="price"><b>$<?php echo $row["price"]; ?></b></p>
                <p class="discount"><b><del>$<?php echo $row["discount"]; ?></del></b></p>
                <button class="remove" data-id="<?php echo $row["product_id"]; ?>">Remove from Cart</button>
            </div>
        </div>
        <?php

          }
        }
       ?>
    </main>

    <script>
        var remove = document.getElementsByClassName("remove");
        for(var i = 0; i<remove.length; i++){
            remove[i].addEventListener("click",function(event){
                var target = event.target;
                var cart_id = target.getAttribute("data-id");
                var xml = new XMLHttpRequest();
                xml.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                       target.innerHTML = this.responseText;
                       target.style.opacity = .3;
                    }
                }

                xml.open("GET","connection.php?cart_id="+cart_id,true);
                xml.send();
            })
        }
    </script>
</body>
</html>