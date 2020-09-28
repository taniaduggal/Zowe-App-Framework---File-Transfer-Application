# Zowe File-Transfer-Application

### The main goal of the project is to develop File-Transfer-App plugin on top of zlux and it engaged zss components which were required the file-transfer app to work.

## File-Transfer-Application (Zowe-Desktop-Application)
https://github.com/zowe/file-transfer-app

1. Integrate file explorer (file-tree) to file transfer application (Explore and perform various actions on the files persisted in mainframe).
  * This will give the user to view the file-structure of the mainframe as a tree. 
  * Wll give the ability to tag the files.
  * Change the ownership(chmod) of files and folders on the fly.
  * Cut & Copy & Paste files feature.
  * View datasets
  * Search files/datasets
  * Delete datasets/files
  
https://github.com/zowe/file-transfer-app/pull/53

2. Enable search history in file explorer (file-tree) for the scope of user.
https://github.com/zowe/file-transfer-app/pull/50

3. Add the application scan for the plugin configs to take actions.
https://github.com/zowe/file-transfer-app/pull/49

4. Main changes for the File-Transfer App
    * Enhanced startup time and build time for the app.
    * Remove conflicting carbon styles and added webpack rule to load the min.css which makes things quite simple and no need to load scss from all components.
    * Add the support of stream-saver which helps to download larger files from the File-Transfer application which are persisted in the mainframe file-systems.
    * Easy to handle enviornment varaible configurations.
    * More userfriendly ui with notifications related to the actions and download actions and state changes are displayed in realtime.
    * Add the functionality to download larger files. 
      - During download, user can cancel Donwload browser will automatically abort the download.
      - Queue downloads on the user scope.
      - Handle the priority of the downloads. (Low/High Priority) 
      - Maintains 3 states :- In-Progress, Cancel, Completed downloads 
      - User can define the no of In-Progress downloads can be queued in the application
      - User can define the no of Cancel, Completed download to maintain in the history of the application
      - All the data-tables capabilities are provided search sort in the cancel/inprogress/completed lists
      - Track the download progress of an inprogress download.
      - As the default behaviour when the application is getting closed all downloads in-progress/queued will be canceled and will be able to view in then next startup in the cancel section.
    * Files in mainframe are stored in either EBCDIC, ASCII or UTF-8 encoding.  When downloading files it's easier to download UTF-8 files it will be automatically converetd. But EBCDIC and ASCII we have to define what is the source and target encoding types of the files should be in order to downloads to work.
In file-transfer application we have addressed that in the UI with an easy user-friendly way.
    * Finally download contents in folder as a whole. In Fil-transfer app defined a separate UI workflow which will  inform user regarding the folder download and download content as .tar.gz file. This was done in .tar.gz compression since it requires less compute power than creating a .zip folder in mainframe. Compute power is always a critical factor to think since there are lot of ongoing tasks in the mainframe in a given time.
 https://github.com/zowe/file-transfer-app/pull/54
