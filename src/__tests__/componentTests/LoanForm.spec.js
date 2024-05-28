import { mount } from '@vue/test-utils';
import LoanForm from '@/components/LoanForm.vue';
import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

describe('LoanForm.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('updates form values when input changes', async () => {
    const wrapper = mount(LoanForm);

    // Simulate user input for firstName
    const firstNameInput = wrapper.find('input#firstName');
    await firstNameInput.setValue('Elchin');
    expect(wrapper.vm.form.firstName).toBe('Elchin');

    // Simulate user input for lastName
    const lastNameInput = wrapper.find('input#lastName');
    await lastNameInput.setValue('Rahimli');
    expect(wrapper.vm.form.lastName).toBe('Rahimli');

    // Simulate user input for email
    const emailInput = wrapper.find('input#email');
    await emailInput.setValue('elchinr@example.com');
    expect(wrapper.vm.form.email).toBe('elchinr@example.com');

    // Simulate user input for phoneNumber
    const phoneNumberInput = wrapper.find('input#phoneNumber');
    await phoneNumberInput.setValue('551234567');
    expect(wrapper.vm.form.phoneNumber).toBe('551234567');

    // Simulate user input for monthlyIncome
    const monthlyIncomeInput = wrapper.find('input#monthlyIncome');
    await monthlyIncomeInput.setValue('2000');
    expect(wrapper.vm.form.monthlyIncome).toBe('2000');
  });

  it('shows error messages for invalid form inputs and adds bg-red-500 class to inputs', async () => {
    const wrapper = mount(LoanForm);

    // Simulate invalid input for firstName
    const firstNameInput = wrapper.find('input#firstName');
    await firstNameInput.setValue('');
    await firstNameInput.trigger('input');
    await wrapper.vm.$nextTick(); 
    expect(wrapper.html()).toContain('First name is required');
    expect(firstNameInput.classes()).toContain('border-red-500');

    // Simulate invalid input for lastName
    const lastNameInput = wrapper.find('input#lastName');
    await lastNameInput.setValue('');
    await lastNameInput.trigger('input');
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain('Last name is required');
    expect(lastNameInput.classes()).toContain('border-red-500');

    // Simulate invalid input for email
    const emailInput = wrapper.find('input#email');
    await emailInput.setValue('invalid-email');
    await emailInput.trigger('input');
    await wrapper.vm.$nextTick(); 
    expect(wrapper.html()).toContain('Invalid email address');
    expect(emailInput.classes()).toContain('border-red-500');

    // Simulate invalid input for phoneNumber
    const phoneNumberInput = wrapper.find('input#phoneNumber');
    await phoneNumberInput.setValue('555');
    await phoneNumberInput.trigger('input');
    await wrapper.vm.$nextTick(); 
    expect(wrapper.html()).toContain('Mobile number must start with 55 and be 7 or 8 digits long');
    expect(phoneNumberInput.classes()).toContain('border-red-500');

    // Simulate invalid input for monthlyIncome
    const monthlyIncomeInput = wrapper.find('input#monthlyIncome');
    await monthlyIncomeInput.setValue('50');
    await monthlyIncomeInput.trigger('input');
    await wrapper.vm.$nextTick(); 
    expect(wrapper.html()).toContain('Monthly income must be greater than 100');
    expect(monthlyIncomeInput.classes()).toContain('border-red-500');
  });
});
