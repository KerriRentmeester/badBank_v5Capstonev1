

# **Project Name**
Bad Bank app - the 5th iteration: a Three Tier Bank 
(this version is a combo of version 4 (mod 27) and version 3 (Portfolio II)). I am starting with version 4 and adding version 3 components...testing along the way so I hopefully don't break it. 

** This version of my code: everything works locally. I am about to connect FireBase and MongoDB, so I want a version of this to be uploaded to GH now, to refer back to my code in case I break it!   12/13/23 KR

-- the rest of this README needs to be edited yet. --

# **Description**: 
The Three Tier Bank project, a three tier React app, initiates on the home page, with a welcome message and security warning. The first step would be to "Create Account" on its Register page or "Login" on its Login page. Once logged in, the user can "Deposit" or "Withdraw" or view his/her account "Balance." Unfortunately the account balance is not linked across pages at this time. On the final page, one can see "AllData" transactions.

The Three Tier Bank project will likely be deployed via Amazon Web Service S3 bucket and can be accessed here to see its capabilities: link coming soon.

This iteration of the project has outdated code, incompatible with the latest version of React node.js. I used node.js version 16.20.1 on my local machine to make it work.

The following Validation was employed:
* All submit buttons are disabled until all the fields have input.
* Email input fields on the Login and Create Account pages require correct email format, otherwise a warning will appear.
* Password input fields on the Login and Create Account pages require 8 or more characters.
* Both Deposit and Withdraw input fields require positive integers, otherwise a warning will appear.
* The Withdraw input cannot exceed the account balance, otherwise an overdraft warning will appear.

Some Features employed:
* When hovering over the NavBar, a title appears explaining what each page is/does. 
* Beware - Account Balance is NOT maintained across pages.
* Each page has a different color card/content to further distinguish its purpose.

The Three Tier Bank project is an example of the following skills and capabilities: routing, context, tracking state, event handling, and parent/child relationships. I employed Bootstrap and CSS for styling, as well as HTML5, JavaScript, and JSX. As such, this project is one component of my professional portfolio. This particular project is based off of a similar activity I worked on in September through December of 2023 from Modules 18, 19, 26, Portfolio II, and the Capstone Project in the MIT xPro via Emeritus bootcamp I was enrolled in called "Professional Certificate in Coding: Full Stack Development with MERN."

# **Dependencies**: 
The project relies on the following dependencies: ReactJS, Bootstrap, Babel, Express, NodeJS, MongoDB (note: I am using an outdated version: 3.6.2).

# **Usage**: 
To run my project on your machine, download the files onto your machine or clone the repo.

* Navigate to the root directory, above the public folder.
* Type terminal command: npm install
* Type terminal command: node index.js
* In browser, navigate to localhost:3000 to view app.

# **Support**: 
Please contact me via email at krentmeester@uwalumni.com.

# **Roadmap**: 
Future fixes or improvements that would be helpful to a user:

* Make the Deposit, Withdraw, and AllData pages only visible upon logging in.
* Track the account balance across all pages 
* Track the account balance even after logging out
* Once logged in, transport the user to an account page where all accounts are visible
* Once an account is created, transport the user to an account page where all accounts are visible
* Remove the AllData page
* NavBar tab is highlighted for the active page
* Add additional security - biometrics, or two-factor authentication for authentication (instead of only username & password).

# **License**: 
MIT License

Copyright (c) 2023 Kerri Rentmeester

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.