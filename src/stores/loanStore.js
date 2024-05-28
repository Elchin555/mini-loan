import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import {ref} from "vue"

export const useLoanStore = defineStore('loanStore', () => {
  const router = useRouter();
  const showLoanModal = ref(false);
  const userName = ref('');
  const loanDetails = ref({});
  const formData = ref({}); 

  function checkLoanCalculate(amount, period, monthlyPayment) {
    if (!amount || !period || !monthlyPayment) {
      console.log("All fields are required");
      return false;
    }

    loanDetails.value = {
      amount,
      period,
      monthlyPayment
    };

    console.log("loanDetails", loanDetails.value);

    return true;
  }

  function checkForm(form) {
    showLoanModal.value = false;
    const { firstName, lastName, email, phoneNumber, monthlyIncome } = form;

    if (!firstName || !lastName || !email || !phoneNumber || !monthlyIncome) {
      console.log("All fields are required");
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

    if (monthlyIncome < 1000) {
    
      if(router){
        router.push('/result/negative');
      }
    } else {
      console.log("positive",router)
      if(router){
        router.push('/result/positive');
      }
    }

    return true;
  }

  return {
    showLoanModal,
    userName,
    loanDetails,
    formData,
    checkLoanCalculate,
    checkForm
  };
});
