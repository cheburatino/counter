<template>
  <q-dialog v-model="isShowDialog">
    <q-card style="max-width: 100vw; min-width: 50vw">
      <q-card-section>
        <div class="q-px-lg q-pb-md">
          <q-timeline color="secondary" :layout="timelineLayout">
            <q-timeline-entry heading tag="h6">
              {{item.title}}
            </q-timeline-entry>

            <q-timeline-entry
                v-for="entry in historyList" :key="entry.id"
                :icon='entry.icon'
                :color='entry.color'
            >
  <!--              avatar="https://cdn.quasar.dev/img/avatar5.jpg"-->

              <template v-slot:title>
                <q-item-section>
                  <div>
                    {{entry.type}}
                  </div>
                  <div style="color: grey; font-size: 0.8rem;">
                    {{entry.user_full_name}}
                  </div>
                  </q-item-section>
              </template>

              <template v-slot:subtitle>
                {{new Date(entry.datetime).toLocaleDateString('ru', {weekday: 'short', day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}}
              </template>

              <div class="q-pa-md row justify-center" v-if="entry.old_value">
                было
                <q-card class="col-12 q-pa-md">{{entry.old_value}}</q-card>
                изменено на
                <q-card class="col-12 q-pa-md" style="background-color: rgba(33,186,69,0.1);">{{entry.new_value}}</q-card>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-btn :round="round" :rounded="rounded" push icon="history" color="accent" :label="label" @click="open()" />
</template>

<script>
import {ref, computed} from "vue";
import {useQuasar} from "quasar";

export default {
  props: ['historyList', 'item', 'label', 'rounded', 'round'],
  setup(props) {
    // список изменений
    // const historyList = ref(props.history)

    const isShowDialog = ref(false)

    const $q = useQuasar()

    // вид таймлайна в зависимости от размера экрана
    const timelineLayout = computed(() => {
      return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
    })

    const open = () => {
      isShowDialog.value = true
    }

    return {
      // historyList,
      isShowDialog,
      open,
      timelineLayout
    }
  }
}
</script>

<style scoped>

</style>
