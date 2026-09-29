<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# PERMANENT MODULARITY RULES (JLUG CORE)

## COMPONENTIZATION
Break the UI into meaningful components.
Do NOT create one giant page component containing the entire UI.
Components should represent meaningful responsibilities.

## SINGLE RESPONSIBILITY
Every component should have one primary responsibility.
Do not blindly split every 20 lines into a component. Split based on responsibility (e.g. Layout, Animation State, Physics, Spawning, Rendering).

## SEPARATE LOGIC FROM RENDERING
Animation/physics logic should NOT be tightly coupled to UI markup.
The principle is: UI ≠ physics ≠ data.

## NO MONOLITHIC HERO FILE
The hero should not become a 1,000-line component.
If the implementation becomes difficult to understand, extract the relevant subsystem.

## DATA SHOULD BE SEPARATE FROM PRESENTATION
Target shapes, text matrices, and block configurations should be represented as data/config objects.
The rendering layer should consume the data.
Do not hard-code hundreds of JSX elements.

## CONFIGURATION SHOULD BE CENTRALIZED
Do not scatter magic numbers throughout the code (e.g. gravity, fallSpeed, spawnInterval).
Create a configuration object/module. Animation tuning should happen in one place.

## TESTABILITY
Core engines (physics, chunking, collision) should be testable independently of the UI where practical.
Functions should not depend unnecessarily on DOM elements.
