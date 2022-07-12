const headerToggleNavBtn = $('.header-toggleNavBtn');
const headerNav = $('.header-nav');
const subMenuList = $$('.header-navSubmenu');

// collapse and expand element with height auto

function collapseSection(element) {
  let sectionHeight = element.getBoundingClientRect().height;
  let elementTransition = element.style.transition;
  element.style.transition = '';

  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });
  element.setAttribute('default-width', sectionHeight);
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  let sectionHeight = element.getAttribute('default-width');

  element.style.height = sectionHeight + 'px';

  element.addEventListener('transitionend', function (e) {
    element.removeEventListener('transitionend', arguments.callee);

    element.style.height = null;
  });

  element.setAttribute('data-collapsed', 'false');
}

function handleToggleCollapse(element, defaultWidth) {
  let isCollapsed = element.getAttribute('data-collapsed') === 'true';
  if (isCollapsed) {
    expandSection(element, defaultWidth);
    element.setAttribute('data-collapsed', 'false');
  } else {
    collapseSection(element, defaultWidth);
  }
}

// toggle menu header

headerToggleNavBtn.addEventListener('click', () => {
  if (!headerToggleNavBtn.classList.contains('expand')) {
    headerToggleNavBtn.classList.add('expand');
  } else {
    headerToggleNavBtn.classList.remove('expand');
  }
  handleToggleCollapse(headerNav);
});

// toggle submenu header

subMenuList.forEach((subMenu) => {
  const toggleBtnSubMenu = subMenu.parentNode.querySelector('.fa-chevron-down');
  toggleBtnSubMenu.addEventListener('click', () => {
    handleToggleCollapse(subMenu);
  });
});

// header navigation fixed
const headerNavigation = $('.header-navigation');

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > headerNavigation.getBoundingClientRect().height) {
    headerNavigation.classList.add('nav-fixed');
  } else {
    headerNavigation.classList.remove('nav-fixed');
  }
});
