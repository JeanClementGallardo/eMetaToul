import type { DirectiveBinding } from 'vue';

const clickOutside = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.clickOutsideEvent = (event: MouseEvent) => {
      if (!(el == event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default clickOutside;