import { mount } from '@vue/test-utils';
import MonthlyPayment from '@/components/Calculator/MonthlyPayment.vue';
import { describe, it, expect } from 'vitest';

describe('MonthlyPayment.vue', () => {
  it('displays monthly payment correctly', () => {
    const monthlyPayment = 200; // Sample monthly payment value
    const wrapper = mount(MonthlyPayment, {
      props: {
        monthlyPayment
      }
    });

    // Check if the monthly payment is displayed correctly
    expect(wrapper.find('p').text()).toBe('Monthly payment');
    expect(wrapper.find('.font-bitter').text()).toBe(`${monthlyPayment}€`);
  });
});
