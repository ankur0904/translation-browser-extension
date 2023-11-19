[a.webm](https://github.com/ankur0904/translation-browser-extension/assets/98346896/a7bbeacc-0bd3-46b0-b5bd-bdc7fb877432)

# Setup the project locally

## Requirements for Local Installation

- [NodeJS](https://nodejs.org/en/) *Recommended: (v18.18.0)*
- [pnpm](https://pnpm.io/) *Recommended: (v8.10.0)*
- [Git](https://git-scm.com/downloads) *Version Control*

## Local Installation

1. **Firstly Clone the repository**

    ```bash
    git clone https://github.com/ankur0904/translation-browser-extension.git
    ```

    > Here the project is divided into two parts:
    > - **API** - Backend of the extension.
    > - **Extension** - Frontend of the extension.

2. **Install the dependencies**

    ```bash
    cd API &&  pnpm install && cd ../Extension && pnpm install
    ```

    > Here we are installing the dependencies of both the parts.

3. Set up the environment variable.
    - Create a `.env.local` file in the root directory of the `API` project.
    - Get the API Key from [here](https://huggingface.co/)
    - And paste the value like this:

    ```
        HUGGING_FACE_API_KEY=<API_KEY>
    ```

4. **Run the Extension**

    > Make sure you are in the root of the `Browser` directory.

    ```bash
    pnpm dev
    ```

5. **Start the API Server**

    > Make sure you are in the root of the `API` directory.

    ```bash
    pnpm dev
    ```

6. **Load the extension in your browser for testing.**

    - **Chrome**
        1. Open Chrome browser.
        2. Go to `chrome://extensions/`
        3. Enable `Developer mode` in the top right corner.
        4. Click on `Load unpacked` button in the top left corner.
        5. Select the `build/chrome-mv3-dev` folder in the cloned repository.

7. **Done 🎉**

*Now you can use the extension in your browser 😊😊😊*

