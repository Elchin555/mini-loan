<script setup>
import { ref } from 'vue';
import * as Yup from 'yup';

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

const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required("Phone Number is required"),
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
      // Form is valid, you can proceed with submission
      console.log('Form is valid');
    })
    .catch((validationErrors) => {
      validationErrors.inner.forEach(error => {
        errors.value[error.path] = error.message;
      });
    });
};
</script>

<template>
    <div class="w-screen h-screen fixed z-50 top-0 left-0 bg-black bg-opacity-50">
      <div class="flex items-center justify-center w-full h-full">
        <div class="w-1/2 flex flex-col bg-white rounded-[30px] p-12 space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl">Personal details</h3>
            <button>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="#21093A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
  
          <form @submit.prevent="handleSubmit" class="flex flex-col space-y-5">
            <div class="relative">
              <input 
                v-model="form.firstName"
                @input="validateField('firstName')"
                type="text" 
                id="first_name" 
                :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors.firstName ? 'border-red-500' : 'border-purple-500']"
                placeholder=" " 
              />
              <label for="first_name" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form.firstName ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">First name</label>
              <span v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</span>
            </div>
  
            <div class="relative">
              <input 
                v-model="form.lastName"
                @input="validateField('lastName')"
                type="text" 
                id="last_name" 
                :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors.lastName ? 'border-red-500' : 'border-purple-500']"
                placeholder=" " 
              />
              <label for="last_name" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form.lastName ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">Last name</label>
              <span v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</span>
            </div>
  
            <div class="relative">
              <input 
                v-model="form.phoneNumber"
                @input="validateField('phoneNumber')"
                type="text" 
                id="phone_number" 
                :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors.phoneNumber ? 'border-red-500' : 'border-purple-500']"
                placeholder=" " 
              />
              <label for="phone_number" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form.phoneNumber ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">Mobile number</label>
              <span v-if="errors.phoneNumber" class="text-red-500 text-sm">{{ errors.phoneNumber }}</span>
            </div>
  
            <div class="relative">
              <input 
                v-model="form.email"
                @input="validateField('email')"
                type="email" 
                id="email" 
                :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors.email ? 'border-red-500' : 'border-purple-500']"
                placeholder=" " 
              />
              <label for="email" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form.email ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">E-mail</label>
              <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
            </div>
  
            <div class="relative">
              <input 
                v-model="form.monthlyIncome"
                @input="validateField('monthlyIncome')"
                type="text" 
                id="monthly_income" 
                :class="['block w-full rounded-md border p-4 text-gray-900 shadow-sm focus:outline-none peer', errors.monthlyIncome ? 'border-red-500' : 'border-purple-500']"
                placeholder=" " 
              />
              <label for="monthly_income" :class="['absolute left-4 px-1 transition-all duration-300 transform origin-left bg-white', form.monthlyIncome ? 'top-0 -translate-y-3 text-xs text-purple-500' : 'top-4 text-base text-gray-500 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-purple-500']">Monthly Income</label>
              <span v-if="errors.monthlyIncome" class="text-red-500 text-sm">{{ errors.monthlyIncome }}</span>
            </div>
  
            <input type="submit" value="Submit" class="w-full py-3 rounded-full bg-[#AA93FF] cursor-pointer">
          </form>
        </div>
      </div>
    </div>    
  </template>