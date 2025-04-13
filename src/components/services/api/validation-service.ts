import { required, minLength, helpers } from '@vuelidate/validators'

const dateInFuture = (date: string): boolean => {
  const today = new Date()
  const userDate = new Date(date)
  if (userDate < today) {
    return false
  }
  return true
}
const validationMessages = {
  required: 'Заполните поля!',
  minLength: (count: number) => `Минимальное количество символов ${count}`,
  dateInFuture: 'Дата не может быть в прошлом',
}

export const validationRules = {
  required: helpers.withMessage(validationMessages.required, required),
  minLength(min: number) {
    return helpers.withMessage(validationMessages.minLength(min), minLength(min))
  },
  dateInFuture: helpers.withMessage(validationMessages.dateInFuture, dateInFuture),
}
