new Swiper('.swipper-courses', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.slider-courses-next',
    prevEl: '.slider-courses-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// call api get courses

const URL = 'https://60d4611a61160900173cb070.mockapi.io/courses';

const getCoursesDOM = (courses) =>
  courses.map((course) => {
    let rateStarts = [];
    let rateNum = course.rate;
    let y = 0;
    for (let i = 0; i < 5; i++) {
      if (y < rateNum) {
        rateStarts.push(`<i class='fa fa-star fa-xs text-primary'></i>`);
        y++;
      } else {
        rateStarts.push(`<i class='fa fa-star fa-xs'></i>`);
      }
    }
    rateStarts = rateStarts.join('');

    return `
               <div class="swiper-slide">
                    <div class="rounded shadow bg-white overflow-hidden">
                      <div class="relative">
                            <div class="h-[250px] overflow-hidden">
                              <img
                                src="${course.image}"
                                alt="image"
                                class="w-full h-full object-cover hover-scale-img"
                              />
                            </div>
                            <div
                                class="px-3 py-1 absolute left-[10px] top-[15px] text-xs font-bold rounded bg-secondary text-white"
                              >
                                ${course.level}
                            </div>
                            <div
                              class="px-1.5 py-0.5 absolute right-[10px] top-[15px] rounded bg-white"
                            >
                              <i class="fa-solid fa-bag-shopping fa-sm"></i>
                            </div>
                      </div>
                        <div class="px-6 py-4 border-b border-borderBottomColor">
                          <div class="flex flex-wrap gap-3 mb-3">
                            <div class="flex items-center gap-x-1">
                                ${rateStarts}
                            </div>
                            <span class="text-sm">3.60 (${course.rate})</span>
                          </div>
  
                          <a href="#">
                            <h4
                              class="mb-6 text-xl font-medium line-clamp-2 hover-text-primary sm:text-2xl"
                            >
                              ${course.name}
                            </h4>
                          </a>
  
                          <div
                            class="pb-7 flex items-center gap-x-5 text-spanColor"
                          >
                            <a href="#" class="group"
                              ><i
                                class="fa fa-user transition-base group-hover:text-primary"
                              ></i>
                              ${course.total_enrolled}</a
                            >
                            <a href="#" class="group"
                              ><i
                                class="fa fa-heart transition-base group-hover:text-primary"
                              ></i>
                              ${course.duration}</a
                            >
                          </div>
  
                          <div class="pb-5 flex items-center gap-3">
                            <a href="#">
                              <img
                                src="https://thepixelcurve.com/html/edubin/images/course/teacher/t-2.jpg"
                                alt="image"
                                class="rounded-full"
                              />
                            </a>
                            <a
                              href="#"
                              class="text-[color:#24486e] font-bold line-clamp hover-text-primary"
                              ><span class="text-spanColor">by</span> ${course.teacher}
                              <span class="text-spanColor">In</span> ${course.categories}</a
                            >
                          </div>
                        </div>
  
                        <div class="px-6 py-4 flex-center-between">
                          <div class="font-bold text-secondary">$ ${course.price}</div>
                          <a href="#" class="text-spanColor">
                            <i class="fa fa-heart text-primary"></i> Get Enrolled
                          </a>
                        </div>
                    </div>
                  </div>
      
      `;
  });

window.addEventListener('DOMContentLoaded', async (e) => {
  try {
    const data = await (await fetch(URL)).json();

    const html = getCoursesDOM(data).join('');

    $('.swipper-courses-list').innerHTML = html;
  } catch (error) {
    alert(error.message);
  }
});
