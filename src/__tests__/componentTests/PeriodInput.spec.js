import { mount } from '@vue/test-utils';
import PeriodInput from '@/components/Calculator/PeriodInput.vue';
import { describe, it, expect } from 'vitest';

describe('PeriodInput.vue', () => {
  it('updates selected period value when input changes', async () => {
    const months = [2, 4, 6]; 
    const wrapper = mount(PeriodInput, {
      props: {
        selectedIndex: 0, 
        selectedPeriod: months[0],
        months
      }
    });

    // Simulate user input
    const select = wrapper.find('select');
    await select.setValue('4');

    // Check if the emitted event is correct
    expect(wrapper.emitted('update:selectedPeriod')).toBeTruthy();
    expect(wrapper.emitted('update:selectedPeriod')[0][0]).toBe(4); 
  });
});
