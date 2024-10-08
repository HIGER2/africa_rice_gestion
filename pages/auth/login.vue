
<script setup>
import { useAuthViewModel } from '~/stores/viewmodels/authViewModels';

const { login, credential } = useAuthViewModel()
const isLoading =ref(false)
const handleLogin = async () => {
    isLoading.value = true
     await login()
    isLoading.value = false
};
</script>



<template>
    <section class="login">
        <div class="container">
            <div class="login-form">
                <div class="card flex w-[380px] flex-col items-center gap-1 rounded-md border border-zinc-200 bg-white p-8  shadow-sm">
                    <div class="logo">
                        <img src="https://mycareer.africarice.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fafricarice.b93af9cc.webp&w=1080&q=75" alt="Logo" class="logo">
                    </div>
                    <h2>Sign in</h2>
                    <p class="text-center text-zinc-500 text-sm">Sign into your staff account to get access to our platform.</p>
                    <form @submit.prevent="handleLogin" class="w-[100%]">
                        <UiFormInput
                            label="E-mail"
                            placeholder="E-mail"
                            v-model="credential.email"
                            />
                            <UiFormInput
                            label="password"
                            placeholder="password"
                            v-model="credential.password"
                            />
                            <UiButtonSubmit
                            type="submit"
                           label="Login"
                           :is-loading="isLoading"
                           />
                    </form>
                    <span class="text-center text-zinc-500 text-sm">Please log in with your Mycareer Africarice credentials.</span>
                </div>
            </div>
    </div>
    </section>

</template>

<style lang="scss" scoped>

.login{
    width: 100%;

.container {
width: 100%;
padding:1rem;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
// background-color: $secondary-color;
@media only screen and (max-width: 792px){
    width: 100%;
}
  .login-form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 792px){
    width: 100%;
    padding: 0;
    }
    .card{
        border-radius: 0.5rem;
        background-color: $white;
        width: 390px;
        min-height: 400px;
        @media only screen and (max-width: 792px){
            width: 100%;
        }
        .logo{
            max-width: 120px;
            margin-inline: auto;
            img{
                width: 100%;
            }
        }
    }
    h2 {
      font-size: 16px;
      margin: 5px 0;
    }

    p {
      font-size: 13px;
      font-weight: 400;
    }


    form {
      .form-group {
        margin-bottom: 15px;
        margin: 20px 0px;

        span {
          font-size: 12px;
        }
      }
    }


   .subtitle, .forgot-password {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      text-decoration: underline;
        font-size: 12px;
        font-weight: 300;
      &:hover {
        text-decoration: underline;
      }
    }
    .subtitle{
        text-decoration: none;
        font-weight: 400;
        &:hover{
            text-decoration: none;
        }
    }
  }
}
}
</style>