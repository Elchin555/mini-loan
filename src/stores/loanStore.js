import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import {ref} from "vue"

export const useLoanStore = defineStore('loanStore', () => {
  const router = useRouter();
  const userName = ref('');
  const loanDetails = ref({});
  const formData = ref({}); 
  const formSubmitted = ref(false);

  function checkLoanCalculate(amount, period, monthlyPayment) {
    if (!amount || !period || !monthlyPayment) {
      return false;
    }
    loanDetails.value = {
      amount,
      period,
      monthlyPayment
    };

    return true;
  }


  function checkForm(form) {
    const { firstName, lastName, email, phoneNumber, monthlyIncome } = form;

    if (!firstName || !lastName || !email || !phoneNumber || !monthlyIncome) {
      return false;
    }

    userName.value = firstName;
    formData.value = { 
      firstName,
      lastName,
      email,
      phoneNumber,
      monthlyIncome
    };
    formSubmitted.value = true;
    if (monthlyIncome < 1000) {
    
      if(router){
        router.push('/result/negative');
      }
    } else {
      if(router){
        router.push('/result/positive');
      }
    }

    return true;
  }

  return {
    userName,
    loanDetails,
    formData,
    checkLoanCalculate,
    checkForm,
  };
});
