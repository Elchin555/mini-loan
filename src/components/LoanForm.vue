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
  phoneNumber: Yup.string()
    .matches(/^55\d{5,6}$/, 'Mobile number must start with 55 and be 7 or 8 digits long')
    .required('Phone Number is required'),
  monthlyIncome: Yup.number()
    .typeError('Monthly income must be a number')
    .moreThan(100, 'Monthly income must be greater than 100')
    .required('Monthly income is required')
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
      loanStore.checkForm(form.value);
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


const filterNumericInput = (event, fieldName) => {
  if (fieldName === 'phoneNumber' || fieldName === 'monthlyIncome') {
    event.target.value = event.target.value.replace(/\D/g, '');
    form.value[fieldName] = event.target.value; 
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <div v-for="(field, fieldName) in formFields" :key="fieldName" class="relative">
      <input
        v-model="form[fieldName]"
        @input="validateField(fieldName); filterNumericInput($event, fieldName)"
        :type="field.type"
        :id="fieldName"
        :class="['block w-full rounded-md border px-4 py-3 text-gray-900 transition duration-150 shadow-sm hover:border-[#60378B] focus:border-2 focus:border-[#60378B] focus:outline-none peer', errors[fieldName] ? 'border-red-500' : 'border-purple-500']"
      />
      <label :for="fieldName" :class="['absolute rounded-sm left-3 px-1 transition-all duration-300 transform origin-left bg-white', 
        form[fieldName] ? 'top-0 -translate-y-2 text-xs' : 'top-3 text-base text-gray-500 peer-focus:font-medium peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs',
        errors[fieldName] ? 'text-red-500' : 'text-[#60378B]'
      ]">{{ field.label }}</label>
      <span v-if="errors[fieldName]" class="text-red-500 text-xs font-medium">{{ errors[fieldName] }}</span>
    </div>

    <button type="submit" class="btn mt-2">Submit</button>
  </form>
</template>
