
     function formAjaxProcessing() {
		const $ajaxForm = $(".ajax-form");
		if (!$ajaxForm.length) return false;
  
		$ajaxForm.each(function () {
		  const elem = $(this),
			elemSuccessMessage =
			  elem.attr("data-success-message") ||
			  "Mensaje enviado correctamente. Gracias",
			elemCustomRedirectPage = elem.attr("data-success-page");
		  const button = elem.find(":submit"),
			buttonText = button.html();
		  const validation = Array.prototype.filter.call(elem, function (form) {
			form.addEventListener(
			  "submit",
			  function (event) {
				if (form[0].checkValidity() === false) {
				  event.preventDefault();
				  event.stopPropagation();
				}
				form.classList.add("was-validated");
				return false;
			  },
			  false
			);
		  });
		  elem.submit(function (event) {
			event.preventDefault();
			const post_url = $(this).attr("action");
			const request_method = $(this).attr("method");
			const form_data = $(this).serialize();
			if (elem[0].checkValidity() === false) {
			  event.stopPropagation();
			  elem.addClass("was-validated");
			} else {
			  $(elem).removeClass("was-validated");
			  button.html('<i class="fas fa-spinner fa-spin"> </i>');
			  $.ajax({
				url: post_url,
				type: request_method,
				data: form_data,
				success: function (response) {
				  button.attr("disabled", false);
				  console.log(response);
  
				  if (response.ok) {
					$(elem)[0].reset();
					button.html(buttonText);
  
					$.notify("Mensaje enviado correctamente. Gracias", "success");
  
					if (elemCustomRedirectPage) {
					  setTimeout(function () {
						window.location.href = elemCustomRedirectPage;
					  }, 5000);
					}
				  } else {

					
					$.notify("Error al enviar la información, intente mas tarde", "danger");
  
		
					var t = setTimeout(function () {
					  button.html(buttonText);
					}, 1000);
				  }
				},
				beforeSend: function () {
				  button.attr("disabled", true);
				},
			  });
			}
		  });
		});
	  }

	  formAjaxProcessing();
	  