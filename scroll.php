<html>
<title>Scroll</title>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<style>
.cont{
  width: 100%;
  overflow: hidden;
}

.scorri{
  position:relative;
  display: flex;
  width: 100%;
  animation-name: marquee;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  justify-content: space-between;
}

.tithome{
  display: contents;
}

.tithome li{
  width: fit-content;
  display: inline-block;
  list-style: none;
  padding-right: 30px;
  font-size: 40px;
}

@keyframes marquee {
  0% { up: 0; }
  100% {up: -88.79%;}
}
</style>
</head>
<body>

<div class="cont">
<div class="scorri">
  <ul class="tithome">
    <li>Governance</li>
    <li>HR</li>
    <li>Sales</li>
  </ul>
</div>
</div>

<script >
$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
});
var elements = $('ul.tithome li').length;

for(var i=0;i < elements; i++){
 $(".tithome").clone().prependTo( ".scorri" );
};

var liEle = [];
var liEle = $(".tithome li");
</script>
</body>
</html>