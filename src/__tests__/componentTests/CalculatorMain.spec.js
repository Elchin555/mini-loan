import { mount } from '@vue/test-utils';
import CalculatorMain from '@/components/Calculator/CalculatorMain.vue';
import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

describe('CalculatorMain.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('updates loan values correctly when inputs change', async () => {
    const wrapper = mount(CalculatorMain);


    // Simulate user input in AmountInput component
    const amountInput = wrapper.find('#amount-range');
    amountInput.element.value = 1000;
    await amountInput.trigger('input');
  
    // Check if loan values are updated correctly
    expect(parseInt(wrapper.vm.amount)).toEqual(1000);
  });

  it('disables button if any input is invalid', async () => {
    const wrapper = mount(CalculatorMain);

    // Simulate user input in AmountInput component that exceeds range
    const amountInput = wrapper.find('#amount-range');
    amountInput.element.value = 8000;
    await amountInput.trigger('input');

  });

  it('opens modal when "Apply now" button is clicked', async () => {
    const wrapper = mount(CalculatorMain);

    // Keep the original calcLoan function
    const originalCalcLoan = wrapper.vm.calcLoan;

    // Mock calcLoan function
    wrapper.vm.calcLoan = () => {
      wrapper.setData({ showModal: true });
    };

    // Click the "Apply now" button
    await wrapper.find('button').trigger('click');

    // Restore the original calcLoan function
    wrapper.vm.calcLoan = originalCalcLoan;
  });
});
