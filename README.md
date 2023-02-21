![Captdsure](https://user-images.githubusercontent.com/88446494/220330722-707690b2-2549-44f2-ae58-27a8e430750d.JPG)
# AlarmClock
The project contains a Digital Alarm Clock where you can set as many alarms as you want. 
The first part of the project contains a digital clock which keeps on getting updated every second. In the second part we can set an alarm and all the new alarms being set will be added to a list below and will the played at the right time. With every new alarm being set a delete button will be given. On clicking that button you will be able to disable to alarm and remove it from the webpage.

# TechStack: 
HTML, CSS, JavaScript

# Approach:
All the alarms being set will be added to an array. The array will be checked every second if it contains the current time. It it does, then the alarm sound will be played. 
On clicking on "Stop alarm" the audio will be paused and on clicking on "Delete Alarm" the said alarm will be removed from the array and the list. 

 
# Features:

 Clock face:
 
- Clock showing the current time (seconds,mins,hrs should change as time changes)
- 12 hrs Clock design

Set Alarm:

 - Provide input boxes to set an alarm (hr,min,sec, am/pm)
 - Once the sets the time and click “Set Alarm” button, add that alarm to the alarms list below
 - When the alarm goes of just use JS alert function to alert in the browser

Alarms list:

 - Display a list of all the alarms set by user
 - Delete alarm
 - For each alarm give a delete button to delete the alarm
 - When the user deletes an alarm  it “does not alerts the user” again
