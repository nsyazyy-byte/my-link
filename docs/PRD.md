# 🔗 MyLink Product Requirements Document (PRD)

## 1. Project Overview
### 1.1. Project Name
**MyLink**

### 1.2. Purpose
Integrates various social media, portfolios, and blog links into a **single intuitive URL (Single Point of Entry)**. Supports personal branding with a minimalist feature set and bold visuals.

### 1.3. Target Users
*   **Creators / Influencers:** Users active on multiple platforms (Instagram, YouTube, TikTok) who want to guide followers to all channels at once.
*   **Freelancers / Business Owners:** Professionals who want to share service intros and results simply.
*   **General Users:** Anyone who wants to summarize their profile into a stylish, shared page.

---

## 2. Core Feature List (MVP)

1. **User Authentication:** Firebase-based Google Social Login (streamlined onboarding).
2. **Profile Management:** Inline editing for `displayName` (nickname/slug), `username`, and `bio`. (Note: Image upload is not supported).
3. **Link Management:** Add/Edit(Inline)/Delete links. (Note: Link activation toggle and drag-and-drop reordering are excluded).
4. **Link Icon Automation:** Automatically set favicons using the Google Favicon API for registered URLs.
5. **Responsive Profile Page:** Mobile and desktop-optimized public profile page.

*(Note: Total visitor statistics are not provided. Only 'Click Counts' per link will be considered for future updates.)*

---

## 3. Feature Details

### 3.1. User Authentication & Account Management
*   **Login Method:** **Firebase Auth (Google Social Login)** only.
*   **Initial Setup:** Automatically assign initial `displayName` and `username` based on the Google email ID upon signup.
*   **Data Storage:** All user fields are stored in the user's document in Firestore.

### 3.2. Admin Dashboard
*   **Inline Editing:**
    *   **All info** (`displayName`, `username`, `bio`, link titles, and URLs) is edited by clicking the text directly on the dashboard, with no separate edit pages or popups.
*   **No Image Upload:** No feature to upload or change image files. Avatars are automatically generated using the first letter of the name.
*   **Profile Management:**
    *   **displayName (Nickname):** Acts as the URL slug and can be edited inline. (Note: Changing it breaks the previous URL).
    *   **username/bio (Profile):** Name and intro can be edited anytime inline.
*   **Link List Management:**
    *   **Add/Delete:** Enter title and URL to create or delete links immediately.
    *   **Auto Icon:** Automatically display favicons via Google Favicon API upon entering a URL.
    *   **Exclusions:** No link activation toggle or drag-and-drop reordering.

### 3.3. Public Profile Page
*   **Profile Header:** Initial-based avatar centered at the top, followed by `username` and `bio`.
*   **Neobrutalism Style:** Strong color contrast, thick black borders, and hard shadow design.
*   **Sharing:** Provide a button to copy the current page URL to the clipboard.

---

## 4. Tech Stack & Data Model

| Category | Tech Stack | Remarks |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js (App Router) | |
| **Styling** | Vanilla CSS / Tailwind CSS | |
| **Backend** | Firebase (Firestore, Auth) | |
| **API** | Google Favicon API | For automatic icon generation |

### Data Model Structure (Firestore)
1. **Users (Collection)**
    *   `uid`: Unique Key (Document ID)
    *   `displayName`: URL Slug (Editable, Unique)
    *   `username`: Display Name (Editable)
    *   `bio`: Intro (Editable)
2. **Links (Sub-collection of a User)**
    *   Fields: `id`, `title`, `url`, `createdAt`
