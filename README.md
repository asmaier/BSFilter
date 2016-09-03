PokeGone - Gotta block 'em all!
================================
A Chrome extension that removes Pokemon from the Internet.


Overview
--------------------------

All of a sudden, a new mobile app called Pokemon Go got extremely popular ([read about it on the Wall Street Journal](http://www.wsj.com/articles/pokemon-chasing-investors-send-nintendo-shares-soaring-1468228206)!). Because of this, the internet is full of people talking about all things Pokemon - which can be a little annoying.

PokeGone removes Pokemon Go references from the internet so you can get to normal watching funny cat GIFs.


Features
--------------------------

* Detects instances of Pokemon GO on web pages.
* Attempts to identify semantically sections of the page likely to contain Pokemon Go reference and removes them from the page.
* Sensitivity settings to customize the aggressiveness of the filter - remove single references, chunks or the entire page.


Media Attention
--------------------------
After I posted about the extension on [Product Hunt](https://www.producthunt.com/tech/pokegone) things got a little crazy. From getting asked to go on radio which I declined!) in Canada and America, being in some printed newspapers, to even ABC News doing a small piece on the extension. Oh, and random messages from Pokemon fans going mad at me. Here are just some of the media attention it got:

[ABC News (TV)](http://abcnews.go.com/WNN/video/pokegone-chrome-extension-40568608)

[Huffington Post](http://www.huffingtonpost.com/entry/if-you-hate-fun-and-pokemon-pokegone-is-the-chrome-extension-you-need_us_57863b80e4b08608d33246a8)

[Daily Mail](http://www.dailymail.co.uk/sciencetech/article-3689264/Don-t-watch-catch-em-PokeGone-plugin-blocks-mention-Pok-mon-browsing.html)

[The Independent](http://www.independent.co.uk/life-style/gadgets-and-tech/gaming/pokemon-go-google-chrome-extension-pokegone-block-content-a7136461.html)

[CNET](http://www.cnet.com/uk/news/sick-of-pokemon-theres-a-chrome-extension-for-that/)

[Venture Beat](http://venturebeat.com/2016/07/13/wish-pokemon-go-would-go-away-new-pokegone-chrome-extension-will-block-pokemon-content-for-you/)

To see the hundreds (or maybe even thousands) of other articles post about it, see the [Google search](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=pokegone&start=0) for Pokegone.

Installation (for Users)
--------------------------

Just install the extension from [the Chrome Web
Store](https://chrome.google.com/webstore/detail/jionadcjdpdikjmgfohlohnclocfaija)!

Then surf the web as normal without worrying about bumping in to adults going mad about Pokemon.


Installation (for Developers)
-------------------------

Firstly, special thanks to Rob Spectre who made the [Trump Filter](https://github.com/RobSpectre/Trump-Filter)! Open Source (which this extension is completely based off).

Want to hack on PokeGone?  Sweet!

Here's a how to to get the source of the Chrome Extension running in your environment.

1) Grab latest source
<pre>
git clone https://github.com/JamieFarrelly/PokeGone
</pre>

2) Enable Chrome Extension in your Chrome install
<pre>
Open Chrome.
Navigate to Settings... Tools... Extensions.
Click + on "Developer mode"
Click "Load unpacked extensions..."
Navigate to directory you installed PokeGone and click Open.
Chuckle to self as you reload this page and significant chunks of it suddenly disappear.
</pre>

3) Make the world a safer place.


Meta
-------------------------

* Special thanks to [Rob Spectre](http://brooklynhacker.com) since he done all of the hard work, I just hit find & replace.
* This work is licensed under GPLv3.
