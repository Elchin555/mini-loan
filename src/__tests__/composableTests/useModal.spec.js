import { describe, it, expect,beforeEach } from 'vitest';
import { useModal } from '@/composables/useModal'

describe('useModal', () => {
  it('should set visible to true when openModal is called', () => {
    const { visible, openModal } = useModal()
    expect(visible.value).toBe(false) 
    openModal()
    expect(visible.value).toBe(true)
  })

  it('should set visible to false when closeModal is called', () => {
    const { visible, openModal, closeModal } = useModal()
    openModal()
    expect(visible.value).toBe(true)
    closeModal()
    expect(visible.value).toBe(false) 
  })
})
