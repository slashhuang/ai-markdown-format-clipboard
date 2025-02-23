/**
 * @desc 将ai剪切板的内容转换成可粘贴到编辑器的内容
 */
// 读取剪切板内容
import * as marked from 'marked';
const log = console.log.bind(console);

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

/**
 * @desc 读取剪切板内容
 */
export interface ClipboardResult {
  type: string;
  content: unknown;
}
export const getClipboardContents = async (): Promise<ClipboardResult[]> => {
  try {
    // 请求剪切板读取权限
    const clipboardItems = await navigator.clipboard.read();
    // 遍历剪切板中的内容
    const results = [];
    for (const clipboardItem of clipboardItems) {
      // 遍历每个内容项支持的类型
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        let content;
        // 根据不同类型解析内容
        if (type.startsWith('text/')) {
          // 处理文本类型
          content = await blob.text();
          console.log(`剪切板中的文本${type}内容:`, content);
        } else if (type.startsWith('image/')) {
          // 处理图片类型
          content = URL.createObjectURL(blob);
        } else {
          // 其他二进制类型
          content = blob;
        }
        results.push({
          type: type,
          content: content
        });
      }
    }
    return results;
  } catch (err) {
    throw new Error('无法读取剪切板内容:', err);
  }
};
/**
 * @desc 将ai剪切板的内容转换成可粘贴到编辑器的内容
 */
export const genClipboardText2Html = async (input: ClipboardResult[]): Promise<string> => {
  const content = getTextContentInClipboard(input);
  if (content) {
    const htmlContent = await markdown2Html(content);
    await copyHtmlToClipboard({
      htmlContent,
      content
    });
    return htmlContent;
  } else {
    return '';
  }
};

/**
 * @desc 从剪切板内容中获取文本内容
 */
export function getTextContentInClipboard (input: ClipboardResult[]): string {
  return input.find(item => item.type === 'text/plain')?.content as string;
}
