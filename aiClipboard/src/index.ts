/**
 * @desc 将ai剪切板的内容转换成可粘贴到编辑器的内容
 */
// 读取剪切板内容
import * as marked from 'marked';
const log = console.log.bind(console);
interface ReadClipboardContentResult {
  text: string;
  html: string;
}
const markdown2Html = async (content: string) => {
  const result = await marked.parse(content);
  return result;
};
// 将html内容复制到剪切板
const copyHtmlToClipboard = async ({
  htmlContent,
  content
}) => {
  // 创建一个包含HTML内容的Blob对象
  const html = new Blob([htmlContent], { type: 'text/html' });
  const txt = new Blob([content], { type: 'text/plain' });

  log('create blob:', html, txt);
  // 创建一个ClipboardItem对象
  const clipboardItem = new ClipboardItem({ 'text/html': html, 'text/plain': txt });

  // 使用navigator.clipboard.write方法将内容写入剪切板
  await navigator.clipboard.write([clipboardItem]).then(() => {
    log('HTML内容已成功复制到剪切板！');
    return 'HTML内容已成功复制到剪切板！';
    return;
  }).catch(err => {
    log('复制失败', err);
  });
};
export const aiChatContent2Anywhere = async (content: string): Promise<ReadClipboardContentResult> => {
  const htmlContent = await markdown2Html(content);
  await copyHtmlToClipboard({
    htmlContent,
    content
  });
  const result = await readClipboardContent();
  return result;
};

/**
 * @desc 读取剪切板内容
 */
export async function readClipboardContent (): Promise<ReadClipboardContentResult> {
  try {
    // 读取剪切板内容
    const clipboardItems = await navigator.clipboard.read();
    let text = '';
    let html = '';
    // 遍历剪切板中的每一项
    for (const clipboardItem of clipboardItems) {
      // 检查是否有 text/plain 类型
      if (clipboardItem.types.includes('text/plain')) {
        const textBlob = await clipboardItem.getType('text/plain');
        text = await textBlob.text();
        console.log('剪切板中的纯文本内容:', text);
      }

      // 检查是否有 text/html 类型
      if (clipboardItem.types.includes('text/html')) {
        const htmlBlob = await clipboardItem.getType('text/html');
        html = await htmlBlob.text();
        console.log('剪切板中的HTML内容:', html);
      }
    }
    return {
      text,
      html
    };
  } catch (err) {
    console.error('读取剪切板内容失败:', err);
    throw err;
  }
}
