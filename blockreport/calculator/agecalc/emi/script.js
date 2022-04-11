$(function() {

	var Calc = function(options) {
		$.extend(this, options, {
			currency: ' ₽',
			months: 240
		});

		this.cache();
		this.variables();
		this.bind();

		return this;
	};

	$.extend(Calc.prototype, {
		cache: function() {
			this.$convertDollar = $('.convert-dollar');
			this.$convertEuro = $('.convert-euro');
			this.$amount = $('#amount');
			this.$slider = $('.slider');
			this.$weight = $('#weight');
			this.$rangeValue = $('.rangevalue');
			this.$credit = $('.credit');
			this.$percent = $('#percent');
			this.$pay = $('.pay');
			this.$monthPay = $('.month-pay');
			this.$results = $('.results');
			this.$validate = $('.validate');
		},
		variables: function(){
			this.usdUrl = "http://www.freecurrencyconverterapi.com/api/v3/convert?q=RUB_USD&compact=y";
			this.eurUrl = "http://www.freecurrencyconverterapi.com/api/v3/convert?q=RUB_EUR&compact=y";
			this.numberPat = /[0-9]+([\.|,][0-9]+)?/;
			this.emailPat = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
		},
		bind: function() {
			this.$results.hide();
			this.getMonths();
			this.getWeight();
			this.validate();

			this.$slider.on('input', $.proxy(this.getMonths, this));
			this.$amount.on('keyup', $.proxy(this.getCurrencies, this));
			this.$weight.on('keyup', $.proxy(this.getWeight, this));
			this.$credit.on('submit', $.proxy(this.calculate, this));
			console.log(this.currency);

			this.$validate.on('blur', this.rty);
		},
		getCurrencies: function(){
			var $loader = $('.spinner'),
				$convertDollar = $('.convert-dollar'),
				$convertEuro = $('.convert-euro'),
				$amount = $('#amount');

			$.ajax({ 
				type: "GET",
				url: this.usdUrl,
				dataType: "jsonp",
				cache: true,
				beforeSend: function(){
					$loader.removeClass('hide');
				},
				success: function(data) {
					console.log(data.RUB_USD.val);
					$convertDollar.text('$ '+ ($amount.val() * data.RUB_USD.val).toFixed(2));
					$loader.addClass('hide');
				},
				error: function(){
					$convertDollar.text('error');
				}
			});
			$.ajax({ 
				type: "GET",
				url: this.eurUrl,
				dataType: "jsonp",
				cache: true,
				beforeSend: function(){
					$loader.removeClass('hide');
				},
				success: function(data) {
					console.log(data.RUB_EUR.val);
					$convertEuro.text('€ '+ ($amount.val() * data.RUB_EUR.val).toFixed(2));
					$loader.addClass('hide');
				},
				error: function(){
					$convertDollar.text('error');
				}
			});
		},
		getWeight: function(){
			this.$weight.text(this.$weight.val());
		},
		getPercent: function(){
			this.$percent.text(this.$percent.val());
		},
		calculate: function(event){
			event.preventDefault();

			var payment = (+this.$weight.val() * +((100-this.$amount.val()) / (100-this.$percent.val())));
			console.log(payment);

			this.$results.fadeIn();
			this.$pay.text( payment.toFixed(2));
			this.$monthPay.text( (payment / this.$weight.val()).toFixed(2));
			//this.$monthPay.text( (payment / this.$slider.val()).toFixed(2));
		},
		validate: function(){
			var inputNumber = this.numberPat,
				inputEmail = this.emailPat;
				

			$('.validate').on('keyup', function(){
				var inputType = $(this).attr('type'),
					$self = $(this);
				
				switch (inputType) {
				    case 'number':
						if($self.val().match(inputNumber)){
							$self.closest('.form-group').removeClass('has-error').addClass('has-success');
							console.log('number yes');
						}else{
							$self.closest('.form-group').addClass('has-error').removeClass('has-success');
							console.log('number no');
						}
				        break;

				    case 'email':
				        if($self.val().match(inputEmail)){
							$self.closest('.form-group').removeClass('has-error').addClass('has-success');
							console.log('email yes');
						}else{
							$self.closest('.form-group').addClass('has-error').removeClass('has-success');
							console.log('email no');
						}
				        break;
				}
			});
		}
		
	});


	window.Calc = Calc;
});
 
 
$(function() {
	var app = new Calc({weight: 12});
});