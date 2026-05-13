// Node.js helper to export a brainstorm session to a static HTML file
// Usage: node scripts/export.js <input-json> <output-html>

const fs = require('fs');

const COLUMNS = [
  { id: 'agents', name: 'Agent Harness' },
  { id: 'training', name: 'AI / ML Training' },
  { id: 'arxiv', name: 'Arxiv Research' },
  { id: 'tools', name: 'Tools & Infrastructure' },
  { id: 'experiments', name: 'Experiments' }
];

function escapeHtml(t) {
  return t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function main() {
  const [, , input, output] = process.argv;
  if (!input || !output) {
    console.error('Usage: node scripts/export.js <input-json> <output-html>');
    process.exit(1);
  }
  const cards = JSON.parse(fs.readFileSync(input, 'utf8'));
  const date = new Date().toISOString().slice(0, 10);
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Brainstorm Archive ${date}</title>
<style>
body{background:#0b0c0f;color:#e4e6eb;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;padding:2rem;max-width:900px;margin:0 auto;line-height:1.6}
h1{font-size:1.4rem;border-bottom:1px solid #2a2d36;padding-bottom:0.5rem}
.card{background:#15171c;border:1px solid #2a2d36;border-radius:8px;padding:1rem;margin:1rem 0}
.card h3{margin:0 0 0.25rem;font-size:1rem}
.card p{color:#8b909e;margin:0;white-space:pre-wrap}
.meta{font-size:0.75rem;color:#8b909e;margin-top:0.5rem}
.selected{border-color:#58a6ff;box-shadow:0 0 0 3px rgba(88,166,255,0.15)}
</style></head>
<body>
<h1>Brainstorm Archive — ${date}</h1>
${COLUMNS.map(col => {
  const cs = cards.filter(c => c.column === col.id);
  if (!cs.length) return '';
  return `<h2>${col.name}</h2>` + cs.map(c => `
<div class="card ${c.selected ? 'selected' : ''}">
  <h3>${c.selected ? '[SELECTED] ' : ''}${escapeHtml(c.title)}</h3>
  <p>${escapeHtml(c.body)}</p>
  <div class="meta">Priority: ${c.priority || 'green'}</div>
</div>`).join('');
}).join('')}
</body></html>`;
  fs.writeFileSync(output, html);
  console.log(`Exported to ${output}`);
}

main();
