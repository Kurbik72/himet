import { useVuelidate } from '@vuelidate/core'

export const useGetValidation = (v$: ReturnType<typeof useVuelidate>) => {
  return function (name: string) {
    if (!v$.value[name].$error) {
      return ''
    }
    return v$.value[name].$errors[0].$message
  }
}
