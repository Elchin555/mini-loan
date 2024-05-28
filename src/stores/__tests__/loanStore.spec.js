import { describe, it, expect,beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useLoanStore } from '@/stores/loanStore';

describe('loanStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with correct values', () => {
    const store = useLoanStore();
    expect(store.showLoanModal).toBe(false);
    expect(store.userName).toBe('');
    expect(store.loanDetails).toEqual({});
    expect(store.formData).toEqual({});
  });

  it('checkLoanCalculate sets loanDetails correctly', () => {
    const store = useLoanStore();
    const result = store.checkLoanCalculate(1000, 12, 100);
    expect(result).toBe(true);
    expect(store.loanDetails).toEqual({
      amount: 1000,
      period: 12,
      monthlyPayment: 100
    });
  });

  it('checkForm sets formData and navigates correctly', () => {
    const store = useLoanStore();
    const form = {
      firstName: 'Elchin',
      lastName: 'Rahimli',
      email: 'elchinr@example.com',
      phoneNumber: '550123456',
      monthlyIncome: 2000
    };

    const result = store.checkForm(form);
    expect(result).toBe(true);
    expect(store.userName).toBe('Elchin');
    expect(store.formData).toEqual(form);
  });

  it('checkForm navigates to negative result if income is less than 1000', () => {
    const store = useLoanStore();
    const form = {
      firstName: 'Elchin',
      lastName: 'Rahimli',
      email: 'elchinr@example.com',
      phoneNumber: '550123456',
      monthlyIncome: 500
    };

    const result = store.checkForm(form);
    expect(result).toBe(true);
    expect(store.userName).toBe('Elchin');
    expect(store.formData).toEqual(form);
  });
});
