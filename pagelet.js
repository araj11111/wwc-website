var AjaxSetCounter=1;
var IsLastFetchForCategoryCompleted=false;
var IsLastFetchForSubCategoryCompleted=false;
var IsLastFetchForMenuCompleted=false;
var enc = window.btoa("BAKEONCAKE@2018");
 var cartArray=[];
 function getMetaData(ttl)
{
  $.ajax({
		dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_metadata',access_token:enc,title:ttl},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var title=AllData[0].TITLE;
				var url=AllData[0].URL;
				var meta_title=AllData[0].META_TITLE;
				var meta_keys=AllData[0].META_KEYS;
				var meta_desc=AllData[0].META_DESC;
			// alert(meta_title+','+meta_keys+','+meta_desc);
			var metaData='<meta charset="utf-8"><title>'+meta_title+'</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta property="og:title" content="'+meta_title+'"/><meta name="robots" content="noodp"><meta property="og:url" content="'+url+'"/><meta property="og:locale" content="en_us"/><meta property="type" content="website"/><meta http-equiv="Content-Type" content="text/html"/><meta name="keywords" content="'+meta_keys+'" /><meta name="description" content="'+meta_desc+'"><link rel="icon" href="favicon.ico" type="image/x-icon"/><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/><meta property="og:site_name" content="'+meta_title+'"/><meta name="twitter:card" content="summary"/><meta name="twitter:description" content="'+meta_desc+'"/><meta name="twitter:title" content="'+meta_title+'"/><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]--> <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->';
			document.getElementsByTagName('head')[0].innerHTML=metaData;
			 }
		   },
	  error : function (errormsg)
		 {serverError();
		 }
	   });
}

function getSlider()
{
  $j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_slider',access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				image=AllData[i].IMAGE;
				title=AllData[i].TITLE;
				description=AllData[i].DESCRIPTION;
			//	console.log(AllData[i].IMAGE);
		dynHTML +="<div><div style='' data-src='media/wysiwyg/slider-home/slide1.jpg' data-use='background'></div><div class='dataLoaded filmoreLoaded' style='opacity:0;visibility: visible;float:left;left:1061;right: auto;bottom: auto;width:29%;height:94%;background: transparent;color:#EEEEEE;font-family: \"Helvetica Neue\", Verdana, Arial, sans-serif;text-align:left;font-weight: normal;font-style: normal;text-decoration: none;' data-src='"+image+"' data-use='simple' data-style='left:1061,top:0' data-delay='1500' data-time='500' data-easein='linear' data-easeout='linear' data-fxin='fromright' data-fxout='toright' data-fadein='true' data-fadeout='true'><img style='position: relative;z-index:1;visibility: visible;width:100%;height:100%;' src='"+image+"' alt='"+title+"' title='"+title+"' class=''/></div><div data-fontsize='60' style='opacity:0;font-family:Lobster Two;width:35%;height:15%;' class='filmore_caption' data-use='caption' data-style='left:343,top:101' data-delay='1300' data-time='500' data-easein='easeInOutQuint' data-easeout='easeInOutQuint' data-fxin='fromtop' data-fxout='totop' data-fadein='true' data-fadeout='true'><em  style='position: relative;z-index:2;visibility: visible;font-size:60px;float:left;left:343;right: auto;top:101;bottom: auto;width:100%;height:100%;background: transparent;color:#3cc696;text-align:center;font-weight: bolder;font-style: italic;text-decoration: none;' class='hidden-xs'>"+title+"</em></div><div data-fontsize='16' style='opacity:0;font-family:Lobster Two;width:30%;' class='filmore_caption' data-use='caption' data-style='left:383,top:200' data-delay='1300' data-time='500' data-easein='linear' data-easeout='linear' data-fxin='fromleft' data-fxout='toleft' data-fadein='true' data-fadeout='true'><em  style='position: relative;z-index:3;visibility: visible;font-size:16px;float:left;left:383;right: auto;top:200;bottom: auto;width:100%;height:100%;background: transparent;color:#777777;text-align:center;font-weight: normal;font-style: italic;text-decoration: none;' class='font-size-max hidden-xs'>"+description+"</em></div><div class='dataLoaded filmoreLoaded' style='opacity:0;visibility: visible;float:left;left:544;right: auto;top:325;bottom: auto;width:13%;height:12%;background: transparent;color:#EEEEEE;font-family: \"Helvetica Neue\", Verdana, Arial, sans-serif;text-align:center;font-weight: normal;font-style: normal;text-decoration: none;' data-src='media/wysiwyg/slider-home/Button.png' data-use='simple' data-style='left:544,top:325' data-delay='1300' data-time='800' data-easein='linear' data-easeout='linear' data-fxin='fromtoin' data-fxout='fromtoin' data-fadein='true' data-fadeout='true'><img style='position: relative;z-index:4;visibility: visible;width:100%;height:100%;' src='media/wysiwyg/slider-home/Button.png' alt='button' class='sn-none'/></div><div data-fontsize='16' style='opacity:0;font-family:roboto;width:10%;' class='filmore_caption' data-use='caption' data-style='left:572,top:332' data-delay='1300' data-time='800' data-easein='linear' data-easeout='linear' data-fxin='fromtoin' data-fxout='fromtoin' data-fadein='true' data-fadeout='true'><em  style='position: relative;z-index:5;visibility: visible;font-size:16px;float:left;left:572;right: auto;top:332;bottom: auto;width:100%;height:100%;background: transparent;color:#FFFFFF;text-align:center;font-weight: bolder;font-style: normal;text-decoration: none;' class='btn-go sn-none'><a title='collection' href='#'>Go to collection</a></em></div></div>";
				}
			document.getElementById("enfinity_1").innerHTML="<div id='1_enfinity_1' class='pix_slideshow_target' data-width='width: 1920px;' style='width: 1920px; height: 440px; visibility: visible;' data-time='7000' data-transperiod='1500' data-autoadvance='true' data-playpause='true' data-prevnext='true' data-pagination='true'>"+dynHTML+"</div><div class='filmore_commands filmore_autoadv'><a href='#' class='filmore_pause  filmore_command' style=''>Pause</a><a href='#' class='filmore_play filmore_command' style=''>Play</a><a href='#' class='filmore_prev filmore_command' style=''><span>Prev</span></a><span class='filmore_pagination'></span><a href='#' class='filmore_next filmore_command'><span>Next</span></a><div class='filmore_loader'></div>";
			jQuery('#enfinity_1').each(function()
            	{
                var e = jQuery('#1_enfinity_1', this),
                t = parseFloat(e.attr('data-time')),
                a = parseFloat(e.attr('data-transperiod')),
                i = 'true' == e.attr('data-prevnext') ? jQuery('.filmore_prev', this) : '',
                r = 'true' == e.attr('data-prevnext') ? jQuery('.filmore_next', this) : '',
                o = 'true' == e.attr('data-playpause') ? jQuery('.filmore_pause', this) : '',
                s = 'true' == e.attr('data-playpause') ? jQuery('.filmore_play', this) : '',
                n = 'true' == e.attr('data-pagination') ? jQuery('.filmore_pagination', this) : '',
                u = jQuery('.filmore_loader', this),
                l = 'true' == e.attr('data-autoadvance') ? !0 : !1;
                e.filmore({
                        time: t,
                        transPeriod: a,
                        prev: i,
                        next: r,
                        pause: o,
                        play: s,
                        pagination: n,
                        loader: u,
                        autoadv: l,
                        slide_id: '#enfinity_1'
                    })
            	})
			 }
		   },
	  error : function (errormsg) { 
		  serverError();
		 }
	   });
}

function getSiteConfig()
{
	// to convert string to base64 encoder
    var enc = window.btoa("Techabilit@0128");
  $.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_config_value',access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
			document.getElementById('footer-logo').innerHTML='<img src="'+data.LOGO+'" alt="techabilit-logo" width="300" >';
			var social_link=data.SOCIAL_LINKS;
			var dynLink='';
			var linkArray = ["facebook", "twitter","youtube","pinterest","linkedin","google-plus","instagram"];
			for(s=0;s<social_link.length;s++)
				 {
				slink=social_link[s];
				linkName=linkArray[s];
				dynLink+='<li><a target="_blank" href="'+slink+'" title="'+linkName+'"><i class="fa fa-'+linkName+'"></i></a></li>';
				}
			document.getElementsByClassName('social')[0].innerHTML='<li><a href="#"><span>follow us :</span></a></li>'+dynLink;
			var address=data.ADDRESS;
			var dynAddr='<a href="https://goo.gl/maps/mynDZrCcfEm" title="techabilit-groups-address" style="color:#AFDC02;" target="_blank">'+address[0]+'</a>';
			document.getElementById('addr').innerHTML=dynAddr;
			try
			{
			document.getElementById('contact-us').innerHTML='<h5 class="text-theme-color">contact us : </h5><p><a href="https://goo.gl/maps/mynDZrCcfEm" title="techabilit-groups-address" target="_blank" style="color:#666666;">'+address+'</a></p>';
			}
			catch (e)
			{}
			var email=data.EMAIL;
			var dynEmail='';
			var webmail='';
			for(e=0;e<email.length;e++)
				 {
				mail=email[e];
				dynEmail+='<span class="text-theme-color"><a href="mailto:'+mail+'" style="color:#AFDC02;text-decoration:none">'+mail+'</a></span><br/>';
				webmail+='<p><a href="mailto:'+mail+'" style="text-decoration:none;color:#666666;">'+mail+'</a></p>';
				}
			document.getElementById('emails').innerHTML='Email: <br>'+dynEmail;
			try
			{
			document.getElementById('web-mail').innerHTML='<h5 class="text-theme-color">Web mail :</h5>'+webmail;
			}
			catch (e)
			{}
			var contact=data.CONTACT_NUM;
			var dynConc='';
			var callus='';
			for(c=0;c<contact.length;c++)
				 {
				mobile=contact[c];
				dynConc+='<span class="text-theme-color"><a href="tel:+91'+mobile+'" title="phone" style="text-decoration:none;color:#AFDC02;">(+91) '+mobile+'</a></span><br>';
				callus+='<p><a href="tel:+91'+mobile+'" title="phone" style="text-decoration:none;color:#666666;">(+91) '+mobile+'</a></p>';
				}
				document.getElementById('conct').innerHTML='Call Us :<br>'+dynConc;
				try
				{
					document.getElementById('call-us').innerHTML='<h5 class="text-theme-color">call us :</h5>'+callus;
				}
				catch (e)
				{
				}
				document.getElementsByClassName('copyright')[0].innerHTML=data.COPYRIGHT_TEXT+'<a href="http://techabilit.com/" target="_blank"> TechAbilit Groups. All rights reserved';

			 }
		   },
	  error : function (errormsg)
		 {serverError();
		 }
	   });
}
function ValidateMail(val)
{
   if(val.indexOf("@") ==0)
   {
      return false;
   }

   if(val.indexOf("@") == -1 )
   {
      return false;
   }

   if(val.indexOf(".") == 0 )
   {
      return false;
   }

   if(val.indexOf(".") == -1 )
   {
      return false;
   }
  return true;
}
function checkMail(ele)
{
if(ValidateMail(ele) != false)
{
	document.getElementById('lrd').style.display="block";
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'check_mail',mail:ele,access_token:enc},
	   async:true,
	   success:function(data)
	   {
		   document.getElementById('lrd').style.display="none";
	   if(data.DATA == "SUCCESS")
	   {
		document.getElementById('msg').innerHTML='<small style="color:#FA668D;"><i class="fa fa-close"></i> Email Already exists! Try Another email.</small>';
		document.getElementById('submit').style.display="none";
	   }
	   else
	   {
		document.getElementById('msg').innerHTML='<small style="color:#35B087;"><i class="fa fa-check"></i> Email available.</small>';
		document.getElementById('submit').style.display="block";
	  	}
	   },
	  error : function (errormsg)
		 {
			serverError();
		 }
	   });
}
else
{
document.getElementById('msg').innerHTML='<small style="color:#FA668D;"><i class="fa fa-close"></i> Invalid Email Format!</small>';
document.getElementById('submit').style.display="none";
}
}
function registerNow()
{
if(document.getElementsByName('fullname')[0].value != "" && document.getElementsByName('password')[1].value == document.getElementsByName('confirmation')[0].value)
	{
	$j.ajax({
	   type:'post',
		cache:false,
	   url:'bigpipe.php',
	   data:$j('.form-validate').serialize(),
	   success:function(data)
		   {
			$j('.form-validate').trigger("reset");
		  toastr["success"]("Register Successully! Verify your Email Id", "Success!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}

		   },
	  error : function (errormsg)
		 {
			serverError();
		 }
	   });
	}
	else {
			toastr["warning"]("Password Not Matched! Try Again.", "Warning!")
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
	}
}
function authenticateUser(val)
{
	if(val == "page")
	{
		if(document.getElementById('email').value != "" && document.getElementById('pass').value !="")
	{
	$j.ajax({
	   type:'post',
		cache:false,
	   url:'bigpipe.php',
	   data:$j('.login-form').serialize(),
	   success:function(data)
		   {
			$j('.login-form').trigger("reset");
		  if(data.RESPONSE_CODE == "2XX")
		  {
		  toastr["success"]("Authentication Successful!", "Success!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
				self.location="index.php";
		  	}
			else
			   {
			  toastr["error"]("Username or password does not match.", "Invalid Credentials!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
			  }
		   },
	  error : function (errormsg)
		 {
			serverError();
		 }
	   });
	}
	else {
			toastr["warning"]("Field should not be empty.", "Warning!")
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
	}
	}
	else {
	if(document.getElementById('modal-username').value != "" && document.getElementById('modal-password').value !="")
	{
	$j.ajax({
	   type:'post',
		cache:false,
	   url:'bigpipe.php',
	   data:$j('.modal-login-form').serialize(),
	   success:function(data)
		   {
			$j('.modal-login-form').trigger("reset");
		  if(data.RESPONSE_CODE == "2XX")
		  {
		  toastr["success"]("Authentication Successful!", "Success!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
				self.location="index.php";
		  	}
			else
			   {
			  toastr["error"]("Username or password does not match.", "Invalid Credentials!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
			  }
		   },
	  error : function (errormsg)
		 {
			serverError();
		 }
	   });
	}
	else {
			toastr["warning"]("Field should not be empty.", "Warning!")
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
	}

	}

}
function sendReview()
{
 if(document.getElementsByName('nickname')[0].value != "")
	{
	$j.ajax({
	   type:'post',
		cache:false,
	   url:'bigpipe.php',
	   data:$j('#review-form').serialize(),
	   success:function(data)
		   {
			$j('#review-form').trigger("reset");
		  toastr["success"]("Your Review Submitted Successully! Waiting for Approval", "Success!")
			toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}

		   },
	  error : function (errormsg)
		 {
			serverError();
		 }
	   });
	}
	else {
			toastr["warning"]("Field should not be blank.", "Warning!")
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
	}
}
function getProductDetails(id)
{

  if(id !="" && id != undefined){
    $j.ajax({
     dataType: "json",
      type:'get',
      url:'bigpipe.php',
      data:{action:'get_product_details',id:id,access_token:enc},
      async:true,
      success:function(data)
        {
       var response=data.RESPONSE_CODE;
       var records=data.ACTIVE_RECORDS;
       //alert(response);
       if(response == "2XX" && records > 0)
        {
         var AllData=data.DATA;
         var dynHTML='';
         var pid=AllData[0].ID;
         var title=AllData[0].TITLE;
        //  var cid=AllData[0].CAT_ID;
        //  var subcat=AllData[0].SUBCAT_ID;
         var category=AllData[0].CATEGORY[0].title;
         var clink=category.replace(/ /g , "-");
        //  var subcategory=AllData[0].SUBCATEGORY;
        //  var sclink=subcategory.replace(/ /g , "-");
         var short_desc=AllData[0].SHORT_DESCRIPTION;
         var price=AllData[0].DISCOUNT_PRICE;
        //  var meta_title=AllData[0].META_TITLE;
        //  var meta_desc=AllData[0].META_DESC;
        //  var meta_keys=AllData[0].META_KEYS;
         var availability=AllData[0].AVAILABILITY;
         var menusample=AllData[0].CATEGORY;
         var menuHTML='';
         for(i=0;i<menusample.length;i++)
         {
           menuId=menusample[i].id;
           menuttl=menusample[i].title;
           menuHTML+='';
         }
         if(availability != 0)
         {
           var stock='<p class="availability in-stock">Availability: <span><link itemprop="availability" href="http://schema.org/InStock" />In stock	</span></p>';
         }
         else
         {
           var stock='<p class="availability out-of-stock">Availability: <span style="color:#d83820;"><link itemprop="availability" href="http://schema.org/OutOfStock" />Out of stock	</span></p>';
         }
         try
         {
         document.getElementsByClassName('pnames')[0].innerHTML='<h2 itemprop="name">'+title+'</h2>';
     document.getElementById('brdcrm').innerHTML='<li class="home" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="http://www.onlinecakemart.com" title="Go to Home Page"><span itemprop="title">Home</span></a></li><li class="home" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="cakes/'+clink.toLowerCase()+'" title="'+category+'"><span itemprop="title">'+category+'</span></a></li><li class="product" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="#" title="'+title+'"><strong itemprop="title">'+title+'</strong></a></li>';
     document.getElementsByClassName('std')[0].innerHTML=short_desc;
     document.getElementById('avl').innerHTML=stock;
     document.getElementsByClassName('orgprc')[0].innerHTML='<span class="price"><i class="fa fa-rupee"></i> '+price+'</span>';
     document.getElementById('pcost').value=price;
         //getCategories(cid);
         // getFeatureImage(pid);
         getRelatedProducts(pid);
         }
         catch (e)
         { }


        }

        },
     error : function (errormsg)
      {
        serverError();
      }
      });
  }
  else {
    self.location="http://www.onlinecakemart.com/404.shtml";
  }

}
/** Add Cart (productdetails.php)**/
function addCart(id)
{
//var formData=document.getElementById('product_addtocart_form');
//var formData = JSON.stringify($j('#product_addtocart_form').serializeArray()); // store json string
var formData = JSON.parse(JSON.stringify($j('#product_addtocart_form').serializeArray())); // store json object
//alert(formData+'>>>');
//console.log(formData);
//alert(formData.length);
var pid=formData[0].value;
var pcost=formData[1].value;
var pweight=formData[2].value;
var delivery_area=formData[3].value;
var delivery_date=formData[4].value;
var delivery_type=formData[5].value;
var shipping_time=formData[6].value;
var msgoncake=formData[7].value;
var caketype=formData[8].value;
//alert(pcost+">>");
if(delivery_type == "standard delivery")
{
pcost=parseInt(pcost) + 49;
}
if(delivery_type == "fixed time delivery")
{
pcost=parseInt(pcost) + 199;
}
if(delivery_type == "midnight delivery")
{
pcost=parseInt(pcost) + 249;
}
if(caketype == "eggless")
{
pcost=parseInt(pcost) + 50;
}
//alert("Final cost:"+pcost);
$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_cart',id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			var totalprc=data.TOTAL_PRICE;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				pid=AllData[0].ID;
				title=AllData[0].TITLE;
				//price=AllData[0].DISCOUNT_PRICE;
				image=AllData[0].IMAGE;
					var p={pid:pid,pname:title,pimg:image,pcost:pcost,pqty:1,pweight:pweight,delivery_area:delivery_area,delivery_date:delivery_date,delivery_type:delivery_type,shipping_time:shipping_time,msgoncake:msgoncake,caketype:caketype};
	//console.log(p);
	setCart(p);
	//alert(cart);
	document.getElementById("cartpro_process").className+=" cartpro-show";
//setTimeout(showModal(proName),3000);
setTimeout(function() {
            showModal(title);
        }, 2000);

			 }
			else
			{
			serverError();
			}
		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
/**** End *****/
function getWeightById(id) {
	var arrOptions = [];
$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_weight_of_product',id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				for(i=0;i<AllData.length;i++)
				{
				weight=AllData[i].WEIGHT;
				//dynHTML+='<option value="'+weight+'">'+weight+'</option>';
				dynHTML='<span class="rdcntr">One<input type="radio" checked="checked" name="radio"><span class="checkmark"></span></span>';
				//arrOptions.push('<option value="'+weight+'">'+weight+'</option>');
				}
				//return arrOptions.join();

				return dynHTML;

			 }

		   },
	  error : function (errormsg)
		 {
			 serverError();
		 }
	   });

}
function getPriceByWeight(dw,id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_price_by_weight',id:id,wt:dw,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				var price=AllData[0].PRICE;
				try
				{
				document.getElementsByClassName('orgprc')[0].innerHTML='<span class="price"><i class="fa fa-rupee"></i> '+price+'</span>';
				document.getElementById('pcost').value=price;
				}
				catch (e)
				{ }

			 }

		   },
	  error : function (errormsg)
		 {
			 serverError();
		 }
	   });
}
function getRelatedProducts(id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_product',id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				var x=1;
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].ID;
				oldprc=AllData[i].PRICE;
				image=AllData[i].IMAGE;
				title=AllData[i].TITLE;
				newprc=AllData[i].DISCOUNT_PRICE;
			    plink=title.replace(/ /g , "-");
				subcategory=AllData[i].SUBCATEGORY;
				weight=AllData[i].WEIGHT;
				dynHTML+='<div class="bs-item item"><div class="item-inner"><div class="box-image"><div class="effect-default"> <a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" class="product-image"> <img src="'+image[0]+'" alt="'+title+'" class="pimage" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onClick="addtoCart(this.parentNode,'+id+');"><span><span>Add to Cart</span></span></button></div><ul class="add-to-links"><li><a title="Add to Wishlist" href="javascript:void(0);" class="link-wishlist">Wishlist</a></li><li><a title="Add to Compare" href="javascript:void(0);" class="link-compare">Compare</a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'"  class="pname">'+title+'</a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'">Weight: '+weight+' </a></div><div class="bs-price"><div class="price-box"> <span class="regular-price" > <span class="price pcost"  pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span> </span></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div>';
				//dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="setLocation(\'http://www.techabilit.com/products/boc/cart.php\')"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="#" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="#" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="#" title="'+subcategory+'"> '+subcategory+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div>';
				}
				try
				{
				document.getElementById('upsell-product-table').innerHTML=dynHTML;
jQuery('[data-toggle="tooltip"]').tooltip();
decorateTable('upsell-product-table');
var owl_upsell = jQuery("#upsell-product-table");

			owl_upsell.owlCarousel({

				responsive:{

					0:{

						items:1

					},

					480:{

						items:2

					},

					768:{

						items:3

					},

					992:{

						items:3
					},

					1200:{

						items:4

					}

				},

				autoplay:false,

				loop:false,

				nav : true, // Show next and prev buttons

				dots: false,

				autoplaySpeed : 500,

				navSpeed : 500,

				dotsSpeed : 500,

				autoplayHoverPause: true,

			//	margin:30,

			});
				}
				catch (e)
				{ }


			 }

		   },
	  error : function (errormsg)
		 {
			 serverError();
		 }
	   });
}
function checkDelivery()
{
	var zipp=document.getElementsByClassName('zipcode')[0].value;
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'check_delivery',zp:zipp,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				// <p class="availability in-stock" style="padding-left:18%;"><span><link itemprop="availability" href="http://schema.org/InStock">We Deliver in this area</span></p>
				document.getElementById("resultmsg").innerHTML='<p class="availability in-stock" style="padding-left:18%;"><span><link itemprop="availability" href="http://schema.org/InStock">We Deliver in this area</span></p>';
			 }
			else
			{
			//<p class="availability out-of-stock" style="padding:18%;"> <span style="color:#d83820;"><link itemprop="availability" href="http://schema.org/OutOfStock">We are not deliver in this area</span></p>
			document.getElementById("resultmsg").innerHTML='<p class="availability out-of-stock" style="padding-left:18%;"> <span style="color:#d83820;"><link itemprop="availability" href="http://schema.org/OutOfStock">We are not deliver in this area</span></p>';
			}

	 	},
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getProducts(from)
{
  document.getElementById("cartpro_process").className+=" cartpro-show";
  	// document.getElementById('myproducts').innerHTML='<div class="ckloader text-center" id="ckloader"><img src="x_images/cake_loader.gif" class="img-responsive"/></div>';
  $j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_product',access_token:enc,lim:from},
	   async:true,
	   success:function(data)
		   {
         document.getElementById("cartpro_process").className="cartpro-process";
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				var x=1;
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].ID;
				oldprc=AllData[i].PRICE;
				image=AllData[i].IMAGE;
				title=AllData[i].TITLE;
				newprc=AllData[i].DISCOUNT_PRICE;
			    plink=title.replace(/ /g , "-");
				subcategory=AllData[i].SUBCATEGORY;
				weight=AllData[i].WEIGHT;
				if(x % 4 == "0")
				{
				dynHTML+='<div class="bs-item item cf col-lg-3 col-md-3 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="javascript:void(0);" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'"> Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div><div class="clr1 clr2 clr4"></div>';
				}
				else
				{
				dynHTML+='<div class="bs-item item cf col-lg-3 col-md-3 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="#" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'" >Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div>';
				}
x++;
				}
        if(AllData.length == 0) { document.getElementById('more-items').style.display='none'; }
				try
				{
          if(from==1){ document.getElementById('myproducts').innerHTML=dynHTML;} else { document.getElementById('myproducts').innerHTML+= dynHTML;}

jQuery('[data-toggle="tooltip"]').tooltip();
var lim=from+1;
document.getElementById('more-items').innerHTML='<a href="javascript:void(0)"  title="more item" onclick="JavaScript:getProducts('+lim+');">Show More</a>';
				}
				catch (e)
				{ }
			 }


		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getProductsByMenu(id,lim)
{
	document.getElementById("cartpro_process").className+=" cartpro-show";
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_products_by_category',id:id,access_token:enc,lim:lim},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
	  document.getElementById("cartpro_process").className="cartpro-process";

				var AllData=data.DATA;
				var dynHTML='';
				var x=1;
			for(i=0;i<AllData.length;i++)
				 {
					cid=AllData[i].PARENT_ID;
					pid=AllData[i].ID;
					ctitle=AllData[i].CATEGORY;
					// scid=AllData[i].SUBCAT_ID;
					// sctitle=AllData[i].SUBCATEGORY;
					oldprc=AllData[i].PRICE;
					image=AllData[i].IMAGE;
					title=AllData[i].TITLE;
					newprc=AllData[i].DISCOUNT_PRICE;
					plink='';
					if(title != undefined) { plink=title.replace(/ /g , "-"); }
					clink=ctitle.replace(/ /g , "-");
					// sclink=sctitle.replace(/ /g , "-");
					// subcategory=AllData[i].SUBCATEGORY;
					weight=AllData[i].WEIGHT;
	
					//dynHTML+='<li class="item"><div class="item-inner"><div class="box-image"><div class="effect-thumbs"><a href="product-details.php?id='+pid+'" title="'+title+'" class="product-image"> <img id="product-collection-image-913" src="'+image[0]+'" alt="'+title+'" /> <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"><span><span>Add to Cart</span></span></button></div><ul class="add-to-links"><li><a data-toggle="tooltip" data-placement="top" title="Wishlist" href="javascript:void(0)" class="link-wishlist">Wishlist</a></li><li><a data-toggle="tooltip" data-placement="top" title="Compare" href="javascript:void(0)" class="link-compare">Compare</a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="product-details.php?id='+pid+'" class="pname" title="'+title+'">'+title+'</a></h2><p class="no-rating"><a href="javascript:void(0);" title="'+weight+'">Weight: '+weight+'</a></p><div class="bs-price"><div class="price-box"> <span class="regular-price" > <span class="price" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i> '+newprc+'</span> </span></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="product-details.php?id='+pid+'">Quick View</a></div></div></li>';
					if(x % 4 == "0")
					{
					dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="javascript:void(0);" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'"> Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div><div class="clr1 clr2 clr4"></div>';
					}
					else
					{
					dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="#" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'" >Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div>';
					}
	x++;
					}
					if(AllData.length == 0) { IsLastFetchForMenuCompleted=false; } else { IsLastFetchForMenuCompleted=true; }
					try
					{
				if(lim == 1){ document.getElementsByClassName('products-grid')[0].innerHTML=dynHTML; }	else { document.getElementsByClassName('products-grid')[0].innerHTML+=dynHTML;}
	jQuery('[data-toggle="tooltip"]').tooltip();
document.getElementById('brdcrm').innerHTML='<li class="home" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="http://www.onlinecakemart.com" title="Go to Home Page"><span itemprop="title">Home</span></a></li><li class="category4" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="#" title="'+ctitle+'"><strong itemprop="title" >'+ctitle+'</strong></a></li>';
document.getElementsByClassName('category-title')[0].innerHTML='<h1>'+ctitle+'</h1>';
			//document.getElementById('mycategories').innerHTML='<li><a href="javascript:getProductsByCategory('+cid+');">'+ctitle+'</a></li>';
					}
					catch (e)
					{ }
				 }
			else
				{
					document.getElementsByClassName('category-title')[0].innerHTML='<h1>There is no item in this Menu</h1>';
					document.getElementsByClassName('products-grid')[0].innerHTML='';
				}
				localStorage.setItem('menu_id',id);
				getMenus(cid,id);
			   },
		  error : function (errormsg)
			 {
			 serverError();
			 }
		   });
}
function getProductsBySubcategory(id,lim)
{
	document.getElementById("cartpro_process").className+=" cartpro-show";
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_products_by_category',id:id,access_token:enc,lim:lim},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
	  document.getElementById("cartpro_process").className="cartpro-process";

				var AllData=data.DATA;
				var dynHTML='';
				var x=1;
			for(i=0;i<AllData.length;i++)
				 {
					cid=AllData[i].PARENT_ID;
					pid=AllData[i].ID;
					ctitle=AllData[i].CATEGORY;
					// scid=AllData[i].SUBCAT_ID;
					// sctitle=AllData[i].SUBCATEGORY;
					oldprc=AllData[i].PRICE;
					image=AllData[i].IMAGE;
					title=AllData[i].TITLE;
					newprc=AllData[i].DISCOUNT_PRICE;
					if(title != undefined) { plink=title.replace(/ /g , "-"); }
				   
					clink=ctitle.replace(/ /g , "-");
					// sclink=sctitle.replace(/ /g , "-");
					// subcategory=AllData[i].SUBCATEGORY;
					weight=AllData[i].WEIGHT;
	
					//dynHTML+='<li class="item"><div class="item-inner"><div class="box-image"><div class="effect-thumbs"><a href="product-details.php?id='+pid+'" title="'+title+'" class="product-image"> <img id="product-collection-image-913" src="'+image[0]+'" alt="'+title+'" /> <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"><span><span>Add to Cart</span></span></button></div><ul class="add-to-links"><li><a data-toggle="tooltip" data-placement="top" title="Wishlist" href="javascript:void(0)" class="link-wishlist">Wishlist</a></li><li><a data-toggle="tooltip" data-placement="top" title="Compare" href="javascript:void(0)" class="link-compare">Compare</a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="product-details.php?id='+pid+'" class="pname" title="'+title+'">'+title+'</a></h2><p class="no-rating"><a href="javascript:void(0);" title="'+weight+'">Weight: '+weight+'</a></p><div class="bs-price"><div class="price-box"> <span class="regular-price" > <span class="price" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i> '+newprc+'</span> </span></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="product-details.php?id='+pid+'">Quick View</a></div></div></li>';
					if(x % 4 == "0")
					{
					dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="javascript:void(0);" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'"> Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div><div class="clr1 clr2 clr4"></div>';
					}
					else
					{
					dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="#" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'" >Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div>';
					}
	x++;
					}
					if(AllData.length == 0) { IsLastFetchForSubCategoryCompleted=false; } else { IsLastFetchForSubCategoryCompleted=true; }
					try
					{
				if(lim == 1){ document.getElementsByClassName('products-grid')[0].innerHTML=dynHTML; }	else { document.getElementsByClassName('products-grid')[0].innerHTML+=dynHTML;}
	jQuery('[data-toggle="tooltip"]').tooltip();
document.getElementById('brdcrm').innerHTML='<li class="home" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="http://www.onlinecakemart.com" title="Go to Home Page"><span itemprop="title">Home</span></a></li><li class="category4" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="#" title="'+ctitle+'"><strong itemprop="title" >'+ctitle+'</strong></a></li>';
			document.getElementsByClassName('category-title')[0].innerHTML='<h1>'+ctitle+'</h1>';
			//document.getElementById('mycategories').innerHTML='<li><a href="javascript:getProductsByCategory('+cid+');">'+ctitle+'</a></li>';
					}
					catch (e)
					{ }
				 }
			else
				{
					document.getElementsByClassName('category-title')[0].innerHTML='<h1>There is no item in this Subcategory</h1>';
					document.getElementsByClassName('products-grid')[0].innerHTML='';
				}
				localStorage.setItem('subcategory_id',id);
				getSubcategories(cid,id);
			   },
		  error : function (errormsg)
			 {
			 serverError();
			 }
		   });
}
// function showProductsByCategory(id,lim)
// {
// $j.ajax({
// 	  dataType: "json",
// 	   type:'get',
// 	   url:'bigpipe.php',
// 	   data:{action:'get_products_by_category',id:id,access_token:enc,lim:lim},
// 	   async:true,
// 	   success:function(data)
// 		   {
// 			var response=data.RESPONSE_CODE;
// 			var records=data.ACTIVE_RECORDS;
// 			//alert(response);
// 			if(response == "2XX" && records > 0)
// 			 {
// 				var AllData=data.DATA;
// 				var dynHTML='';
// 				var x=1;
// 			for(i=0;i<AllData.length;i++)
// 				 {
// 				cid=id;
// 				pid=AllData[i].ID;
// 				ctitle=AllData[i].CATEGORY;
// 				scid=AllData[i].SUBCAT_ID;
// 				sctitle=AllData[i].SUBCATEGORY;
// 				oldprc=AllData[i].PRICE;
// 				image=AllData[i].IMAGE;
// 				title=AllData[i].TITLE;
// 				newprc=AllData[i].DISCOUNT_PRICE;
// 			   plink=title.replace(/ /g , "-");
// 				clink=ctitle.replace(/ /g , "-");
// 				sclink=sctitle.replace(/ /g , "-");
// 				subcategory=AllData[i].SUBCATEGORY;
// 				weight=AllData[i].WEIGHT;

// 				//dynHTML+='<li class="item"><div class="item-inner"><div class="box-image"><div class="effect-thumbs"><a href="product-details.php?id='+pid+'" title="'+title+'" class="product-image"> <img id="product-collection-image-913" src="'+image[0]+'" alt="'+title+'" /> <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"><span><span>Add to Cart</span></span></button></div><ul class="add-to-links"><li><a data-toggle="tooltip" data-placement="top" title="Wishlist" href="javascript:void(0)" class="link-wishlist">Wishlist</a></li><li><a data-toggle="tooltip" data-placement="top" title="Compare" href="javascript:void(0)" class="link-compare">Compare</a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="product-details.php?id='+pid+'" class="pname" title="'+title+'">'+title+'</a></h2><p class="no-rating"><a href="javascript:void(0);" title="'+weight+'">Weight: '+weight+'</a></p><div class="bs-price"><div class="price-box"> <span class="regular-price" > <span class="price" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i> '+newprc+'</span> </span></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="product-details.php?id='+pid+'">Quick View</a></div></div></li>';
// 				dynHTML+='<div class="bs-item item"><div class="item-inner"><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="box-image"><div class="effect-default"> <a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" class="product-image"> <img src="'+image[0]+'" alt="'+title+'" title="'+title+'" /> </a></div></div><div class="box-info"><h2 class="product-name"><a title="'+title+'" href="online-cakes/'+plink.toLowerCase()+'">'+title+'</a></h2></div></div></div>';
// 				x++;
// 				}
// 				try
// 				{
// 				document.getElementsByClassName('products-grid')[0].innerHTML=dynHTML;
// //jQuery('[data-toggle="tooltip"]').tooltip();

// 				}
// 				catch (e)
// 				{ }
// 			 }
// 		else
// 			{
// 				document.getElementsByClassName('category-title')[0].innerHTML='<h1>There is no item in this Category</h1>';
// 				document.getElementsByClassName('products-grid')[0].innerHTML='';
// 			}
// 			//getCategories(id);
// 		   },
// 	  error : function (errormsg)
// 		 {
// 		 serverError();
// 		 }
// 	   });
// }
function getProductsByCategory(id,lim)
{
	document.getElementById("cartpro_process").className+=" cartpro-show";

	 $j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_products_by_category',id:id,access_token:enc,lim:lim},
	   async:true,
	   success:function(data)
		   {
	  document.getElementById("cartpro_process").className="cartpro-process";
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				var x=1;
			for(i=0;i<AllData.length;i++)
				 {
				cid=id;
				pid=AllData[i].ID;
				ctitle=AllData[i].CATEGORY;
				// scid=AllData[i].SUBCAT_ID;
				// sctitle=AllData[i].SUBCATEGORY;
				oldprc=AllData[i].PRICE;
				image=AllData[i].IMAGE;
				title=AllData[i].TITLE;
				newprc=AllData[i].DISCOUNT_PRICE;
				if(title != undefined) { plink=title.replace(/ /g , "-"); }
			   
				clink=ctitle.replace(/ /g , "-");
				// sclink=sctitle.replace(/ /g , "-");
				// subcategory=AllData[i].SUBCATEGORY;
				weight=AllData[i].WEIGHT;

				//dynHTML+='<li class="item"><div class="item-inner"><div class="box-image"><div class="effect-thumbs"><a href="product-details.php?id='+pid+'" title="'+title+'" class="product-image"> <img id="product-collection-image-913" src="'+image[0]+'" alt="'+title+'" /> <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"><span><span>Add to Cart</span></span></button></div><ul class="add-to-links"><li><a data-toggle="tooltip" data-placement="top" title="Wishlist" href="javascript:void(0)" class="link-wishlist">Wishlist</a></li><li><a data-toggle="tooltip" data-placement="top" title="Compare" href="javascript:void(0)" class="link-compare">Compare</a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="product-details.php?id='+pid+'" class="pname" title="'+title+'">'+title+'</a></h2><p class="no-rating"><a href="javascript:void(0);" title="'+weight+'">Weight: '+weight+'</a></p><div class="bs-price"><div class="price-box"> <span class="regular-price" > <span class="price" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i> '+newprc+'</span> </span></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="product-details.php?id='+pid+'">Quick View</a></div></div></li>';
				if(x % 4 == "0")
				{
				dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="javascript:void(0);" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'"> Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div><div class="clr1 clr2 clr4"></div>';
				}
				else
				{
				dynHTML+='<div class="bs-item item cf col-lg-3 col-md-4 col-sm-6 col-xs-12 "><div class="bs-item-inner item-inner "><div class="sale-item"> <span class="txt-label">Sale</span></div><div class="bs-image box-image"><div class="effect-thumbs"> <a class="product-image" href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" > <img src="'+image[0]+'" title="'+title+'" alt="'+title+'" class="pimage" > <img class="second-image" src="'+image[1]+'" alt="'+title+'" /> </a></div><div class="actions"><div class="add-to-cart"> <button type="button" title="Add to Cart" class="button btn-cart" onclick="addtoCart(this.parentNode,'+id+');"> <span><span>Add to Cart</span></span> </button></div><ul class="add-to-links"><li><a href="#" class="link-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">Wishlist</a></li><li><a href="#" class="link-compare" data-toggle="tooltip" data-placement="top" title="Compare">Compare </a></li></ul></div></div><div class="box-info"><h2 class="product-name"> <a href="online-cakes/'+plink.toLowerCase()+'" class="pname" title="'+title+'" > '+title+' </a></h2><div class="bs-category"> <a href="javascript:void(0);" title="'+weight+'" >Weight: '+weight+' </a></div><div class="bs-price"><div class="sale-price"><div class="price-box"><p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price" ><i class="fa fa-rupee"></i> '+oldprc+' </span></p><p class="special-price"> <span class="price-label">Special Price</span> <span class="price" > <span class="price pcost" pcost="'+newprc+'" pweight="'+weight+'"><i class="fa fa-rupee"></i>'+newprc+'</span></span></p></div></div></div><a data-toggle="tooltip" data-placement="top" class="sm_quickview_handler" title="QuickView" href="online-cakes/'+plink.toLowerCase()+'">Quick View</a></div></div></div><div class="clr'+x+'"></div>';
				}
x++;
				}
				if(AllData.length == 0) { IsLastFetchForCategoryCompleted=false; } else { IsLastFetchForCategoryCompleted=true; }
				try
				{
			if(lim == 1){ document.getElementsByClassName('products-grid')[0].innerHTML=dynHTML; }	else { document.getElementsByClassName('products-grid')[0].innerHTML+=dynHTML;}
jQuery('[data-toggle="tooltip"]').tooltip();
document.getElementById('brdcrm').innerHTML=ctitle;
		document.getElementsByClassName('category-title')[0].innerHTML='<h1>'+ctitle+'</h1>';
		//document.getElementById('mycategories').innerHTML='<li><a href="javascript:getProductsByCategory('+cid+');">'+ctitle+'</a></li>';
				}
				catch (e)
				{ }
			 }
		else
			{
				document.getElementsByClassName('category-title')[0].innerHTML='<h1>There is no item in this Category</h1>';
				document.getElementsByClassName('products-grid')[0].innerHTML='';
			}
			localStorage.setItem('category_id',id);
			getCategories(id);
		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getMenus(sid,id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_menu',sid:sid,id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].id;
				title=AllData[i].title;
				dynHTML+='<li><a href="javascript:getProductsByMenu('+id+',1);">'+title+'</a></li>';
				}
				try
				{
				document.getElementById('mycategories').innerHTML=dynHTML;

				jQuery("#narrow-by-list ol li a").click(function() {
				jQuery(this).toggleClass('checked');
				});

				}
				catch (e)
				{ }
			 }

		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });

}
function getSubcategories(cid,id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_subcategory',cid:cid,id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].id;
				title=AllData[i].title;
				dynHTML+='<li><a href="javascript:getProductsBySubcategory('+id+',1);">'+title+'</a></li>';
				}
				try
				{
				document.getElementById('mycategories').innerHTML=dynHTML;

				jQuery("#narrow-by-list ol li a").click(function() {
				jQuery(this).toggleClass('checked');
				});

				}
				catch (e)
				{ }
			 }

		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getCategories(id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_category',id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].id;
				title=AllData[i].title;
				dynHTML+='<li><a href="javascript:getProductsByCategory('+id+',1);">'+title+'</a></li>';
				}
				try
				{
				document.getElementById('mycategories').innerHTML=dynHTML;

				jQuery("#narrow-by-list ol li a").click(function() {
				jQuery(this).toggleClass('checked');
				});

				}
				catch (e)
				{ }
			 }

		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getFeatureImage(id)
{
	$j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_feature',id:id,access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
				var lightBox='';
				var proThumb='';
			for(i=0;i<AllData.length;i++)
				 {
				id=AllData[i].PRO_ID;
				title=AllData[i].PRODUCT_NAME;
				image=AllData[i].IMG_SRC;
				if(i==0)
				{
				dynHTML+='<img id="image-main" class="gallery-image visible" src="'+image+'" alt="'+title+'" title="'+title+'"/><img id="image-'+i+'" class="gallery-image" src="'+image+'" data-zoom-image="'+image+'"/>';
				lightBox+='<a id = "lightbox_btn" data-placement="top" data-toggle="tooltip" title="Gallery Images" class="fancybox-buttons" data-fancybox-group="thumb" href="'+image+'" data-fancybox-group="gallery"></a>';
				}
				else
				{
				dynHTML+='<img id="image-'+i+'" class="gallery-image" src="'+image+'" data-zoom-image="'+image+'"/>';
				lightBox+='<a  data-placement="top" data-toggle="tooltip" title="Gallery Images" class="fancybox-buttons" data-fancybox-group="thumb" href="'+image+'" data-fancybox-group="gallery"></a>';
				}
				proThumb+='<li> <a class="thumb-link" href="javascript:void(0);" data-src-img="'+image+'" title="'+title+'" data-image-index="'+i+'"><img src="'+image+'" alt="'+title+'"/></a></li>';
				}
				try
				{
				document.getElementsByClassName("product-image-gallery")[0].innerHTML=dynHTML+'<div class="btn-lightbox">'+lightBox+'</div>';
				document.getElementsByClassName("product-image-thumbs")[0].innerHTML=proThumb;
				}
				catch (e)
				{ }
				zoom();

			}

		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}
function getTestimonials()
{
  var enc = window.btoa("Techabilit@0128");
  $.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_testimonials',access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				image=AllData[i].IMG_SRC;
				name=AllData[i].NAME;
				designation=AllData[i].DESIGNATION;
				comment=AllData[i].COMMENT;
				dynHTML+='<div class="item"><div class="testimonial-item bg-color-f"><div class="content clearfix"> <img class="img-responsive" src="'+image+'" alt="'+name+'"><h4>'+name+'</h4><p>'+designation+'</p></div><p>'+comment+'</p></div></div>';
				}
				document.getElementById('mytestimonial').innerHTML=dynHTML;

				// reinitialize
	var $owl = $('.owl-carousel');
$owl.trigger('destroy.owl.carousel');
$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
$owl.owlCarousel({
    // your initial option here, again.
});
// end
			 }
		   },
	  error : function (errormsg)
		 {
		 serverError();
		 }
	   });
}

function getTeam()
{
  var enc = window.btoa("Techabilit@0128");
  $.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_team',access_token:enc},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var dynHTML='';
			for(i=0;i<AllData.length;i++)
				 {
				name=AllData[i].NAME;
				image=AllData[i].IMAGE;
				designation=AllData[i].DESIGNATION;
				description=AllData[i].DESCRIPTION;
				facebook=AllData[i].FACEBOOK;
				linkedin=AllData[i].LINKEDIN;
				twitter=AllData[i].TWITTER;
				email=AllData[i].EMAIL;
				dynHTML+='<div class="col-md-4"><div class="team-item"><div class="team-img"> <img class="img-fullwidth img-responsive" src="'+image+'" alt="'+name+'" ></div><div class="img-title"><h4><a href="#">'+name+'</a></h4><p>'+designation+'</p></div><div class="team-icon"><ul><li><a href="mailto:'+email+'" target="_blank" title="email"><span class="fa fa-envelope"></span></a></li><li><a href="'+twitter+'" target="_blank" title="twitter"><span class="fa fa-twitter"></span></a></li><li><a href="'+linkedin+'" target="_blank" title="linkedin"><span class="fa fa-linkedin"></span></a></li></ul></div></div></div>';
				}
				document.getElementById('myteam').innerHTML=dynHTML;
			 }
		   },
	  error : function (errormsg)
		 {
		 serverError();;
		 }
	   });
}
function getBlog(id)
{
  $j.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_blog',access_token:enc,id:id},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var title=AllData[0].TITLE;
				var image=AllData[0].IMG_SRC;
				var content=AllData[0].CONTENT;
				var img_title=AllData[0].IMG_TITLE;
				var entry_date=AllData[0].DATE_ENTERED;
				var author=AllData[0].AUTHOR;
			// alert(meta_title+','+meta_keys+','+meta_desc);
			var dynHTML='<div class="postTitle"><h2>'+title+'</h2><h3>'+entry_date+'</h3></div><div class="postContent"><p><img alt="'+img_title+'" title="'+img_title+'" src="'+image+'" class="img-responsive" /></p><p>'+content+'</p></div>';
			document.getElementById('brdcrm').innerHTML='<li class="home" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="http://www.onlinecakemart.com" title="Go to Home Page"><span itemprop="title">Home</span></a></li><li class="category4" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url" href="javascript:void(0)" title="'+title+'"><strong itemprop="title" >'+title+'</strong></a></li>';
			document.getElementsByClassName('detail-blog')[0].innerHTML=dynHTML;
			document.getElementsByClassName('category-title')[0].innerHTML='<h1>'+title+'</h1>';
			 }
		   },
	  error : function (errormsg)
		 {
			 serverError();
		 }
	   });
}
function getServiceDetails(ttl,link)
{
 var enc = window.btoa("Techabilit@0128");
  $.ajax({
	  dataType: "json",
	   type:'get',
	   url:'bigpipe.php',
	   data:{action:'get_service_by_title',access_token:enc,title:ttl},
	   async:true,
	   success:function(data)
		   {
			var response=data.RESPONSE_CODE;
			var records=data.ACTIVE_RECORDS;
			//alert(response);
			if(response == "2XX" && records > 0)
			 {
				var AllData=data.DATA;
				var title=AllData[0].TITLE;
				var image=AllData[0].IMAGE;
				var description=AllData[0].LONG_DESC;
				var meta_title=AllData[0].META_TITLE;
				var meta_keys=AllData[0].META_KEYS;
				var meta_desc=AllData[0].META_DESC;
			// alert(meta_title+','+meta_keys+','+meta_desc);
			var metaData='<base href="http://www.techabilit.com/" ><meta charset="utf-8"> <title>'+meta_title+'</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta property="og:title" content="'+meta_title+'"/><meta name="robots" content="noodp"><meta property="og:url" content="'+link+'"/><meta property="og:locale" content="en_us"/><meta property="type" content="website"/><meta http-equiv="Content-Type" content="text/html"/><meta name="keywords" content="'+meta_keys+'" /><meta name="description" content="'+meta_desc+'"><link rel="icon" href="favicon.ico" type="image/x-icon"/><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/><meta property="og:site_name" content="'+meta_title+'"/><meta name="twitter:card" content="summary"/><meta name="twitter:description" content="'+meta_desc+'"/><meta name="twitter:title" content="'+meta_title+'"/><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]--> <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->';
			document.getElementsByTagName('head')[0].innerHTML=metaData;
			document.getElementById('serviceImg').innerHTML='<img src="'+image+'" alt="'+title+'" style="width:100%; height:300px;">';
			document.getElementsByClassName('post-body')[0].innerHTML=description;

			 }
		   },
	  error : function (errormsg)
		 {
			 serverError();
		 }
	   });
}
function addtoCart(ele,id)
{
//	alert("Hii");
	var today = new Date().toISOString().split('T')[0];

	// relocate to product detail page for temporary purpose
	//self.location="product-details.php?id="+id;
	var cart=[];
	var itemArray=[];
	var parent=ele.parentNode;
	var grandParent=parent.parentNode;
	var container=grandParent.parentNode;
	var members=container.getElementsByTagName("*");
	 itemArray.push(id);
	 for(i=0;i < members.length;i++)
    {
        if(members[i].className.search("pname") >=0 )
        {
            proName=members[i].innerHTML;
			itemArray.push(proName);
			//alert(proName);
        }
		if(members[i].className.search("pimage") >=0)
		{
			proImage=members[i].getAttribute("src");
			//alert(proImage);
			itemArray.push(proImage);
		}
		if(members[i].className.search("pcost") >=0)
		{
			proPrice=members[i].getAttribute("pcost");
			proWeight=members[i].getAttribute("pweight");
			//alert(proWeight);
			itemArray.push(proPrice);
			proQty=1;
			itemArray.push(proQty);
			itemArray.push(proWeight)
		}
    }
	//alert(itemArray);
//var p={pid:pid,pname:title,pimg:image,pcost:pcost,pqty:1,pweight:pweight,delivery_area:delivery_area,delivery_date:today,delivery_type:delivery_type,shipping_time:shipping_time,msgoncake:msgoncake,caketype:caketype};

	var p={pid:itemArray[0],pname:itemArray[2],pimg:itemArray[1],pcost:itemArray[3],pqty:itemArray[4],pweight:itemArray[5],delivery_area:'noida',delivery_date:today,delivery_type:"free shipping",shipping_time:"09:00Hrs-21:00Hrs",msgoncake:'no message',caketype:"egg"};
	// console.log(p);
	setCart(p);
	document.getElementById("cartpro_process").className+=" cartpro-show";
//setTimeout(showModal(proName),3000);
setTimeout(function() {
            showModal(proName);
        }, 2000);
}
/*********Unique Array to declare unique value*********/
Array.prototype.unique =
function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };
 /***** End *********/
 /******Unique Cart********/
 function updateQ(carr,c)
 {
	var val='false';
for(k=0;k<cartArray.length;k++) {
ci=	cartArray[k];
	if(ci['pid'] == c['pid']) {
	ci['pqty']+=1;
	//alert('hi quatity updated');
	val=true;
	}
}
	 return val;
}
 /*** End ***/
function setCart(c)
{
//alert(c['pid']);
//console.log(c);
//cartArray=JSON.parse(localStorage.getItem("cartItems"));

if(cartArray.length > 0) {
	if(updateQ(cartArray,c) != true)
	{
		//alert('hiiii inserted');
		cartArray.push(c);
	}

}
else {
	cartArray.push(c);
}
localStorage.setItem("cartItems",JSON.stringify(cartArray));
getCartItems(cartArray);
}
function getShoppingCart(e)
{
		var saveCart=JSON.parse(localStorage.getItem("cartItems"));
	if(saveCart !== null && saveCart != "")
			{
				var today = new Date().toISOString().split('T')[0];
				//alert(saveCart);
				var dynCart='';
				var totalprc=0;
				var qtyArray=[];
				var dynArray=[];
				var dweight='';
				//var newCart=saveCart.split("@");
				for(j=0;j<saveCart.length;j++)
				{
					newCartItems=saveCart[j];
					//alert(newCartItems[0]);
				pid=newCartItems['pid'];
				title=newCartItems['pname'].trim();
				plink=title.replace(/ /g,"-");
				price=newCartItems['pcost'];
				image=newCartItems['pimg'];
				qty=newCartItems['pqty'];
				qtyArray.push(qty);
				sbtlprc=parseInt(qty) * parseInt(price);
				totalprc=parseInt(totalprc)+parseInt(sbtlprc);
				weight=newCartItems['pweight'];
				delivery_date=newCartItems['delivery_date'];
				delivery_area=newCartItems['delivery_area'];
				delivery_type=newCartItems['delivery_type'];
				shipping_time=newCartItems['shipping_time'];
				msgoncake=newCartItems['msgoncake'];
				caketype=newCartItems['caketype'];

			dynCart+='<tr class="sitems" atr-id="'+pid+'" atr-title="'+title+'" atr-img="'+image+'" atr-weight="'+weight+'" atr-type="'+caketype+'" atr-date="'+delivery_date+'" atr-shipping="'+delivery_type+'" atr-msg="'+msgoncake+'" atr-area="'+delivery_area+'"  atr-time="'+shipping_time+'"><td><a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" class="product-image"><img src="'+image+'" alt="'+title+'" /></a></td><td><p class="product-name"><a href="online-cakes/'+plink.toLowerCase()+'">'+title+'</a></p><ul><li><small>- Weight: '+weight+'</small></li><li><small>- Egg/Eggless: '+caketype+'</small></li><li><small>- Delivery Area: '+delivery_area+'</small></li><li><small>- Shipping Date: '+delivery_date+'</small></li><li><small>- Shipping Type: '+delivery_type+'</small></li><li><small>- Shipping Time: '+shipping_time+'</small></li><li><small>- Message on Cake: '+msgoncake+'</small></li></ul></td><td class="a-right"><span class="cart-price"><span class="price"><i class="fa fa-rupee"></i> '+price+'</span></span></td><td class="a-center" id="qty'+j+'"><select name="qty" class="qty" style="width:20px;" onchange="javascript: updateQty(this,'+pid+');"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td class="a-right"><span class="cart-price"><span class="price sbtl" id="sbtl'+j+'" atr-price="'+price+'"><i class="fa fa-rupee"></i> '+sbtlprc+'</span></span></td><td class="a-center"><a href="javascript:void(0)" title="Remove item" class="btn-remove btn-remove2" onclick="removeCart('+pid+')">Remove item</a></td></tr>';
				}
				var tempgst=0; //(18/100) * parseInt(totalprc);
				var gst=Math.round(tempgst);
				var grandtotl=totalprc + gst;
				document.getElementById('cartItems').innerHTML=dynCart;
				document.getElementById('finalsbttl').innerHTML='<i class="fa fa-rupee"></i> '+totalprc;
				//document.getElementById('gst').innerHTML='<i class="fa fa-rupee"></i> '+gst;
				document.getElementById('gndttl').innerHTML='<i class="fa fa-rupee"></i> '+grandtotl;
				var c=document.getElementsByClassName("sitems");
				//alert(qtyArray);
				//var qtys=qtyArray.split(",");
				for(q=0;q<c.length;q++)
				{
					//alert(document.getElementsByName("qty")[q].value);
					document.getElementsByName("qty")[q].value=qtyArray[q];
					//document.getElementsByClassName('dynW')[q].innerHTML=getWeightById(dynArray[q]);
				}
			}
	else
			{
			//document.getElementById('ttlcnt').innerHTML=0;
			//document.getElementById('ttlprc').innerHTML='<span class="price"><i class="fa fa-rupee"></i> 0.00</span>';
			try {
				document.getElementsByClassName("cart")[0].innerHTML='<div class="page-title"><h1>Shopping Cart is Empty</h1></div><div class="cart-empty"><p>You have no items in your shopping cart.</p><p>Click <a href="http://www.onlinecakemart.com">here</a> to continue shopping.</p></div>';
			}
			  catch(err) {
				//document.getElementById("demo").innerHTML = err.message;
			  }			
			}
}
function getCartItems(e)
{
	var saveCart=JSON.parse(localStorage.getItem("cartItems"));
	//console.log(saveCart);
if(saveCart !== null && saveCart != "")
			{
				//alert(saveCart);
				var dynCart='';
				var totalprc=0;
				//var newCart=saveCart.split("@");
				for(j=0;j<saveCart.length;j++)
				{
					newCartItems=saveCart[j];
					//alert(newCartItems[0]);
				pid=newCartItems['pid'];
				title=newCartItems['pname'];
				plink=title.replace(/ /g , "-");
				price=newCartItems['pcost'];
				image=newCartItems['pimg'];
				qty=newCartItems['pqty'];
				sbtlprc=parseInt(qty) * parseInt(price);
				totalprc=parseInt(totalprc)+parseInt(sbtlprc);
			dynCart+='<li class="item citems"> <a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" class="product-image"><img src="'+image+'" alt="'+title+'" width="80" height="80"></a><div class="product-details"><p class="product-name"><a href="online-cakes/'+plink.toLowerCase()+'">'+title+'</a></p><div class="rating-product"><p class="no-rating"><i class="fa fa-star" style="color:#FA668D;"></i><i class="fa fa-star" style="color:#FA668D;"></i><i class="fa fa-star" style="color:#FA668D;"></i><i class="fa fa-star" style="color:#FA668D;"></i></p></div><div class="product-price"> <span class="price-value"><span class="price pprc"><i class="fa fa-rupee"></i> '+price+'</span> </span></div><div class="product-qty"> <span class="qty-label"> Qty</span> <span class="qty-value"> <input id="qtyinputs'+j+'" data-link="#" class="qty cart-item-quantity input-text" value="'+qty+'" disabled> <button id="cpqbutton-4459" data-item-id="4459" disabled="disabled" data-update="" class="button quantity-button"> ok</button> </span></div><div class="product-action"><a href="#" title="Remove This Item" onclick="removeCart('+pid+')" class="fa fa-times remove"></a></div></div></li>';
			}
			//alert(j);
			document.getElementById('ttlcnt').innerHTML=j;
			document.getElementById('ttlprc').innerHTML='<span class="price"><i class="fa fa-rupee"></i> '+totalprc+'</span>';
			document.getElementsByClassName("cartpro-wrapper")[0].innerHTML='<p class="label-recent">Recently Added Item(s)</p><div class="cartpro-products"><ul class="cartpro-products-inner">'+dynCart+'</ul></div> <div id="cartpro-widgets"></div><div class="cartpro-subtotal" style="display:none;"> <span class="label">Cart Subtotal:</span> <span class="price"><i class="fa fa-rupee"></i> '+totalprc+'</span></div><div class="cartpro-actions"> <a class="button cart-link" href="cart.php"> View Cart </a> <a title="Checkout" class="button checkout-button" href="checkout.php"> Checkout </a></div></div>';

			}
	else
			{
			document.getElementById('ttlcnt').innerHTML=0;
			document.getElementById('ttlprc').innerHTML='<span class="price"><i class="fa fa-rupee"></i> 0.00</span>';
			document.getElementsByClassName("cartpro-wrapper")[0].innerHTML='<p class="empty">You have no items in your shopping cart.</p>';
			}
}
function showModal(proName)
{
	document.getElementById("cartpro_process").className="cartpro-process";
	document.getElementById("cartpro_modal").className+=" cartpro-show";
	if(proName == "delcart")
	{
		document.getElementsByClassName("cpmodal-message")[0].innerHTML='<strong>Item </strong> was removed successfully.';
	}
	else if(proName == "allcart")
	{
		document.getElementsByClassName("cpmodal-message")[0].innerHTML='<strong>All Items </strong> removed successfully.';
	}
	else if(proName == "updatecart")
	{
		document.getElementsByClassName("cpmodal-message")[0].innerHTML='Your <strong>shopping cart</strong> has been updated.';
	}
	else
	{
		document.getElementsByClassName("cpmodal-message")[0].innerHTML='<strong>'+proName+'</strong> has been added to cart.';
	}
	var timeleft = 5; //document.getElementsByClassName("cpmodal-time")[0].innerHTML;
var downloadTimer = setInterval(function(){
  document.getElementsByClassName("cpmodal-time")[0].innerHTML = --timeleft;
  if(timeleft <= 0)
  {
    clearInterval(downloadTimer);
	document.getElementById("cartpro_modal").className="cartpro-modal";
	document.getElementsByClassName("cpmodal-time")[0].innerHTML="5";
  }
},1000);
clearTimeout();
}
//
function removeCart(id)
{
var array=[];
if(id !="")
{
var c1=confirm("Are you sure you would like to remove this item from the shopping cart?");
if(c1== true)
{
 document.getElementById("cartpro_process").className+=" cartpro-show";
 var saveCart=JSON.parse(localStorage.getItem("cartItems"));
var removeIndex = saveCart.map(function(item) { return item.pid; }).indexOf(id);

// remove object
saveCart.splice(removeIndex, 1);
//alert("After Splicing "+array);
//console.log("After Splicing "+saveCart);
localStorage.removeItem("cartItems");
//localStorage.removeItem("savedCart");
localStorage.setItem("cartItems",JSON.stringify(saveCart));
setTimeout(function() {
            showModal("delcart");
        }, 2000);
getCartItems(saveCart);
getShoppingCart(saveCart);
	}
  }
}

function clearAll()
{
	var c1=confirm("Are you sure you would like to remove all items from the shopping cart?");
	if(c1== true)
	{
	document.getElementById("cartpro_process").className+=" cartpro-show";
	localStorage.removeItem("cartItems");
	//localStorage.removeItem("savedCart");
	val='';
	setTimeout(function() {
            showModal("allcart");
        }, 2000);
getCartItems(val);
getShoppingCart(val);
	}
}
function serverError()
{
toastr["error"]("Please reload/refresh the webpage.", "Internal Server Error!")
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "newestOnTop": true,
				  "progressBar": true,
				  "positionClass": "toast-top-right",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
					}
    //self.location="http://www.onlinecakemart.com/404.shtml";
window.navigate("http://www.onlinecakemart.com/404.shtml");
}

function updateQty(e,id)
{
document.getElementById("cartpro_process").className+=" cartpro-show";
//alert(e.value+" and "+ id);
if(e.value != "" && e.value !="0")
{
var saveCart=JSON.parse(localStorage.getItem("cartItems"));
for(i=0;i<saveCart.length;i++)
{
	ci=	saveCart[i];
	if(ci['pid'] == id) {
	ci['pqty']=e.value;
	//alert('hi quatity updated');

	}
}
//console.log(saveCart);
localStorage.setItem("cartItems",JSON.stringify(saveCart));
setTimeout(function() {
            showModal("updatecart");
        }, 2000);
getCartItems(cartItems);
getShoppingCart(cartItems);
}
}
/**## Js ##**/
function SaveCartItems()
{
	//alert("hi");
	//localStorage.removeItem("savedCart");
	localStorage.removeItem("cartItems");
var dynVal='';
 var parent=document.getElementsByClassName("sitems");
 alert(parent.length);
 for(i=0;i<parent.length;i++)
 {
 pid=parent[i].getAttribute("atr-id");
 pname=parent[i].getAttribute("atr-title");
 pimg=parent[i].getAttribute("atr-img");
pqty=document.getElementsByClassName("qty")[i].value;
pprc=document.getElementById("sbtl"+i).getAttribute("atr-price");
 //alert(pid+','+pname+','+pimg+','+pqty+','+pprc);
//dynVal +=pid+','+pname+','+pimg+','+pqty+','+pprc+'@';
dynVal={pid:pid,pname:pname,pimg:pimg,pcost:pprc,pqty:pqty};
//console.log(dynVal);
setCart(dynVal);
}
}

function getFinalOrder()
{
	var saveCart=JSON.parse(localStorage.getItem("cartItems"));
	if(saveCart !== null && saveCart != "")
			{
				var today = new Date().toISOString().split('T')[0];
				//alert(saveCart);
				var dynCart='';
				var totalprc=0;
				var dynVal='';
				var dynArray=[];
				for(j=0;j<saveCart.length;j++)
				{
					k=parseInt(j)+1;
					newCartItems=saveCart[j];
					//alert(newCartItems[0]);
				pid=newCartItems['pid'];
				title=newCartItems['pname'];
				price=newCartItems['pcost'];
				image=newCartItems['pimg'];
				qty=newCartItems['pqty'];
				sbtlprc=parseInt(qty) * parseInt(price);
				totalprc=parseInt(totalprc)+parseInt(sbtlprc);
				weight=newCartItems['pweight'];
				delivery_date=newCartItems['delivery_date'];
				delivery_area=newCartItems['delivery_area'];
				delivery_type=newCartItems['delivery_type'];
				shipping_time=newCartItems['shipping_time'];
				msgoncake=newCartItems['msgoncake'];
				caketype=newCartItems['caketype'];

			dynCart+='<tr><td>'+k+'</td><td><img src="'+image+'" style="width:100px" alt="'+title+'" title="'+title+'"/></td><td>'+title+'<ul><li><small>- Qty: '+qty+' </small></li><li><small>- Price: <i class="fa fa-inr"></i> '+sbtlprc+'</small></li><li><small>- Cake Type: '+caketype+'</small></li><li><small>- Weight: '+weight+'</small></li><li><small>- Delivery Date: '+delivery_date+'</small></li><li><small>- Shipping Method: '+delivery_type+'</small></li><li><small>- Shipping Time: '+shipping_time+'</small></li></ul></td></tr>';
			dynVal+=pid+'$'+title+'$'+image+'$'+price+'$'+qty+'$'+weight+'$'+delivery_date+'$'+delivery_area+'$'+delivery_type+'$'+shipping_time+'$'+caketype+'$'+msgoncake+'@';
			}
			var strLen = dynVal.length;
			myStr = dynVal.slice(0,strLen-1);
				var tempgst=0; //(18/100) * parseInt(totalprc);
				var gst=Math.round(tempgst);
				var grandtotl=totalprc + gst;
				document.getElementById('Orderreview').innerHTML=dynCart;
				document.getElementById('gndttl').innerHTML='<i class="fa fa-rupee"></i> '+grandtotl;
				document.getElementById('finalCost').value=grandtotl;
				document.getElementById('finalorder').value=myStr;
				//localStorage.removeItem("cartItems");
				//getCartItems(cartItems);
				//getShoppingCart(cartItems);

			}
			else {
				self.location="cart.php";
			}
}

function clearStorage()
{
	//alert("hi how are your");
	localStorage.removeItem("cartItems");
	getCartItems(cartItems);
	getShoppingCart(cartItems);
}
// Get Search getSuggestion
function getSuggestion(q) {
  	// document.getElementById('suggestions').style.display="block";
  if(q.length > 2) {
    $j.ajax({
  	  dataType: "json",
  	   type:'get',
  	   url:'zeus.php',
  	   data:{action:'get_suggestion',access_token:enc,keyword:q},
  	   async:true,
  	   success:function(data)
  		   {
  			var response=data.RESPONSE_CODE;
  			var records=data.ACTIVE_RECORDS;
  			//alert(response);
  			if(response == "2XX" && records > 0)
  			 {
          var dynHTML='';
  				var AllData=data.DATA;
          for(i=0;i<AllData.length;i++)
    				 {
    				title=AllData[i].TITLE;
    				plink=title.replace(/ /g , "-");
    				dynHTML+='<a href="online-cakes/'+plink.toLowerCase()+'" title="'+title+'" class="list-group-item text-muted text-capitalize"><strong><i class="fa fa-birthday-cake"> </i> '+title+' </strong></a>';
    				}
            // alert(AllData.length);
    				document.getElementById('suggestions').innerHTML=dynHTML;
  			 }
         else {   document.getElementById('suggestions').innerHTML='<a href="javascript:void(0)" class="list-group-item disabled small"><em><i class="fa fa-frown-o"></i> Sorry! No record found for <strong>'+q+'</strong> </em></a>'; }
  		   },
  	  error : function (errormsg)
  		 {
  			 serverError();
  		 }
  	   });
  }
  else {
document.getElementById('suggestions').innerHTML='<a href="javascript:void(0)" class="list-group-item disabled small"><em><i class="fa fa-pencil"></i> Enter any cake name to search... </em></a>';
  }

}
function showsuggestion(){
  document.getElementById('suggestions').style.display="block";
}

// Window Scroller 
/***** infinite scrolling starts*****/
$j(window).scroll(function ()
{
    var content_height = $j(document).height();
    var content_scroll_pos = $j(window).scrollTop();
	var percentage_value = content_scroll_pos * 100 / content_height;
	//alert("hi"+percentage_value);
	// console.log("HI "+percentage_value);
	if(percentage_value >= 55 && percentage_value < 56 )
    {
		//console.log("HI "+percentage_value);

        if(IsLastFetchForCategoryCompleted==true)
        {
        AjaxSetCounter++;
        getProductsByCategory(localStorage.getItem("category_id"),AjaxSetCounter);
//console.log("Now="+AjaxSetCounter);
        }
		if(IsLastFetchForSubCategoryCompleted==true)
        {
        AjaxSetCounter++;
        getProductsBySubcategory(localStorage.getItem("subcategory_id"),AjaxSetCounter);
//console.log("Now="+AjaxSetCounter);
		}
		if(IsLastFetchForMenuCompleted==true)
        {
        AjaxSetCounter++;
        getProductsByMenu(localStorage.getItem("menu_id"),AjaxSetCounter);
//console.log("Now="+AjaxSetCounter);
        }

    }
});
/***** ENDS ******/