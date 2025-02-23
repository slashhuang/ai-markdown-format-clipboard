<template>
  <div id="main">
    <el-row class="container">
      <el-col :span="12" class="left">
        <el-row class="header">
          <el-col :span="24">
            <span>Ai的markdown内容转换器</span>
            <el-button
              type="primary"
              @click="reset"
              v-if="hasPastedContent"
              class="header-btn-txt"
              >重置</el-button
            >
          </el-col>
        </el-row>
        <div v-if="!hasPastedContent" class="empty-paste">
          <el-button type="primary" @click="paste" class="btn-txt"
            >粘贴<br />剪切板内容</el-button
          >
        </div>
        <ul v-if="hasPastedContent" class="left-content">
          <li v-for="item in clipboardPasteResult" :key="item.type">
            <div>剪切板内类型: {{ item.type }}</div>
            <div v-if="item.content">
              <img
                class="image-preview"
                v-if="!!item.type.match('image')"
                :src="item.content"
              />
              <div v-else v-html="item.content" />
            </div>
            <div v-else>没内容</div>
          </li>
        </ul>
      </el-col>
      <el-col :span="12" class="right">
        <el-row class="header">
          <el-col :span="24">
            <div class="preview-area" v-if="tranformedTxt">
              <el-button type="success" @click="copy" class="header-btn-txt"
                >复制内容</el-button
              >
            </div>
          </el-col>
        </el-row>
        <div v-if="!tranformedTxt" class="empty-paste">
          <el-button type="success" @click="tranform" class="btn-txt"
            >点击转换成<br />可读格式
          </el-button>
        </div>
        <div
          v-if="tranformedTxt"
          class="preview-content"
          v-html="tranformedTxt"
        ></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  genClipboardText2Html,
  getClipboardContents,
  type ClipboardResult
} from '@ai-markdown-formate-lipboard/clipboard';
import { ElMessage } from 'element-plus';

const tranformedTxt = ref<string>('');
const clipboardPasteResult = ref<ClipboardResult[]>([]);
const hasPastedContent = computed(() => clipboardPasteResult.value.length > 0);
const tranform = async () => {
  try {
    genClipboardText2Html(clipboardPasteResult.value).then((res) => {
      if (!res) {
        ElMessage({
          message: '没有需要转换的文本',
          type: 'warning'
        });
      }
      tranformedTxt.value = res;
    });
  } catch (error) {
    console.error(error);
  }
};
const paste = async () => {
  const clipboardResult = await getClipboardContents();
  clipboardPasteResult.value = clipboardResult;
};
const reset = () => {
  clipboardPasteResult.value = [];
  tranformedTxt.value = '';
};
const copy = async () => {
  genClipboardText2Html(clipboardPasteResult.value).then((res) => {
    alert('复制成功');
  });
};
</script>

<style lang="scss">
#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    font-size: 16px;
    .header-divider {
      margin-bottom: 0;
    }
  }
  .image-preview {
    max-width: 100%;
  }
  .container {
    flex: 1;
    position: relative;
    font-size: 12px;
    height: 100%;
    .btn-txt {
      font-size: 16px;
      padding: 26px 4px;
    }
    .transform-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      white-space: pre-line;
    }
    .empty-paste {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .left {
      flex: 1;
      border-right: 1px solid #f0f0f0;
      padding: 4px;
      max-height: 100%;
      overflow: scroll;
    }
    .right {
      flex: 1;
      padding: 4px;
      position: relative;
      overflow: scroll;
      max-height: 100%;
      .preview-content {
        padding-top: 20px;
        flex: 1;
        overflow: scroll;
      }
    }
  }
}
</style>
