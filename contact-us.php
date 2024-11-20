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


<div class="page-banner">
<div class="container">
<div class="row">
<div class="col-md-12 col-12">
<h1 class="mb-0">Support</h1>
</div>
</div>
</div>
</div>


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