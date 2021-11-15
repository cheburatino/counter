<template>
  <div class="inline-wr" style="padding: 5px;
                                font-size: 16px;
                                padding-bottom: 3px;
                                margin-top: 10px;
                                border-bottom: 1px solid #4f6ccd;
                                width: 203%;
                                color: #4f6ccd;
                                font-weight: 600;">
    Участники:
  </div>
</template>

<script>
  import {Notify} from 'quasar'
  export default {
    props: ['fld', 'item'],
    name: "webClient_comp_title",
    data() {
      return {
        loading: false,
      }
    },
  }
</script>

<style scoped>
  .inline-wr{
    display: flex;
    justify-content: space-between;
    padding-right: 200px;
    box-sizing: border-box;
  }
  .btn-get-object {
    height: 40px;
    margin-top: auto;
  }
</style>
