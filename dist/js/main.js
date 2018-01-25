

$(document).ready(function () {

    //Slider Settings
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<div class="slider__nextArrow"><i class="fas fa-angle-right arrow-icon "></i></div>',
        prevArrow: '<div class="slider__prevArrow"><i class="fas fa-angle-left arrow-icon "></i></div>',
    });

    //AJAX data sending

    $('.offerForm').submit(function (e) {
        e.preventDefault();
        var parent=$(this).parent();
        var  tourName, phone, name, city,date, email, manCount;
        tourName =$(parent).find('.resortSection__mainHeader').text();
        phone= $(this).find('.offerForm__phone').val();
        name= $(this).find('.offerForm__name').val();
        city= $(this).find('.offerForm__city').val();
        date= $(this).find('.offerForm__date').val();
        email= $(this).find('.offerForm__email').val();
        manCount= $(this).find('.offerForm__manCount').val();

        $.post('send1.php',
            {
                name: name,
                phone: phone,
                email: email,
                tourName: tourName,
                city: city,
                date: date,
                manCount: manCount
            },
            function(data, status){
                if(status==='success'){
                    alert('Заявка отправлена!');
                    location.reload();
                }
            });
    });


    $('.getOfferForm').submit(function (e) {
        e.preventDefault();
        var parent=$(this).parent();
        var   phone, name;

        phone= $(this).find('.getOfferForm__name').val();
        name= $(this).find('.getOfferForm__name').val();

        $.post('send2.php',
            {
                name: name,
                phone: phone
            },
            function(data, status){
                if(status==='success'){
                    alert('Заявка отправлена!');
                    location.reload();
                }
            });
    });

});