# Joseph Rizk — portfolio website

A static, responsive English portfolio built from the supplied CV, reports and project images. No build step, dependencies or external fonts are required. The website works by opening `index.html` directly and is ready for GitHub Pages or Netlify.

## Files

- `index.html`: content, five project cards with expandable details, education, experience, skills and contact.
- `styles.css`: desktop and mobile styles.
- `script.js`: optional enhancements for direct project links and the footer year.
- `assets/`: CAD figures extracted from the Bachelor and FEM reports, the full Bachelor report and the original downloadable CV.
- `.nojekyll`: disables Jekyll processing on GitHub Pages.

## Preview

Open `index.html` in your browser. All content and expandable details work without JavaScript. Click a project photograph to see the full original image. Contact buttons open the visitor’s email or phone application; there is no form or backend.

## Netlify

1. Extract the ZIP.
2. Sign in to Netlify and open [Netlify Drop](https://app.netlify.com/drop).
3. Drag the `joseph-rizk-portfolio` folder containing `index.html` into the drop area.
4. Open the generated URL and choose a site name in Netlify if desired.
5. Use the resulting public URL on LinkedIn. To update, upload the revised folder to the same project’s deployment area.

This site requires no build command. If using a connected Git repository, publish the directory containing `index.html`.

Official instructions: [Netlify manual deployment](https://docs.netlify.com/deploy/create-deploys/).

## GitHub Pages

1. Create a GitHub repository and upload the contents of `joseph-rizk-portfolio` to its root, so `index.html`, `styles.css`, `script.js` and `assets/` are together.
2. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. Wait for GitHub Pages to finish deployment and open the URL shown in Settings → Pages.
5. Add that URL to LinkedIn. Future commits to the selected branch update the site.

Relative asset links support both a repository project URL and a custom domain. There are no client-side routes requiring redirects.

Official instructions: [Configure a GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Updating the content

Edit text in `index.html` and design variables at the start of `styles.css`. Replace the PDF at `assets/Joseph-Rizk-CV.pdf` to update the downloadable CV. The included CV is the supplied original; the suggested FEM wording is supplied separately and has not been inserted into that PDF.

The email, phone, city and education dates match the supplied CV. No LinkedIn profile URL was supplied, so none has been invented. Add a profile link to the contact section once you have the exact URL. Publishing the folder makes the included CV and contact information public.

The complete supplied Bachelor report is bundled for public viewing and download from the Formula Student project card. The other reports are not bundled. The CONTENT-NOTES.md file alongside the website folder explains evidence choices and source limitations.

## October 2026 project update

Scientific computing and control systems are one BA3 project. The robot card includes the CAD image and prototype photo. The BA3 input and output photos use SVG viewports to show the graphs without the surrounding interface. Original images remain in assets; adjust the graph SVG `viewBox` values in index.html to change the crop. The forest-wrench and robot descriptions incorporate Joseph’s supplied first-hand explanations.
