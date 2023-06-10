<script setup>
import {VERTEX} from './ben'
import { ref } from 'vue'

</script>
<template>
  <div  class="text-white"
    v-for='(VERTEX, index) in VERTEX' 
    :key='VERTEX' 
  >
  
        <input v-model="VERTEX.name" />
          

    
  </div>
</template>