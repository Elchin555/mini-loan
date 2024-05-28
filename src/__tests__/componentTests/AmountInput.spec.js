import { mount } from '@vue/test-utils';
import AmountInput from '@/components/Calculator/AmountInput.vue';
import { describe, it, expect } from 'vitest';


describe('AmountInput.vue', () => {
  it('updates amount value when input changes', async () => {
    const wrapper = mount(AmountInput, {
      props: {
        amount: 500 // Initial amount value
      }
    });

    // Simulate user input
    const input = wrapper.find('input[type="number"]');
    await input.setValue(1000);

    // Check if the emitted event is correct
    expect(wrapper.emitted('update:amount')).toBeTruthy();
    expect(wrapper.emitted('update:amount')[0][0]).toBe(1000); 
  });

  it('disables button and shows error message if amount is out of range', async () => {
    const wrapper = mount(AmountInput, {
      props: {
        amount: 300 // Initial amount value
      }
    });

    // Simulate user input that exceeds range
    const input = wrapper.find('input[type="number"]');
    await input.setValue(8000);

    // Check if the emitted event is correct
    expect(wrapper.emitted('update:isDisabled')).toBeTruthy();
    expect(wrapper.emitted('update:isDisabled')[0][0]).toBe(true); 

    // Check if error message is displayed
    expect(wrapper.find('.text-red-500').exists()).toBe(true);
    expect(wrapper.find('.text-red-500').text()).toBe('This value should be between 300 and 7200');
  });
});
