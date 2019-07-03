"use strict";

$(document).ready(function(){
    /*custom js start*/
    var ksy2019 = function($){
        var common = {
            init: function () {
                common.customSwiper();
                common.customSelect();
            },
            customSwiper: function () {
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    // init: false,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }
                    }
                });
            },
            customSelect : function() {
                $('.js-sel-open').click(function (e) {
                    $('.opener').toggleClass('active');
                });
            }
        };
        return common;
    }(jQuery);

    $(function($){
        ksy2019.init();
    });

});


