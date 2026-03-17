# SDLC  (CMS application, Content Management System, ecom, blog, porto, news, ngion, MIS, hotel, chat )
  - Software Development Lifecycle
  1. Requirement Gathering and Analysis
    - Ecom- CMS
      - Product 
      - Category
      - Brand 
      - Order, 
      - users
      - payments
  2. Designing
    - Web design(Designer)
  3. Development 
    - Architecture 
      - Folder and File structure 
      - ```text
          /src/
            assets/
              images/
              css/
              ...
            components/
              ui/
                card/
                  SingleCard
              common/
                course/
                  SingleCourseComponent
                    -> card
              header/
                filesFor Header
              footer/
              .....
            pages/  
              on any url change-> we need a new view 
              auth/
                login/
                register/
                active/
                forget-password/
                reset-password/

      ```


# Tailwind Installation Step
  - Run `pnpm i tailwindcss @tailwindcss/vite`
  - Add `import tailwindcss from "@tailwindcss/vite"` at top of `vite.config.ts`
  - Add `tailwindcss()` inside `plugins: [{ ...., tailwindcss()}]` in `vite.config.ts`
  - import css at your global css `@import "tailwindcss";` in your `./assets/css/global.css`
  - import global at main.tsx  `import "./assets/css/global.css"`
  - Use css at your component 
  - Restart your dev server `pnpm dev`