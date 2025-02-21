/**
 * @desc 将ai剪切板的内容转换成可粘贴到编辑器的内容
 */
// 读取剪切板内容
import * as marked from 'marked';

const markdown2Html = async (content: string) => {
  const result = await marked.parse(content);
  return result;
};
// 将html内容复制到剪切板
function copyHtmlToClipboard (html: string) {
  // 创建一个包含HTML内容的Blob对象
  const blob = new Blob([html], { type: 'text/html' });
  // 创建一个ClipboardItem对象
  const clipboardItem = new ClipboardItem({ 'text/html': blob });

  // 使用navigator.clipboard.write方法将内容写入剪切板
  navigator.clipboard.write([clipboardItem]).then(() => {
    alert('HTML内容已成功复制到剪切板！');
  }).catch(err => {
    alert(`复制失败:${JSON.stringify(err)}`);
  });
}
export const aiChatContent2Anywhere = async (content: string) => {
  const htmlContent = await markdown2Html(content);
  copyHtmlToClipboard(htmlContent);
  alert('已将ai剪切板的内容转换成可粘贴到编辑器的内容！');
};
