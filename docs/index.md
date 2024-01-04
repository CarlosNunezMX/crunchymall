# CrunchyMall
CrunchyMall is a custom server for WiiU's Crunchyroll App. Where I trying to recreate their API
for self usage, for this version I'm making an AnimeFLV Wrapper.

## What do I need.
I recommend you add SSL Certificates to your Crunchyroll App, and install the
patch with removing Nintendo Network Verification.

### Non-Optional
+ Nintendo Web Framework (Version 1.9.0)
    
    I don't know why, but when I put that files, the app was opened without
    errors
+ SDCaffine in Aroma or Tiramisu
    I recommend it for more stability but it could be used in Mocha or Haxchi

## API Documentation
Make your own wrapper, here is a few things whose you would know before start coding

**Typescript Declarations**
- [Anime.d.ts](/docs/typescript/Anime.d.ts) - Documentation about list_series.json
- [Search.d.ts](/docs/typescript/Search.d.ts) - Documentation about search.json
- [fields.d.ts](/docs/typescript/fields.d.ts) - Documentation about all fields possible in a request
- [Translations.d.ts](/docs/typescript/Translations.d.ts) - Documentation about translations, and all fields there
  - [Examples/Translations.json](/docs/typescript/examples/Translations.json) - Example with original translations.
- [Version.d.ts](/docs/typescript/Version.d.ts) - This route is visited for getting some info for decide if start to download files from remote server
- [StartSession.d.ts](/docs/typescript/StartSession.d.ts) - This route is for discover who is the user.
- [list_locales](/docs/typescript/Info.d.ts) - Things what Wii U Request for screenshots, and some anime details.

***Pending declarations***
- ***log_first_launch*** - I think it is when you open crunchyroll app for first time
- ***log_user_search*** - Same up
- [***Info***](/docs/typescript/Info.d.ts) - I've not all data for it