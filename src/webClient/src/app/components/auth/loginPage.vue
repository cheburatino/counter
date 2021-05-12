<template>
  <div class="layout">
    <div>
      <div class="row justify-center" style="margin-top: 20px; margin-bottom: 10px">
        <img src="https://sun9-62.userapi.com/impg/F-5YBo8Q_x7zEvb84K3yXcPszuaap01ckDVNFQ/CUIn2MAFtOQ.jpg?size=1126x465&quality=96&proxy=1&sign=429dc4b365be888cca6a277c5ebcfe54" alt="" style="width: auto; max-height: 100px">
        
      </div>
      <!--Кнопки авторизации-->
      <div class="row justify-center q-mt-lg">
        <email-btn/>
        

      </div>
    </div>

  </div>
</template>

<script>
  import emailBtn from './email/emailAuthBtn'
  

    export default {
      components: {emailBtn},
      
        data() {
            return {}
        },
    }
</script>
