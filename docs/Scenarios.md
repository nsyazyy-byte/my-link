# 👨‍💻 MyLink Detailed User Scenarios

This document describes the major user journeys based on core features like **Google Login, Inline Editing, and Auto Favicon Integration**.

---

## 1. New User Signup & Auto Onboarding
**User:** 'Kim Coding', a developer wanting to promote a side project.

1.  **Visit:** Attracted by the bold design, visiting the MyLink main page.
2.  **Quick Signup:** Clicking 'Start in 3 seconds with Google' and selecting a Google account (`kcoding@gmail.com`).
3.  **Auto Profile Generation:** System automatically sets `kcoding` as the `displayName` (URL slug) and `Kim Coding` as the `username`.
4.  **Dashboard Entry:** Entering the admin dashboard immediately. Sees "Your link address: `mylink.site/kcoding`" and a simple avatar with the letter 'K'.

---

## 2. Profile Personalization (Inline Editing & Nickname Change)
**User:** 'Kim Coding' wanting to change the default nickname.

1.  **Nickname Edit:** Clicks the nickname text on the dashboard. It turns into an input field. Enters `kcoding-dev` and presses Enter.
2.  **Real-time URL Change:** Confirms the link is now `mylink.site/kcoding-dev` immediately.
3.  **Profile Edit:** Clicks the name 'Kim Coding' and changes it to 'Passionate Developer Kim Coding'. The avatar changes to 'P'. Adds a bio: "I write code to make the world better."

---

## 3. Link Content Setup (Google Favicon API Automation)
**User:** 'Kim Coding' registering a GitHub and blog.

1.  **GitHub Link:** Clicks 'Add Link'. Enters 'My GitHub' as the title and `github.com/kcoding` as the URL.
2.  **Auto Icon Check:** Confirms the GitHub logo favicon is rendered automatically next to the link upon entry.
3.  **Blog Link:** Adds a Tistory blog link. The Tistory icon is automatically attached.
4.  **Inline Edit:** Clicks the blog title text in the list to change it to 'Coding Diary' immediately.
5.  **Delete Link:** Clicks the 'X' button next to a test link to remove it instantly.

---

## 4. Final Result Sharing & Visitor Experience (Public View)
**User:** 'Park Colleague' visiting Kim Coding's page.

1.  **Click URL:** Clicks the shared `mylink.site/kcoding-dev` link.
2.  **Design View:** Enjoys the neobrutalism design optimized for mobile, with high contrast and bold button styles.
3.  **Interaction:** Enjoys the hard shadow animation when hovering or touching buttons.
4.  **Navigation:** Clicks 'My GitHub' and navigates to the GitHub page smoothly.
5.  **Copy Link:** Kim Coding clicks 'Copy Link' on the dashboard to register the URL in their Instagram profile easily.

---

## 5. Ongoing Maintenance & Security
**User:** 'Kim Coding' returning to update links.

1.  **Re-entry:** Returns to the service. Google account info is maintained, so enters the dashboard immediately with one click.
2.  **Update Info:** Quickly edits existing blog info or adds new portfolio links via inline editing.
3.  **Security:** Feels safe knowing all edits are only possible within the authenticated Google session.
