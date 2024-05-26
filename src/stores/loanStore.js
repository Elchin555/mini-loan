import { defineStore } from 'pinia'
import {ref,computed} from "vue"
import { useRouter } from 'vue-router';

export const useLoanStore = defineStore('loanStore', () => {
  const router = useRouter();
  const showLoanModal=ref(false)
  const userName = ref('');

  const loanDetails = ref({})
  const name = ref('Elchin')


  function checkLoanCalculate(amount,period,monthlyPayment) {

    if (!amount || !period || !monthlyPayment) {
      console.log("All fields are required");
      return false;
    }

    loanDetails.value = {
      amount,
      period,
      monthlyPayment
    };
    console.log("loanDetails",loanDetails.value)

    return true;
  }
  function checkForm(form) {
    showLoanModal.value=false
    const { firstName, lastName, email, phoneNumber, monthlyIncome } = form;

    if (!firstName || !lastName || !email || !phoneNumber || !monthlyIncome) {
      console.log("All fields are required");
      return false;
    }
    userName.value = firstName;

    if (monthlyIncome < 1000) {
      router.push('/result/negative');
    } else {
      router.push('/result/positive');
    }

    return true;
  }

  return { showLoanModal, name, checkForm,userName,loanDetails,checkLoanCalculate}
})
