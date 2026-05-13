# Brainstorming Directory Protocol

## Purpose
This directory is for rapid ideation and project selection before execution. No code lives here permanently. Ideas are born, evaluated, and either promoted to `../Experiments/` or discarded.

## Document Format
**HTML only.** All brainstorming artifacts, notes, and session logs are HTML files. No Markdown, no plain text, no PDFs. Open `index.html` in a browser to work.

## Workflow

### 1. Brainstorm
Open `index.html`. Add cards to any column:
- **Agent Harness** — Custom agents, droids, orchestration, evaluation harnesses
- **AI/ML Training** — Training runs, fine-tuning, quantization, datasets
- **Arxiv Research** — Paper reproductions, novel implementations, ablation studies
- **Tools & Infrastructure** — Dev tools, automation, benchmarks, visualizations
- **Experiments** — Quick proofs-of-concept, throwaway tests

### 2. Evaluate
Use the priority dots on each card:
- 🔴 High — Do this next
- 🟡 Medium — Interesting, needs more thought
- 🟢 Low — Nice-to-have or speculative

Add notes, links, and rough effort estimates directly on cards.

### 3. Select
When one project clearly wins, click **"Select This Project"** on its card. This marks it as the chosen idea.

### 4. Archive & Reset
Click **"Archive Session & Reset"** in the header. This:
1. Exports the current board as a dated HTML file (save it to `archive/`)
2. Clears the board back to zero
3. You now have a clean slate for the next brainstorm session

After resetting, create the selected project in `../Experiments/<project-name>/` as a proper repository and begin work.

## Rules
- Keep sessions focused. One active brainstorm at a time.
- Do not let the board grow beyond ~15 cards. If it does, prune or archive.
- Every selected project must leave a trace in `archive/` so old ideas are never truly lost.
- When in doubt, bias toward building the smallest version that tests the core hypothesis.
