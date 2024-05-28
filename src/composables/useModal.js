import { ref } from 'vue'

const visible = ref(false)

export const useModal = () => {

  const openModal = () =>  visible.value = true
  const closeModal = () =>  visible.value = false

  return { visible, openModal, closeModal }
}