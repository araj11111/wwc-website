<?php include('app-data/inner-header.php')?>
<div class="breadcrumb-bar">
<div class="container">
<div class="row">
<div class="col-md-12 col-12">
<div class="breadcrumb-list">
<nav aria-label="breadcrumb" class="page-breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Home</a></li>
<li class="breadcrumb-item">Pages</li>
<li class="breadcrumb-item">Support</li>
</ol>
</nav>
</div>
</div>
</div>
</div>
</div>


<div class="container-fuild">
<div class="row">
<img class="img-fluid" alt="Img" src="https://jcbl.com/jcbl-images/jcbl-limited/frame-2.jpg">
</div>
</div>



<section class="share-knowledge-five">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
<div class="section-five-sub">
<div class="header-five-title">
<h2>Want to share your knowledge? Join us a Mentor</h2>
</div>
<div class="career-five-content">
<p>High-definition video is video of higher resolution and quality than
standard-definition. While there is no standardized meaning for high-definition,
generally any video.While there is no standardized meaning for high-definition,
generally any video.</p>
</div>
<div class="knowledge-list-five">
<ul>
<li>
<div class="knowledge-list-group">
<img src="assets/img/icon/award-new.svg" alt="Img">
<p>Best Courses</p>
</div>
</li>
<li class="mb-0">
<div class="knowledge-list-group">
<img src="assets/img/icon/award-new.svg" alt="Img">
<p>Best Courses</p>
</div>
</li>
</ul>
</div>

<a href="course-list.html" class="learn-more-five">Start Teaching Today</a>

</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
<div class="joing-count-five text-center">
<img src="assets/img/joing-us-skill.png" alt="Img">
<div class="joing-count-five-one course-count">
<h3 class="joing-count-number"><span class="counterUp">5,5</span>K<span>+</span></h3>
<p class="joing-count-text">Courses</p>
</div>
<div class="joing-count-five-two course-count">
<h3 class="joing-count-number"><span class="counterUp">50</span>K</h3>
<p class="joing-count-text">Appreciations</p>
</div>
<div class="joing-count-five-three course-count">
<h3 class="joing-count-number"><span class="counterUp">100</span></h3>
<p class="joing-count-text">Countries</p>
</div>
</div>
</div>
</div>
</div>
</section>


<div class="page-content">
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-8 mx-auto">
<div class="support-wrap">
<h5>Submit a Request</h5>
<form >
<div class="input-block">
<label>First Name</label>
<input type="text" name="name" id="name" class="form-control" placeholder="Enter your first Name">
</div>
<div class="input-block">
<label>Email</label>
  <input type="email" id="email" name="email" class="form-control" placeholder="email@example.com" />
</div>

<button class="btn btn-submit" type="submit">Submit</button>
</form>
</div>
</div>
</div>
</div>
</div>
<script>
const form = document.querySelector('form');

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not OK');
  }

  return response.json();
}

form.addEventListener('submit', (e) => {
	
  const formInputs = form.getElementsByTagName('input');
  let formData = {};
  for (let input of formInputs) {
    formData[input.name] = input.value;
  }
  e.preventDefault();
  postData('http://localhost:8083/api/admin/createEnquiry', formData)
    .then((data) => {
		form.reset();
      console.log({ data });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('always called');
    });
});

</script>
<!--script>
$('form').submit(function (e) {
  e.preventDefault();
  const data = {
    name: $('#name').val(),
    email: $('#email').val(),
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8083/api/admin/createEnquiry',
    data: JSON.stringify(data),
    contentType: 'application/json',
  })
    .done((data) => {
      console.log({ data });
    })
    .fail((err) => {
      console.error(err);
    })
    .always(() => {
      console.log('always called');
    });
});

</script>

<?php include('app-data/app-footer.php');?>