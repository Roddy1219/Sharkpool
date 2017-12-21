# Sharkpool Theme for UNOMP / NOMP

NOMP: https://github.com/zone117x/node-open-mining-portal
UNOMP: https://github.com/UNOMP/unified-node-open-mining-portal

**Installation**

_1)_ copy
	
	```
	assets
	pages
	index.html
	key.html
	```
	
in to UNOMP / NOMP website folder.

_2)_ edit libs/website.js

	change
	
	```
	app.use('/static', express.static('website/static'));
	```
	
	to
	
	```
	app.use('/assets', express.static('website/assets'));
	```