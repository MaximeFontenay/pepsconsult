<template>
  <form v-if="!submittedForm" @submit.prevent="submitForm" class="w-full space-y-5">
    <div class="space-y-1">
      <label for="name">Nom (du particulier ou de l’entreprise)<span>*</span></label>
      <input type="text" id="name" name="name" placeholder="Nom*" required v-model="name" />
    </div>
    <div class="space-y-1">
      <label for="email">Adresse e-mail<span>*</span></label>
      <input type="email" id="email" name="email" placeholder="E-mail*" required v-model="email" />
    </div>
    <div>
      <label for="message">Votre demande<span>*</span></label>
      <textarea id="message" name="message" class="min-h-[90px] !border-primary"
        placeholder="Bonjour, j'aimerai discuter de mon projet avec vous..." required v-model="message"></textarea>
    </div>

    <button type="submit" class="bg-primary text-white text-base font-medium md:text-lg flx-center gap-3 ml-auto
      px-6 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2">
      <p>Envoyer</p>
      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 16.1751C0 16.9449 0.833335 17.426 1.5 17.0411L13.9278 9.86595C14.5945 9.48105 14.5945 8.5188 13.9278 8.1339L1.5 0.958708C0.833333 0.573808 0 1.05493 0 1.82474V7.2736L7.76656 9.11547L0 10.8039V16.1751Z"
          fill="white" />
      </svg>
    </button>
  </form>

  <div v-else class="w-full max-w-[500px] mx-auto rounded-lg text-center ">
    <p>Merci beaucoup pour votre message! Je vous répondrai dans les prochains jours.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const submittedForm = ref(false);

const WEB3FORMS_ACCESS_KEY = "a2aee534-584d-4faa-92d4-bbc115070869";
const name = ref("")
const email = ref("")
const message = ref("")
const result = ref("");
const status = ref("");

const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Pep's Consult - Nouveau message depuis le site",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset 
    name.value = "";
    email.value = "";
    message.value = "";
    submittedForm.value = true;

    // Clear result and status after 3 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
input,
textarea {
  @apply border border-primary rounded-lg p-2 text-sm;
  width: 100%;
  padding: 4px 8px;
  outline: none !important;
  box-shadow: none !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px var(--primary-light) inset !important;
  outline: none !important;
  border: 1px solid var(--primary-light) !important;
}

label {
  @apply text-sm;

  span {
    @apply inline-block ml-1 text-red-600 font-bold;
  }
}
</style>