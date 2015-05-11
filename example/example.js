$(document).ready(function(){
	/* $.extend($.pureAlert.defaultName, {
		title: 'Notifications',
		okBtn: 'OK',
		cancelBtn: 'Cancel'
	}); */
	
	$("#sample_alert").on("click", function(){
		var modal = $.pureAlert({content: 'Sample Alert.'});
	});
	
	$("#sample_confirm").on("click", function(){
		var modal = $.pureAlert.confirm({content: 'Sample Confirm.'});
	});
	
	$("#custom-options-form input[type='checkbox']").on("change", function(){
		$(this).prev().html($(this).prop("checked").toString());
	});
	
	$("#sample_demo").on("click", function(){
					
		var options = {};
		$("#custom-options-form").find("[data-option]").each(function(index, element){
			var $element = $(element);
			
			var value = $element.val();
			if($element.attr('type') == 'checkbox'){
				value = $element.prop("checked");
			}
			
			options[$element.attr('data-option')] = value;
			
		});
		
		var type = $("input:radio[name='alert_type']:checked").val();
		
		console.log(options);
		
		var modal = $.pureAlert[type](options);
		
		modal.on("ok.pure-alert", function(){
			$("#customOptionEvent").html("ok button click.");
		});
		
		modal.on("cancel.pure-alert", function(){
			$("#customOptionEvent").html("cancel button click.");
		});
		
		if(!options.autoShow){
			$("#customOptionEvent").html("5 sec after show method call.");
			
			setTimeout(function(){
				modal.pureAlert('show')
			}, 5 * 1000);
		}
	});
});
