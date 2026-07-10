import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const screenshots = [
  'dashboard.png',
  'knowledge-base.png',
  'profile.png',
  'discover.png',
  'rankings.png',
  'ai-search.png',
  'tag-network.png',
  'setting.png',
];

await Promise.all(
  screenshots.map((filename) => access(path.join(projectRoot, 'public', 'screenshots', filename))),
);

const [heroSource, featuresSource] = await Promise.all([
  readFile(path.join(projectRoot, 'src', 'components', 'Hero.tsx'), 'utf8'),
  readFile(path.join(projectRoot, 'src', 'pages', 'Features.tsx'), 'utf8'),
]);

if (!heroSource.includes('/screenshots/dashboard.png')) {
  throw new Error('首页主视觉尚未引用最新概览截图');
}

for (const filename of screenshots) {
  if (!featuresSource.includes(`/screenshots/${filename}`)) {
    throw new Error(`功能页缺少截图映射：${filename}`);
  }
}

if (!featuresSource.includes('八大核心功能')) {
  throw new Error('功能页仍未更新为八大核心功能');
}

console.log(`截图校验通过：${screenshots.length} 张页面截图已全部接入官网。`);
