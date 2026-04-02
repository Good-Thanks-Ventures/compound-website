# Compound Website - Agent Rules

## CRITICAL: Read Before ANY Changes

This is a production website (thecompoundagency.com). Do NOT make changes without following this process.

## Git Workflow (MANDATORY)

1. **NEVER deploy via `vercel --prod` CLI.** All deploys go through Git.
2. Create a feature branch: `git checkout -b fix/description`
3. Make your changes
4. Commit and push: `git push origin fix/description`
5. Open a PR on GitHub - Vercel creates a preview URL automatically
6. Graham reviews and merges to main
7. Vercel auto-deploys to production

## Before Making ANY Visual Changes

1. **Read `src/app/page.tsx` first.** Understand the current state.
2. The site was built with specific design decisions. Do not override:
   - Dark theme (#0a0a0a, #fafafa, accent #c5d82d)
   - No floating nav. Logo above hero text.
   - No divider lines between sections. Seamless black.
   - Greyscale team photos with consistent circular borders
   - FlowButton component on ALL CTAs (not plain links or buttons)
   - GridHeroBackground in How It Works section
   - CybercoreBackground from FAQ through footer
   - No emojis in the trust section (SVG icons with glow)
3. **Do not replace animations or backgrounds** unless explicitly asked
4. **Do not change copy** unless given exact replacement text

## Repo

- GitHub: Good-Thanks-Ventures/compound-website
- Vercel: auto-deploys from main branch
- Domain: thecompoundagency.com

## No Em-Dashes

Never use em-dashes (—) anywhere in copy. Use periods, commas, or colons.
