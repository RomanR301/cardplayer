let front = {
  hamburger: $('.hamburger'),
  nav: $('.header-bottom'),
  $body: $('body'),
  init: function () {
      this.events();
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
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });

      $(document).on('click', '.search i', function () {
        $('.form-group').toggleClass('active');
        });
      $(document).on("click", function(event){
            var $trigger = $(".search");
            if($trigger !== event.target && !$trigger.has(event.target).length){
              $('.form-group').removeClass('active')
            }            
        });
      if(window.matchMedia('(max-width: 992px)').matches){
        $('.menu-item-has-children').click(function () {
          $(this).toggleClass('active');
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

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });


  }
};


jQuery(function () {
  front.init();
  modal.init();
    
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 10) {
//     $('.scroll-to-top').addClass("scrolled");
//   } else {
//   	$('.scroll-to-top').removeClass("scrolled");
//   }
// });

document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) /* tab */ {
    document.body.classList.remove('no-focus-outline');
  }
});


// HIDE MENU ON BODY CLICK



$('.summary-sidebar__link').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 390
  }, 500);
  return false;
});

const highlightScroll = () => {
  const scrollPos =  window.pageYOffset + 400
  const links = document.querySelectorAll('.summary-sidebar__link')
  const scrollLine = document.querySelector('.scroll-spy-line')

  links.forEach((link, index) => {
      const sections = document.querySelectorAll('.anchor-link')
      const activeSection = sections[index]
      const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)

      if(scrollPos > 0) {
          compare ? link.classList.add('active') : link.classList.remove('active')
      }
  })
  if ($('.summary-sidebar__link:nth-of-type(1)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,0)')
  } else if ($('.summary-sidebar__link:nth-of-type(2)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,50px)')
  } else if ($('.summary-sidebar__link:nth-of-type(3)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,100px)')
  } else if ($('.summary-sidebar__link:nth-of-type(4)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,150px)')
  } else if ($('.summary-sidebar__link:nth-of-type(5)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,200px)')
  } else if ($('.summary-sidebar__link:nth-of-type(6)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,250px)')
  } else if ($('.summary-sidebar__link:nth-of-type(7)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,300px)')
  } else if ($('.summary-sidebar__link:nth-of-type(8)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,350px)')
  } else if ($('.summary-sidebar__link:nth-of-type(9)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,400px)')
  } else if ($('.summary-sidebar__link:nth-of-type(10)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,450px)')
  } else if ($('.summary-sidebar__link:nth-of-type(11)').hasClass('active')) {
    $('.scroll-line').css('transform', 'translate(0,500px)')
  }

  

  // if ($('.summary-sidebar__link:nth-of-type(1)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll1')
  // } else if ($('.summary-sidebar__link:nth-of-type(2)').hasClass('active')) {
  //   $('.scroll-line').css('transform', 'translate(0,49px)')
  // } else if ($('.summary-sidebar__link:nth-of-type(3)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll3')
  // } else if ($('.summary-sidebar__link:nth-of-type(4)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll4')
  // } else if ($('.summary-sidebar__link:nth-of-type(5)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll5')
  // } else if ($('.summary-sidebar__link:nth-of-type(6)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll6')
  // } else if ($('.summary-sidebar__link:nth-of-type(7)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll7')
  // } else if ($('.summary-sidebar__link:nth-of-type(8)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll8')
  // } else if ($('.summary-sidebar__link:nth-of-type(9)').hasClass('active')) {
  //   $('.scroll-line').attr('class', 'scroll-line scroll9')
  // }
}
window.addEventListener('scroll', highlightScroll)


$(function() {
  
  $('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
  });
  
  $('.dropdown .tabs-list .tabs-list__item').on('click', function() {
    $('.dropdown .tabs-list .tabs-list__item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });
  
});