# Node Portfolio Site 

Create a portfolio site to showcase the great projects you've built. The site will contain a modern landing page, an about page where you'll have a chance to share contact info, practice your elevator pitch, and a series of project pages to show off and detail at least your first five projects from this Techdegree.

## Project Instructions 

**Set up a new Express project**

**Create an Images folder in your directory to store your images**

* Add a profile pic of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.

* Take screenshots of your projects. You will need at least two screenshots for each project.
    * A main shot for the landing page which should be a square image that can display well at 550px by 550px.
    * Between one and three additional images that can be any dimensions you want, but work well in this project as landscape images that present well at 1200px by 550px.

**Add your project data to your directory**

* Create a data.json file at the root of your directory

* The recommended structure for your JSON is to create an object literal that contains a single property called `projects`. The value of projects is an array containing an object for each project you wish to include in your portfolio.

* Each project object should contain the following properties:

    * `id` - give each project a unique id, which can just be a single digit number starting at 0 for the first project, 1 for the second project, etc.
    
    * `project_name`

	* `description`

	* `technologies` - an array of strings containing a list of the technologies used in the project

	* `live_link` - link to the live version of the project

	* `github_link` - link to the GitHub repo

	* `image_urls` - an array of strings containing file paths from the views folder to the images themselves. You'll need a main image to be shown on the landing page, and three images to be shown on the project page.

**Handle Errors**

* If a user navigates to a non-existent route, or if a request for a resource fails for whatever reason, your app should handle the error in a user friendly way.

* Add an error handler to app.js that sets the error message to a user friendly message, and sets the status code.

* Log out a user friendly message to the console when the app is pointed at a URL that doesn't exist as a route in the app, such as /error/error.

**Layout, CSS and styles**

* The layout of the finished project should match the provided mockups.

* Without affecting the layout, consider making adjustments to things like the color, background color, fonts, shadows, transitions and animations to make this project your own.

* You can even add additional assets like more images or a even a customized logo to the header. If you do so, just make sure your changes work on the mobile layout before dialing them in on the desktop layout.

**Note:** Feel free to add extra projects to this portfolio if you have them to show off.


## Extra Credit

**Customize the package.json file**

* Set up your package.json file so that running npm start will run the app.

**Use error handling middleware to render a Pug template**

* Create a new Pug template in the `views` folder and name it `error.pug`. This Pug file should extend the layout, be set to block content, and display the `error.message`, `error.status`, and `error.stack` properties.

* When the request URL is for a non-existent route, the `error.pug` template should be displayed in the browser along with the following properties:
    * `error.message`
    * `error.status`
    * `error.stack`

**Customize the style**

* Change or add at least three of the following to make this project your own:
    * color
    * background color
    * font
    * box or text shadows
    * transitions or animations
    * add a logo

* Your can either add your changes to the end of the CSS file or add your own and link it in the head of the layout.pugfile, below the other CSS links.

* Document your style changes in your README.md file and the project submission notes.

* Do not alter the layout or position of the important elements on the page.


## Styling Customizations

**Disabled button styling**

Disabled buttons have a gray background and do not respond to hover triggers.

**Site Color Themes**

Changed site color themes (background, text color, link color, etc.)



**Completed:** N/A    
**Grade:** N/A