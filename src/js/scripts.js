// change size of label near inputs start
const FloatLabel = (() => {
    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add("active");
        target.setAttribute("placeholder", target.getAttribute("data-placeholder"));
    };

    const handleBlur = (e) => {
        const target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove("active");
        }
        target.removeAttribute("placeholder");
    };

    const bindEvents = (element) => {
        const floatField = element.querySelector(".form__field-input");
        floatField.addEventListener("focus", handleFocus);
        floatField.addEventListener("blur", handleBlur);
    };

    const init = () => {
        const floatContainers = document.querySelectorAll(".form__field");

        floatContainers.forEach((element) => {
            if (element.querySelector(".form__field-input").value) {
                element.classList.add("active");
            }

            bindEvents(element);
        });
    };

    return {
        init: init
    };
})();

FloatLabel.init();
$('#opinions-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    prevArrow: "<span class='btn-round btn-round--red2w'><svg class='svg' width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6036 4.35355C11.7988 4.15829 11.7988 3.84171 11.6036 3.64645L8.42157 0.464466C8.22631 0.269204 7.90973 0.269204 7.71447 0.464466C7.5192 0.659728 7.5192 0.976311 7.71447 1.17157L10.5429 4L7.71447 6.82843C7.5192 7.02369 7.5192 7.34027 7.71447 7.53553C7.90973 7.7308 8.22631 7.7308 8.42157 7.53553L11.6036 4.35355ZM0.75 4.5H11.25V3.5H0.75V4.5Z' /></svg></span>",
    nextArrow: "<span class='btn-round btn-round--red2s'><svg class='svg' width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6036 4.35355C11.7988 4.15829 11.7988 3.84171 11.6036 3.64645L8.42157 0.464466C8.22631 0.269204 7.90973 0.269204 7.71447 0.464466C7.5192 0.659728 7.5192 0.976311 7.71447 1.17157L10.5429 4L7.71447 6.82843C7.5192 7.02369 7.5192 7.34027 7.71447 7.53553C7.90973 7.7308 8.22631 7.7308 8.42157 7.53553L11.6036 4.35355ZM0.75 4.5H11.25V3.5H0.75V4.5Z' /></svg></span>"
});

$('#services-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: "<span class='btn-round btn-round--color4 slick-left'><svg class='svg' width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6036 4.35355C11.7988 4.15829 11.7988 3.84171 11.6036 3.64645L8.42157 0.464466C8.22631 0.269204 7.90973 0.269204 7.71447 0.464466C7.5192 0.659728 7.5192 0.976311 7.71447 1.17157L10.5429 4L7.71447 6.82843C7.5192 7.02369 7.5192 7.34027 7.71447 7.53553C7.90973 7.7308 8.22631 7.7308 8.42157 7.53553L11.6036 4.35355ZM0.75 4.5H11.25V3.5H0.75V4.5Z' /></svg></span>",
    nextArrow: "<span class='btn-round btn-round--color4 slick-right'><svg class='svg' width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6036 4.35355C11.7988 4.15829 11.7988 3.84171 11.6036 3.64645L8.42157 0.464466C8.22631 0.269204 7.90973 0.269204 7.71447 0.464466C7.5192 0.659728 7.5192 0.976311 7.71447 1.17157L10.5429 4L7.71447 6.82843C7.5192 7.02369 7.5192 7.34027 7.71447 7.53553C7.90973 7.7308 8.22631 7.7308 8.42157 7.53553L11.6036 4.35355ZM0.75 4.5H11.25V3.5H0.75V4.5Z' /></svg></span>",
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        //FYI just have a look at the object to find available information
        //press f12 to access the console in most browsers
        //you could also debug or look in the source
        console.log(slider);
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '</span></a>';
    }
});

var $status = $('.sliderCenter__inside-quantity');
var $slickElement = $('#services-slider');
// $status.append('1/' + slick.slideCount)
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);

});
$status.append('1/3');
// change size of label near inputs end

// hamburger
(function () {
    const hamburger = document.querySelector("#hamburger")
    const headerHidden = document.querySelector(".header-hidden")

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("active");
        headerHidden.classList.toggle("header-hidden--active");
    })
})();

// smoothscroll
$(function () {
    $(window).on('scroll', function () {
        var WindowTop = $(window).scrollTop();
        $('section').each(function (i) {
            if (WindowTop > $(this).offset().top - 100 &&
                WindowTop < $(this).offset().top + $(this).outerHeight(true)
            );
        });
    });
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
});