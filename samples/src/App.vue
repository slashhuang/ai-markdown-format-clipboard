<template>
  <div id="app">
    <el-row class="header">
      <el-col :span="24">
        <div class="grid-content ep-bg-purple">Ai的markdown内容转换器</div>
      </el-col>
      <el-divider />
    </el-row>
    <el-row />
    <el-row class="container">
      <el-col :span="10" class="left">
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="paste">粘贴</el-button>
          </el-col>
          <el-col :span="10">
            <el-button type="success" @click="tranform"
              >将Deepseek内容转换成可读格式
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple">原始剪切板内容</div>
          </el-col>
        </el-row>
        <el-divider />
        <el-row>
          <div class="grid-content ep-bg-purple" v-html="pastedTxt"></div>
        </el-row>
      </el-col>
      <el-col :span="10" class="right">
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple">转换后的内容</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-button type="primary" @click="copy" v-if="tranformedTxt"
              >复制格式化后的内容</el-button
            >
          </el-col>
        </el-row>
        <el-divider />
        <el-row>
          <div class="grid-content ep-bg-purple" v-html="tranformedTxt"></div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { aiChatContent2Anywhere } from '@ai-markdown-formate-lipboard/clipboard';
const tranformedTxt = ref<string>('');
const pastedTxt = ref<string>(`---
### **中国资产迎来“黄金周”：揭秘股市暴涨的三大核心逻辑**
**2025年2月21日** | **作者：财经观察**`);
const tranform = async () => {
  try {
    const txt = await navigator.clipboard.readText();
    aiChatContent2Anywhere(txt).then((res) => {
      tranformedTxt.value = res.html;
    });
  } catch (error) {
    aiChatContent2Anywhere(pastedTxt.value).then((res) => {
      tranformedTxt.value = res.html;
    });
  }
};
const paste = async () => {
  const txt = await navigator.clipboard.readText();
  pastedTxt.value = txt;
};
const copy = async () => {
  aiChatContent2Anywhere(pastedTxt.value).then((res) => {
    alert('复制成功');
  });
};
</script>

<style lang="scss">
#app {
  margin-left: 10px;
  margin-right: 10px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .container {
    flex: 1;
    .left {
      flex: 1;
      border-right: 1px solid #f0f0f0;
      padding: 4px;
    }
    .right {
      flex: 1;
      padding: 4px;
    }
  }
}
</style>
