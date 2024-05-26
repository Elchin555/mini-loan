<script setup>
import { ref } from 'vue';
import * as Yup from 'yup';
import { useLoanStore } from "@/stores/loanStore";

const loanStore = useLoanStore();

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  monthlyIncome: ''
});

const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  monthlyIncome: ''
});

const formFields = {
  firstName: { label: 'First name', type: 'text' },
  lastName: { label: 'Last name', type: 'text' },
  email: { label: 'E-mail', type: 'email' },
  phoneNumber: { label: 'Mobile number', type: 'text' },
  monthlyIncome: { label: 'Monthly Income', type: 'text' }
};

const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  monthlyIncome: Yup.string().required('Monthly income is required')
});

const validateField = (fieldName) => {
  schema.validateAt(fieldName, form.value)
    .then(() => {
      errors.value[fieldName] = '';
    })
    .catch((error) => {
      errors.value[fieldName] = error.errors[0];
    });
};

const handleSubmit = () => {
  schema.validate(form.value, { abortEarly: false })
    .then(() => {
      loanStore.checkForm(form.value); // Bu satırı ekleyin
      console.log('Form is valid', form.value);
      // Do something with the valid form data
    })
    .catch((validationErrors) => {
      if (validationErrors.inner) {
        validationErrors.inner.forEach(error => {
          errors.value[error.path] = error.message;
        });
      }
    });
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col space-y-5">
    <div v-for="(field, fieldName) in formFields" :key="fieldName" class="relative">
      <input
        v-model="form[fieldName]"
        @input="validateField(fieldName)"
        :type="field.type"
        :id="fieldName"
        :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors[fieldName] ? 'border-red-500' : 'border-purple-500']"
      />
      <label :for="fieldName" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form[fieldName] ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">{{ field.label }}</label>
      <span v-if="errors[fieldName]" class="text-red-500 text-sm">{{ errors[fieldName] }}</span>
    </div>

    <input type="submit" value="Submit" class="w-full py-3 rounded-full bg-[#AA93FF] cursor-pointer">
  </form>
</template>
