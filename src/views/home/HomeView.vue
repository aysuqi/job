<template>
  <div>
    <InfoView />
    <van-cell-group inset>
      <van-cell title="个人优势">
        <template #label>
          <ol>
            <li v-for="a in advantage" :key="a.id">
              {{ a.id }}、{{ a.title }}
            </li>
          </ol>
        </template>
      </van-cell>
      <van-cell title="个人简介">
        <template #label>
          <ol>
            <li v-for="int in introduction" :key="int.id">
              {{ int.id }}、{{ int.title }}
            </li>
          </ol>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup>
import InfoView from './InfoView.vue'
import { advantage, introduction } from './data'
</script>
