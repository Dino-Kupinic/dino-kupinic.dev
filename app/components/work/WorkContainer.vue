<script setup lang="ts">
import { ref, computed } from "vue"
import { z } from "zod"
import { toast } from "vue-sonner"

const EMAIL = "dinokupinic2006@gmail.com"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z.email(),
  phone: z.string().refine(
    (val) => {
      if (!val || val.trim() === "") return true
      const phoneRegex = /^[\d\s\-+()]+$/
      return phoneRegex.test(val) && val.replace(/\D/g, "").length >= 10
    },
    { message: "Please enter a valid phone number" },
  ),
  message: z.string().min(1, "Message is required").trim(),
})

type ContactForm = z.infer<typeof contactFormSchema>

const formData = ref<ContactForm>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
})

const errors = ref<Partial<Record<keyof ContactForm, string>>>({})

function validateForm(): boolean {
  const result = contactFormSchema.safeParse(formData.value)

  if (!result.success) {
    errors.value = {}
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof ContactForm
      errors.value[field] = issue.message
    })
    return false
  }

  errors.value = {}
  return true
}

async function handleSubmit(e: Event) {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  try {
    await $fetch("/api/send", {
      method: "POST",
      body: {
        ...formData.value,
        to: EMAIL,
      },
    })
  } catch (error) {
    console.error("Error sending contact form:", error)
    toast.error(
      "An error occurred while sending your message. Please try again later.",
    )
    return
  }

  formData.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }
  errors.value = {}
  toast.info("Your message has been sent successfully!")
}

const hasFirstNameError = computed(() => !!errors.value.firstName)
const hasLastNameError = computed(() => !!errors.value.lastName)
const hasEmailError = computed(() => !!errors.value.email)
const hasPhoneError = computed(() => !!errors.value.phone)
const hasMessageError = computed(() => !!errors.value.message)
</script>

<template>
  <div
    class="bg-background flex w-full flex-col gap-5 rounded-lg border p-5 shadow-sm sm:flex-row sm:items-stretch"
  >
    <div
      class="bg-accent flex w-full items-center justify-center rounded-lg p-12"
    >
      <h3 class="text-center text-4xl font-bold tracking-tighter sm:text-5xl">
        Let's make something great. ✌️
      </h3>
    </div>
    <div class="w-full max-w-md">
      <form @submit="handleSubmit">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Contact me</FieldLegend>
            <FieldDescription>
              Fill out the form below and I will get back to you as soon as
              possible.
            </FieldDescription>
            <FieldGroup class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field :data-invalid="hasFirstNameError">
                <FieldLabel for="firstname"> Firstname </FieldLabel>
                <Input
                  id="firstname"
                  v-model="formData.firstName"
                  placeholder="John"
                  :aria-invalid="hasFirstNameError"
                />
                <FieldError
                  v-if="hasFirstNameError"
                  :errors="[errors.firstName!]"
                />
              </Field>
              <Field :data-invalid="hasLastNameError">
                <FieldLabel for="lastname"> Lastname </FieldLabel>
                <Input
                  id="lastname"
                  v-model="formData.lastName"
                  placeholder="Doe"
                  :aria-invalid="hasLastNameError"
                />
                <FieldError
                  v-if="hasLastNameError"
                  :errors="[errors.lastName!]"
                />
              </Field>
              <Field :data-invalid="hasEmailError">
                <FieldLabel for="email"> E-Mail </FieldLabel>
                <Input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  :aria-invalid="hasEmailError"
                />
                <FieldError v-if="hasEmailError" :errors="[errors.email!]" />
              </Field>
              <Field :data-invalid="hasPhoneError">
                <FieldLabel for="phone"> Phone number </FieldLabel>
                <Input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  placeholder="+43 664 1234567"
                  :aria-invalid="hasPhoneError"
                />
                <FieldError v-if="hasPhoneError" :errors="[errors.phone!]" />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field :data-invalid="hasMessageError">
                <FieldLabel for="message"> Message </FieldLabel>
                <Textarea
                  id="message"
                  v-model="formData.message"
                  class="h-32 max-h-64 sm:h-24 sm:max-h-32"
                  :aria-invalid="hasMessageError"
                />
                <FieldError
                  v-if="hasMessageError"
                  :errors="[errors.message!]"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit" class="w-full"> Submit </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  </div>
</template>
