let front = {
  hamburger: $('.hamburger'),
  nav: $('.header-bottom'),
  $body: $('body'),
  init: function () {
      this.events();
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 60,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: { 
          320: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            allowTouchMove: true,
            // centeredSlides: true,
          },
          767: {
            slidesPerView: 6,
            spaceBetween: 30,
            centeredSlides: false,
            allowTouchMove: false,
          },
        }

      });
      swiper.mousewheel.disable();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },  


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      if(window.matchMedia('(max-width: 992px)').matches){
        $('.menu-item-has-children i').click(function () {
          $(this).parent().toggleClass('active');
        },
      )};
      $(document).ready(function() {
        $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
            if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).parent().find(".accordion__content").slideUp(200);
            } else {
            $(".accordion__item").removeClass("active");
            $(this).parent().addClass("active");
            $(".accordion__content").slideUp(200);
            $(this).parent().find(".accordion__content").slideDown(200);
            }
        });
      });
  }
};

document.addEventListener("DOMContentLoaded", function (event) {

	let childrenItem = document.querySelectorAll('.menu-item-has-children');
	for (let i = 0; i < childrenItem.length; i++) {
			var btn = document.createElement("i");   // Create a <button> element
			btn.className = "toggle-sub-menu icon icon-chevron";                    // add class
			childrenItem[i].appendChild(btn);
	}

});

jQuery(function () {
  front.init();
});
