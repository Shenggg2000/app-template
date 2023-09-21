# Template

Welcome to the React Native Template with Environment Configuration! We're thrilled to introduce you to a streamlined way to kickstart your React Native projects, tailored for different Software Development Life Cycle (SDLC) phases. Whether you're a seasoned developer or just getting started, this template is designed to simplify your workflow and make your app development process smoother and more efficient.

## **Key Features**

- **Environment Isolation:** Easily switch between different SDLC phases by selecting the appropriate environment file. No more manual configuration changes – simply update your environment file, and you're ready to go.
- **Effortless Setup:** Get started quickly with our template by cloning the repository and following the straightforward setup instructions. We've done the heavy lifting so you can focus on building your app.
- **********************************NPM scripts ready:********************************** This template comes with pre-configured npm scripts that simplify common development tasks such as building in different environments and running your React Native application.

## Libraries Used

- **[React Navigation](https://reactnavigation.org/) -** Routing and navigation for Expo and React Native apps
- **[Async Storage](https://react-native-async-storage.github.io/async-storage/) -** Data storage system for React Native
- **[Axios](https://axios-http.com/docs/intro) -** Promise based HTTP client for the browser and node.js
- **[Native Base](https://docs.nativebase.io/)** - Accessible, utility-first component library for Android, iOS and Web
- **[React Native Config](https://github.com/luggit/react-native-config) -** Module to expose config variables to your javascript code in React Native
- **[React Native Rename](https://github.com/junedomingo/react-native-rename) -** Rename react-native app with just one command
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) -** Customizable Icons for React Native
- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) -** A small, fast, and scalable bearbones state management solution

## Table of Contents

1. [Getting Started](#getting-started)
2. [Custom Fonts](#custom-fonts)
3. [Firebase Cloud Messaging (FCM) Setup](#firebase-cloud-messaging-fcm-setup)
4. [CodePush Setup](#codepush-setup)

## Getting Started

Follow these steps to set up and run your React Native project with our template:

### **Prerequisites**

Before you begin, ensure you have the following prerequisites installed:

- **[Node.js](https://nodejs.org/en/)**
- **[Yarn](https://classic.yarnpkg.com/en/docs/install)**
- **[Xcode](https://developer.apple.com/xcode/)** (for iOS development)

### **Step 1: Clone the Repository**

Clone the template repository to your local machine using the following command:

```bash
$ git clone https://github.com/Shenggg2000/app-template.git
```

### **Step 2: Navigate to the Project Folder**

Move into the project folder using the following command:

```bash
cd app-template
```

### **Step 3: Configure Environment Variables**

Before proceeding, configure your environment variables for each SDLC phase by following these steps:

1. In the root directory of your project, locate the following files:
    - **`.env.example.dev`**
    - **`.env.example.qa`**
    - **`.env.example.uat`**
    - **`.env.example.prod`**
2. Rename these files as follows:
    - **`.env.dev`**
    - **`.env.qa`**
    - **`.env.uat`**
    - **`.env.prod`**
3. Open each of the renamed **`.env`** files (**`.env.dev`**, **`.env.qa`**, **`.env.uat`**, **`.env.prod`**) and provide the specific environment variables and values relevant to each SDLC phase.

### **Step 4: Install Dependencies**

Install project dependencies using Yarn:

```bash
yarn install
```

### **Step 5: Rename the App**

Use the following command to rename the app to your preferred name. Replace **`"yourappname"`** with your desired app name:

```bash
npx react-native-rename "yourappname" --skipGitStatusCheck --androidBundleID "com.yourappname"
```

### **Step 6 (Optional): Update App Name (If Needed)**

If you want the app name to include the environment name, follow these steps:

******iOS******

- Navigate to **`ios/yourappname/Info.plist`**.
- Update **CFBundleDisplayName** in line 8 from:

```xml
<key>CFBundleDisplayName</key>
<string>yourappname</string>
```

to:

```xml
<key>CFBundleDisplayName</key>
<string>${APP_NAME}</string>
```

**************Android**************

- Navigate to **`android/app/src/main/res/values/strings.xml`**.
- Update **app_name** in line 2 from:

```xml
<string name="app_name">yourappname</string>
```

to:

```xml
<string name="app_name">@string/APP_NAME</string>
```

This step is optional and should only be performed if you want to include the environment name in your app's display name.

### **Step 7: Install Pod Dependencies**

Install pod dependencies for iOS by running:

```bash
npx pod-install ios
```

### **Step 8: Start Metro Server**

Start the Metro server by running:

```bash
yarn run start
```

### **Step 9: Build and Run the App**

Open another terminal window and build the project in the development environment:

```bash
yarn run ios
```

Now, your React Native project is up and running with the configured environment settings. Happy coding!

## Custom Fonts

Enhance the visual appeal of your React Native project by adding custom fonts. Follow these steps to integrate your preferred font family into the template:

### **Step 1: Download Font Family**

Download your preferred font family from Google Fonts or other font providers. Ensure that you have the necessary .ttf font files.

### **Step 2: Replace Default Fonts**

Navigate to the **`assets/fonts`** directory in your project and replace the default .ttf files with your downloaded font family .ttf files.

### **Step 3: Link Font Assets**

Open your terminal in the root directory of your project and run the following command to link the font assets:

```bash
npx react-native-asset
```

### **Step 4: Configure Fonts for iOS**

For iOS, follow these additional steps:

- Open Xcode and navigate to your project's **`ios`** folder.
- In Xcode, select all the font .ttf files that you placed in the **`assets/fonts`** directory under the "Resources" folder.
- In the right panel, tick the checkbox for all four targets to ensure that the fonts are included in the build.

![docs-4.jpeg](./assets/images/docs-4.jpeg)

### **Step 5: Update Font Configuration**

Navigate to **`src/theme/config.ts`** in your project and locate the default font family name. Change it to your preferred font family name.

### **Step 6: Start the Metro Server**

Start the Metro server by running the following command:

```bash
yarn run start
```

### **Step 7: Rebuild the Project**

Open another terminal window and rebuild the project to apply the font changes:

```bash
yarn run ios
```

Your React Native project is now configured with your custom font family, giving your app a unique and personalized look. Enjoy the enhanced typography in your application!

## **Firebase Cloud Messaging (FCM) Setup**

To enable Firebase Cloud Messaging (FCM) for your React Native project, follow these simple steps:

### **Step 1: Create a New Firebase Project**

1. Visit the **[Firebase Console](https://console.firebase.google.com/)**.
2. Click on "Add Project" to create a new Firebase project. Give it a name that reflects your app's purpose and click "Continue."

### **Step 2: Add Your App to the Firebase Project**

**For Android:**

1. After creating the project, click on "Add app" from the project dashboard.
2. Select the Android platform.
3. Follow the setup instructions, and when prompted, download the **`google-services.json`** file.
    - Place the downloaded **`google-services.json`** file in the **`android/app`** directory of your React Native project.
    

**For iOS:**

1. After creating the project, click on "Add app" from the project dashboard.
2. Select the iOS platform.
3. Follow the setup instructions, and when prompted, download the **`GoogleServices-Info.plist`** file.
    - Open your Xcode project.
    - Right-click on the **`yourappname`** folder and select "Add Files to 'yourappname'."
    - Select the downloaded **`GoogleServices-Info.plist`** file.
    - Make sure all the targets and "Copy items if needed" are checked.

With these simple steps, your React Native app is now set up to use Firebase Cloud Messaging (FCM) for push notifications and other messaging features. You can now use FCM to engage with your users and send real-time updates.

## **CodePush Setup**

What is CodePush? CodePush is a cloud-based service by Microsoft App Center that allows you to easily distribute and update your React Native app's JavaScript bundle and assets to your users' devices without requiring an App Store submission. It's a powerful tool for delivering over-the-air updates to your app. 

Learn more about CodePush on the **[official website](https://microsoft.github.io/code-push/)**.

This template simplifies the CodePush setup process for React Native projects. Developers only need to change the secret and development key in the environment variables to get started. If you're new to CodePush, follow these initial steps:

### **Prerequisites**

1. **Register for AppCenter Account:** If you haven't already, register for an **[AppCenter account](https://appcenter.ms/)**. AppCenter is the platform that hosts CodePush.
2. **Install AppCenter CLI:** Set up the AppCenter CLI on your development device by following the installation instructions provided in the **[AppCenter CLI documentation](https://docs.microsoft.com/en-us/appcenter/cli/)**.

### **Create a New Project in AppCenter**

Once you've completed the initial setup, follow these steps to create a new project in AppCenter and obtain the necessary keys:

1. **Add a New App in AppCenter:**
    - Log in to your AppCenter account.
    - Click on "Add new app" with the following settings:
        - OS: Android/iOS
        - Platform: React Native
2. **Obtain the App Secret:**
    - Once the app is created, you'll find the app secret on the "Overview" tab of your project.
3. **Create a Standard Deployment:**
    - Navigate to "Distribute" > "CodePush" within your project.
    - Click on "Create a standard deployment."
4. **Get the Deployment Key:**
    - Click on the 'wrench' icon on the top right corner of your CodePush deployment to access the deployment settings. You'll find the deployment key here.
5. **Update Environment Variables:**
    - Replace both the 'secret' and 'deployment key' in your **`.env`** file with the values you obtained from AppCenter.
    

With these steps, you've successfully set up CodePush for your React Native project. You can now leverage CodePush to push updates to your app quickly and efficiently.

## Biometric Authentication