FilterBubble - You decide what you want to see!
================================
This Chrome extension allows you to filter out a list of words/names you don't want to see on webpages anymore. 


Overview
--------------------------

Everybody knows filter bubbles are dangerous. But they are only dangerous if others (or machines) decide what you have to see and what not. FilterBubble instead gives you back control over what you want to see. It filters the noise of the internet so you can again see the signal again. 

Features
--------------------------

* Configureable list of names, words or phrases to blacklist
* Attemps to remove the blacklisted words with a little collateral damage as possible

~~Installation (for Users)~~
--------------------------

~~Just install the extension from [the Chrome Web
Store](https://chrome.google.com/webstore/detail/jionadcjdpdikjmgfohlohnclocfaija)!~~

~~Then surf the web as normal without worrying about leaving your filter bubble.~~


Installation (for Developers)
-------------------------

Want to hack on FilterBubble?  Sweet!

Here's a how to to get the source of the Chrome Extension running in your environment.

1) Grab latest source
<pre>
git clone https://github.com/asmaier/FilterBubble
</pre>

2) Enable Chrome Extension in your Chrome install
<pre>
Open Chrome.
Navigate to Settings... Tools... Extensions.
Click + on "Developer mode"
Click "Load unpacked extensions..."
Navigate to directory you installed FilterBubble and click Open.
</pre>

3) Configuration
<pre>
Right click on the icon in the browser and click on Options.
Enter words to filter, one word/phrase per line
Click on Save
</pre>

4) Reload some webpage with your blacklisted words (or just google for them) and see them and related content magically disappear. You are now in your filter bubble!

Meta
-------------------------

* This project is inspired by and in parts based on
  * [Trump Blocker](https://chrome.google.com/webstore/detail/trump-blocker/nhmckipmafnikgjnaeadpngccggobaej)
  * [Trump Filter](https://github.com/RobSpectre/Trump-Filter)
  * [PokeGone](https://github.com/JamieFarrelly/PokeGone)
* This work is licensed under GPLv3.
