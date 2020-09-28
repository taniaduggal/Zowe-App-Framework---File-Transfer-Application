# Zowe File-Transfer-Application

### The main goal of the project is to develop File-Transfer-App plugin on top of Zlux and develop the file-api's & data-set-api's in ZSS which are used as the backend to stream files/datasets and metadata.

## File-Transfer-Application (Zowe-Desktop-Plugin)
#### Project Link :- https://github.com/zowe/file-transfer-app

#### 1. Integrate File explorer (Zowe-File-tree) to File transfer application (Explore and perform various actions on the files persisted in Mainframe).
  * This will give the user the ability to view the file-structure of the mainframe as a tree. 
  * Wll give the ability to tag the files.
  * Change the ownership(chmod) of files and folders on the fly.
  * Cut & Copy & Paste files feature.
  * View datasets
  * Search files/datasets
  * Delete datasets/files
  
##### PR Link :- https://github.com/zowe/file-transfer-app/pull/53

#### 2. Enable search history in file explorer (file-tree) for the scope of user.
##### PR Link :- https://github.com/zowe/file-transfer-app/pull/50

#### 3. Add the application scan for the plugin configs to take actions.
##### PR Link :- https://github.com/zowe/file-transfer-app/pull/49

#### 4. Main changes for the File-Transfer App
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
   * <b> Files in mainframe are stored in either EBCDIC, ASCII or UTF-8 encoding.  When downloading files it's easier to download UTF-8 files it will be automatically converetd. But EBCDIC and ASCII we have to define what is the source and target encoding types of the files should be in order to downloads to work.
In File-Transfer application we have addressed that in the UI with an easy user-friendly way.</b>
   * Finally download contents in folder as a whole. In Fil-transfer app defined a separate UI workflow which will  inform user regarding the folder download and download content as .tar.gz file. This was done in .tar.gz compression since it requires less compute power than creating a .zip folder in mainframe. Compute power is always a critical factor to think since there are lot of ongoing tasks in the mainframe in a given time.
##### PR Link :- https://github.com/zowe/file-transfer-app/pull/54


## Zlux-File-Explorer (Zowe-File-Tree)
#### Project Link :- https://github.com/zowe/zlux-file-explorer

#### 1. File Explorer PR on 
  * Adding new theme functioanlity 
  * Fixing style conflicts 
  * Carbon component reroutes
  * Remove not used ui elements. 
##### PR Link :- https://github.com/zowe/zlux-file-explorer/pull/71

## ZSS
#### Project Link :- https://github.com/zowe/zss

#### 1. ZSS changes for chmod functionality in Mainframe 
##### PR Link :- https://github.com/zowe/zss/pull/195

#### 2. ZSS changes for tag the files recursively in Mainframe.
##### PR Link :- https://github.com/zowe/zss/pull/206

#### 3. Funcationality to download folder content from zss.
 * This will create .tar.gz file which will require less compute power from Mainframe.
 * Serve the tar.gz file as a file for the download purpose.
 * Delete the.tar.gz file after serving to the requested client.
 * Since this is a very specific use case for File-transfer-App team decided not to invlolve Zowe-Common-C project where we maintain the common generic functionality to be used all over the platforms.
##### PR Link :- https://github.com/zowe/zss/pull/204

## Zowe-Common-C
#### Project Link :- https://github.com/zowe/zowe-common-c

#### 1. Extend support for mime types with few well known extentions.
##### PR Link :- https://github.com/zowe/zowe-common-c/pull/148

#### 2. Handle text file names starts with ".".
##### PR Link :- https://github.com/zowe/zowe-common-c/pull/151

#### 3. Enable force encoding with provided encoding types.
* <b> Files in mainframe are stored in either EBCDIC, ASCII or UTF-8 encoding.  When downloading files it's easier to download UTF-8 files it will be automatically converetd. But EBCDIC and ASCII we have to define what is the source and target encoding types of the files should be in order to downloads to work.
In File-Transfer application we have addressed that in the UI with an easy user-friendly way.</b>
##### PR Link :- https://github.com/zowe/zowe-common-c/pull/160

#### 4. Download Data-Sets.
##### PR Link :- https://github.com/zowe/zowe-common-c/pull/168



