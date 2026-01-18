<script setup lang="ts"></script>

<template>
  <div
    class="bg-background flex w-full flex-col gap-5 rounded-lg border p-5 shadow-sm sm:flex-row"
  >
    <div
      class="bg-accent flex h-full w-full items-center justify-center rounded-lg"
    >
      a
    </div>
    <div class="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Contact me</FieldLegend>
            <FieldDescription>
              Fill out the form below and I will get back to you as soon as
              possible.
            </FieldDescription>
            <FieldGroup class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel for="checkout-7j9-card-name-43j">
                  Firstname
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="John"
                  required
                />
              </Field>
              <Field>
                <FieldLabel for="checkout-7j9-card-number-uw1">
                  Lastname
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="Doe"
                  required
                />
              </Field><Field>
                <FieldLabel for="checkout-7j9-card-number-uw1">
                  E-Mail
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="johndoe@gmail.com"
                  type="email"
                  required
                />
              </Field>
              <Field>
                <FieldLabel for="checkout-7j9-card-number-uw1">
                  Phone number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  type="tel"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel for="checkout-7j9-optional-comments">
                  Message
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  class="sm:max-h-32 sm:h-16 h-32 max-h-64"
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
