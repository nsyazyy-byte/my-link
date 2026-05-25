# 🚀 MyLink Project Guide

This file is a core guide for developing the MyLink project with Antigravity.

## 📌 Project Overview
*   **Service Name:** MyLink
*   **One-line Summary:** A link-in-bio service with neobrutalism style and inline editing.
*   **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Firebase (Firestore/Auth)

## 🛠️ Core Development Rules
1.  **Design:** Maintain **Neobrutalism** style (thick black borders, hard shadows, high-saturation colors).
2.  **Editing:** Implement profile and link editing using the **Inline Edition** method.
3.  **Data Structure:** 
    *   Use `displayName` as the URL slug.
    *   Follow the **Sub-collection (`links`)** structure under the user document.
4.  **Icons:** Use the **Google Favicon API** for all external link icons.
5.  **Constraints:** Image uploads, drag-and-drop (reordering), and link activation toggles are excluded.

## 📂 References
*   [Product Requirements Document (PRD)](./docs/PRD.md)
*   [User Scenarios](./docs/Scenarios.md)
*   [Wireframes](./docs/Wireframes.md)

---
*This file may be updated by Antigravity as the project progresses.*
