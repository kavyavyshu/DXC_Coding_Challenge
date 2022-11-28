# Steps to install and run the node js file in windows:

1. Donwload and install latest version of node js (for windows OS) : https://nodejs.org/en/download/
2. Open the installer from downloaded nodejs package and proceed for installation

    <img width="796" alt="image" src="https://user-images.githubusercontent.com/119288761/204225462-3c2e153f-76cb-4592-bf11-2a6ab0c3e15e.png">

3. Once nodejs is successfully installed, set the PATH in environment variables. PATH = C:\Program Files\nodejs

    <img width="365" alt="image" src="https://user-images.githubusercontent.com/119288761/204230071-e040463f-f758-4483-9e7d-423c8040a529.png">

4. Test for successful installation :
	a. Open Anaconda Prompt/gitbash/cmd and execute : node --version
	b. It should display the nodejs version if the installation was successful
      
     <img width="402" alt="image" src="https://user-images.githubusercontent.com/119288761/204229377-f8b9ba3c-96d0-4465-8111-3589294abe1d.png">

5. Navigate to the path where the fibo.js file is present
6. Run the fibo.js file with arguments using command: node fibo.js 8

	<img width="428" alt="image" src="https://user-images.githubusercontent.com/119288761/204296227-4d6c0f9a-b651-446a-a2b9-76dba54b9e32.png">

# Steps to run unit test cases using jest:

1. Install Jest module using command: npm install -- save-dev jest   
	- If the above comment throws error try executing : npm install
	
	<img width="473" alt="image" src="https://user-images.githubusercontent.com/119288761/204296975-6e3dd635-fd39-4036-8fba-f4a8b09468b5.png">
	
2. Run the unit test cases using command: npm run test

	<img width="425" alt="image" src="https://user-images.githubusercontent.com/119288761/204317236-90dcc266-b897-4da1-86b9-9ee3bfd6aecd.png">
