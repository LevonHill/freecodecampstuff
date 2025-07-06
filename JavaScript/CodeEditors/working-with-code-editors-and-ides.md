<!-- @format -->

In these lecture videos, you will learn how to work with code editors and IDEs. You will learn various concepts about the most popular code editor, VS Code such as its installation, how to create a project in it, keyboard shortcuts, and extensions.

Lesson 1
What is a code editor and IDE?

You might think these are the same thing, but not quite. A code editor is any application that allows you to edit code files. An IDE, or Integrated Development Environment, is a full application that allows you to compile, run, and debug your code while you edit it.

Perhaps some examples might be helpful.

First, let's consider a few popular IDEs. Visual Studio is an integrated development environment by Microsoft that provides a comprehensive suite of tools for building, debugging, and deploying applications across various platforms.

Another IDE is XCode. Xcode is an integrated development environment by Apple designed for creating, coding, and debugging applications for macOS, iOS, watchOS, and tvOS.

And another IDE would be Android Studio. Android Studio is an integrated development environment by Google specifically designed for building, debugging, and testing Android applications.

Those are just a few examples of IDEs. Now, let's take a look at a few popular code editors.

Visual Studio Code is a lightweight, open-source code editor by Microsoft that supports a wide range of programming languages and provides features like debugging, syntax highlighting, and version control through extensions.

Another popular editor would be Sublime Text. Sublime Text is a fast, versatile text editor known for its sleek interface, powerful features, and support for a wide range of programming languages through customizable syntax highlighting and plugins.

And another one is Notepad++. This is a free, open-source, text and source code editor for Windows that offers syntax highlighting, code folding, and a range of plugins to enhance productivity and customization.

You may have noticed how the code editors focus primarily on the text contents of the file, where the IDEs expose various tools to manage your code.

These examples are all local programs you can run on your computer, but there are also cloud-based editors that you can use.

A cloud-based editor is an online tool that allows users to write, edit, and manage code or text directly through a web browser without needing to install software locally.

Let's take a look at a few cloud-based editors.

Replit is an online platform that provides a collaborative environment for coding, allowing users to write, run, and share code in various programming languages directly from a web browser.

Another popular cloud-based editor is GitHub Codespaces. This is a cloud-based development environment that provides instant access to a fully-configured code editor and development tools directly from GitHub, enabling seamless coding and collaboration.

And another one is Gitpod. Gitpod is a cloud-based development environment that integrates with GitHub and GitLab, offering instant, customizable workspaces for coding, building, and debugging directly from your browser.

And there are many more options. Some options, such as Visual Studio Code, are highly extensible and can work with multiple different project types and languages. Other options might be specifically tailored to a small subset of languages or project types.

The application you use might be different for specific projects. You should explore the options to see what will work best for your needs.

Lesson 2

How to install Visual Studio Code onto your computer.

To install VS Code, you'll want to visit their website to get the appropriate installer for your operating system. Make sure you visit the VS Code website, and not the Visual Studio website.

For Windows, you can download an EXE installer. Once you've downloaded it, run the file and the setup wizard will take you through the installation process.

For Mac, you can download a zip archive which contains a .app that you can run. You can also install VS Code via homebrew.

Open up the Terminal app on your Mac and run the following command:

brew install --cask visual-studio-code
On Linux, you can download a .deb or .rpm file directly. Once you have it installed, you can use the appropriate executable, or CLI command (typically code), to launch the application. And now you're ready to code.

Lesson 3

How do you create a project and run your code locally in VS Code?

To get started, you should know that VS Code considers projects to be "workspaces". The workspace is whichever directory you opened in VS Code.

To begin, you will need to use a command line interface to create a new directory for your new project. A directory is another name for the folder.

Command-line interfaces, or CLI for short, allow you to interact with your operating system through text-based commands. You will learn more about these tools in future lecture videos.

If you are on Windows, you can use the Command Prompt or PowerShell. If you are on a Mac, you can open up your Terminal app.

Once the command line is open, navigate to the home directory by typing in the cd ~ command and hitting enter on your keyboard. Then type in the mkdir my-project command and hit enter. mkdir, or "make directory" is the command used to create a new directory. You should then open your new directory with VS Code.

There are also some other graphical ways to create a new directory.

Depending on your operating system, you might have a context menu (or right-click option) to open VS Code directly from your file explorer. You could also choose to double-click on the VS Code application. If you feel comfortable with the command line you can run the command code /path/to/folder.

Once it's open, you should see a new blank workspace.

To create a new file, click on the File menu at the top-left corner and select New File.... Then name your file index.html and click on Save.

Now you should see your new file in the explorer tab. Try adding some HTML to your index.html file.

Now you might be tempted to open the HTML file in your browser directly. While that can work, it can also lead to all sorts of unexpected bugs, such as CSS not loading properly.

Instead, you should put your HTML file behind a proper web server. That can sound like an intimidating task if you are new to coding, but there's actually a way to do this right from VS Code.

You'll need to grab the Live Server extension first, which is available for free in the marketplace.

Click on the extensions tab in the left hand corner and type in Live Server in the search bar.

Once you have this installed, you should see a Go live button in your status bar. Make sure you have your HTML file open, and then click it.

Your new page should open automatically in a new tab in the browser. If it doesn't then you can go directly to http://localhost:5500/

Congratulations! You've now set up your very own project in VS Code, and can view your changes with live server.

Lesson 4

What are several useful keyboard shortcuts for maximizing productivity in VS Code?

You're likely already familiar with some of the basic shortcuts, which are inherited from your operating system. Shortcuts like Ctrl + S to save, Ctrl + C to copy, and Ctrl + V to paste all work in VS Code.

But there's a few that are application specific and can still level up your productivity. It's worth noting that some of these shortcuts may differ by operating system.

For example, Shift + Alt + F will run your configured formatter (such as prettier, for a JavaScript project) on the currently opened file.

Or Ctrl + Shift + F (Windows), or Cmd + Shift + F (Mac), to search the text contents of all the files in your workspace. Then Ctrl + Shift + H (Windows), or Cmd + Shift + H (Mac), if you want to run a find-and-replace.

If you need to remove a line, Ctrl + Shift + K (Windows), or Cmd + Shift + K (Mac), will delete it.

Need some extra room for all your code? Ctrl + B (Windows), or Cmd + B (Mac), will hide the sidebar - which has the file list and extensions menu.

Or maybe you just can't see your code? Ctrl + plus (Windows), or Cmd + plus (Mac), will increase the scaling of the editor, and Ctrl + minus (Windows), or Cmd + minus (Mac), will decrease it.

Finally, if you forget any of these shortcuts, you always have Ctrl + Shift + P (Windows), or Cmd + Shift + P (Mac), which opens the command palette for you to select whatever you may need.

With this knowledge, and maybe a little practice, you are well on your way to becoming a VS Code power user.

Lesson 5

What are some good VS Code extensions you can use in your editor?

Better Comments is an extension that offers special highlighting for specific code comments. For example, it will call out "TODO" comments, as well as syntax to indicate questions or warnings.

Code Spell Checker offers indication when you have spelled something incorrectly in your code. Because it is designed for code files, it will account for things like camel case.

Error Lens will help you catch any highlighted errors in your code. Rather than having to rely on the underline that VS Code shows by default, this extension highlights the entire line and displays the error message.

Indent Rainbow adds color to your different levels of indentation. In combination with VS Code's native bracket pair colorization, this can dramatically help identify what scope your code is in.

Or maybe you're looking for something a bit more practical? Consider an AI assistant, like GitHub Copilot or Tabnine, to offer you inline suggestions as you are writing your code.

An icon pack, such as VS Code Great Icons, can help make your file tree cleaner and easier to parse at a glance. And an extension like Colorize can help you understand the values in your CSS properties.

You'll also want language-specific extensions for your projects. If you are using JavaScript, you will likely want ESLint and Prettier to lint and format your code. If you are using TypeScript, you might want Pretty Typescript Errors for easier to read messages.

Finally, you can also have a bit of fun with your editor. VS Code Pets offers configurable virtual pets to keep you company while you squash some bugs.

Power Mode will create flashy effects when you achieve a high enough "combo" by writing more code.

Discord Presence will let you show off what you're working on to all of your friends.

And there are so many more extensions out there. Feel free to explore the extension marketplace and see what works best for you.
