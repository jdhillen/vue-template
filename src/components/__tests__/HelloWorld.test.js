import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { describe, it, expect } from 'vitest';

import HelloWorld from '../HelloWorld.vue';

const createWrapper = (props = {}) => {
  const pinia = createPinia();
  return mount(HelloWorld, {
    props,
    global: {
      plugins: [pinia]
    }
  });
};

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = createWrapper({ msg: 'Hello Vitest' });
    expect(wrapper.text()).toContain('Hello Vitest');
  });

  it('renders with default message when no prop provided', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain('Hello There!');
  });

  it('has a count button that works', async () => {
    const wrapper = createWrapper();
    const button = wrapper.find('button');

    expect(button.exists()).toBe(true);
    expect(button.text()).toContain('Count: 0');

    // Test button click functionality
    await button.trigger('click');
    expect(button.text()).toContain('Count: 1');
  });

  it('displays doubled count', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain('Double: 0');
  });
});
