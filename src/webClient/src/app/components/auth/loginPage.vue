<template>
  <div class="layout">
    <div>
      <div class="row justify-center" style="margin-top: 20px; margin-bottom: 10px">
        <img src="image/electron_logo.png" alt="" style="width: auto; max-height: 100px">
        
      </div>
      <!--Кнопки авторизации-->
      <div class="row justify-center q-mt-lg q-col-gutter-md">
        <email-btn/>
        

      </div>
    </div>

  </div>
</template>

<script>
  import emailBtn from './email/emailAuthBtn'
  

    export default {
      components: {emailBtn,},
      
        data() {
            return {}
        },
    }
</script>
