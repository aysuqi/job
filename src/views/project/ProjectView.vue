<template>
  <div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="item in list"
        :key="item.id"
        :title="item.company"
        :name="item.id"
      >
        <ul v-for="child in item.projects" :key="child.id">
          <h3>{{ child.projectName }}{{ child.description }}</h3>
          <li class="item-li">
            <span class="tilte">项目技术：</span>
            <van-tag
              v-for="tag in child.technologys"
              :key="tag"
              size="medium"
              type="primary"
              class="item-tag"
              >{{ tag }}</van-tag
            >
          </li>
          <li class="item-li">
            <span class="tilte">项目描述：</span>{{ child.projectDescription }}
          </li>
          <li class="item-li">
            <span class="tilte">项目职责：</span>
            <ol>
              <li v-for="p in child.projectResponsibility" :key="p">
                {{ p }}
              </li>
            </ol>
          </li>
          <li>
            <van-row gutter="20">
              <van-col span="10" v-show="child.projectImgages?.length">
                <van-tag
                  type="success"
                  size="large"
                  plain
                  @click="showImagePreview(child.projectImgages)"
                  >预览项目效果图</van-tag
                >
              </van-col>
              <van-col span="8" v-show="child.projectUrl">
                <a :href="child.projectUrl">
                  <van-tag type="primary" size="large" plain
                    >前往项目</van-tag
                  ></a
                >
              </van-col>
            </van-row>
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import useProject from './data'
import { showImagePreview } from 'vant'

const { list } = useProject()
const activeName = ref('1')
</script>
<style scoped lang="scss">
.item-tag {
  margin-right: 10px;
}
.item-li {
  margin-bottom: 20px;
}
.tilte {
  font-weight: bold;
}
</style>
